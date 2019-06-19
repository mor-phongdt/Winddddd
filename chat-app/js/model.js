const model = ()=>{};

model.loginUser = undefined;
model.conversations = undefined;
model.activeConversation = undefined;
model.listener = undefined;

model.createNewUser = (
    firstName,
    lastName,
    email,
    password
)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((registerResult)=>{
            //update displayname

        registerResult.user.updateProfile({
            displayName : `${firstName} ${lastName}`,
        });

        //send email verification
        registerResult.user.sendEmailVerification();

        window.alert('Register success . Please check your email !!!')
        view.clearRegisterInfo();
        })
        .catch((error)=>{
            window.alert(error.code);
        });
};

model.loginUser=(email,password) =>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((loginResult)=>{
        if(loginResult.user.emailVerified){
            //login success
            model.loginUser = {
                id : loginResult.user.uid,
                displayName : loginResult.user.displayName,
                email: loginResult.user.email,
            };
            view.setActiveScreen('chatPage');
        }else{
            window.alert('This account is not activate . Please verify');
        }
    })
    .catch((error)=>{
        window.alert(error.message);
    })
};

model.resetPassword =(email)=>{
    firebase.auth().sendPasswordResetEmail(email).then(()=>{window.alert('Please check your enmail!');}).catch((error)=>{window.alert(error.message);})

}

model.saveMessage=(newMessageContent)=>{
    const newMessage = {
        content : newMessageContent,
        user : model.loginUser.email,
        createdAt : new Date(),
    };
    const db = firebase.firestore();
    db.collection('conversations')
    .doc(model.activeConversation.id)
    .update({
        messages: firebase.firestore.FieldValue.arrayUnion(newMessage),});

};
model.loadConversations = ()=>{
    const db = firebase.firestore();
    model.listener = db.collection('conversations').where('users','array-contains',model.loginUser.email)
    .onSnapshot((snapshot)=>{ 
        const conversations = [];
            snapshot.docChanges().forEach((item)=>{
            const conversation = item.doc.data();
            conversation.id = item.doc.id;
            conversations.push(conversation);
        });
       
        if(model.conversations){  
            conversations.forEach((item)=>{ 
            //check new mess or new conversation
                let isNewConversation = true;
                for(let i =0 ; i< model.conversations.length ; i+=1){
                    if(model.conversations[i].id===item.id){
                        isNewConversation = false;
                        break;
                    }
                }
              
                for(let i = 0 ; i< model.conversations.length ; i+=1){
                    if(model.conversations[i].id===item.id){
                        model.conversations[i]=item;
                        const lastMessage = item.messages[item.messages.length-1];

                        if(lastMessage.user!== model.loginUser.email){
                            view.renderNotification(item.id);
                        }
                    }
                }

                if(isNewConversation){
                    //render conversation item
                    model.conversations.push(item);
                    view.renderConversationItem(item);
                    view.renderNotification(item.id);
                }else{

                    if(item.id===model.activeConversation.id){
                        //check new message or new member
                        if(item.messages.length !== model.activeConversation.messages.length){
                              //render last message
                            const newMess = item.messages[item.messages.length-1];
                            if(newMess.user===model.loginUser.email){
                                view.sendMessage('',newMess.content);
                            }else{
                                view.sendMessage(newMess.user, newMess.content);
                            }   
                        }else {
                            //render new member
                            const newMember = item.users[item.users.length-1];
                            view.renderConversationUser(newMember);
                        }

                        
                    }
                }
            });

        }else{
            model.activeConversation = conversations[0]; 

            model.conversations = conversations;

            if(model.activeConversation){
                //render all user of active conversation 
                model.activeConversation.users.forEach(user =>{
                    view.renderConversationUser(user);
                });
                
                //render all messages
                model.activeConversation.messages.forEach((mess)=>{
                    if(mess.user==model.loginUser.email){
                        view.sendMessage('',mess.content);
                    }else{
                        view.sendMessage(mess.user,mess.content);
                    }
                });
            }
            //render all conversation
           model.conversations.forEach((item)=>{
                view.renderConversationItem(item);
            })

            
        }
        
    });
};
model.clearConversation =()=>{
    model.conversations = undefined;
    model.activeConversation = undefined;
    model.listener();
};

model.createConversation = (conversationName,userEmail)=>{
    const db = firebase.firestore();
    const newConversation = {
        name : conversationName,
        users : [userEmail,model.loginUser.email],
        createdAt : new Date(),
        messages : [],
    }
    db.collection('conversations').add(newConversation)
    .then()
    .catch((error)=>{
        console.log(error);
        window.alert(error.message);});
};

model.changeActiveConversation = (newActiveConversation)=>{
    model.activeConversation = newActiveConversation;
}

model.addMember = (memberEmail) =>{
    const db = firebase.firestore();
    db.collection('conversations').doc(model.activeConversation.id).update({
        users : firebase.firestore.FieldValue.arrayUnion(memberEmail),
    }).then(()=>{
        view.clearAddMemberForm();
    })  
    .catch((error)=>{
        console.log(error);
        window.alert(error.message);
    });
};