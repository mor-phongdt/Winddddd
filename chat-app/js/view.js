const view = {};

view.setActiveScreen = (screenName) => {
  const app = document.getElementById('app');

  switch (screenName) {
    case 'loginPage':
      if (app) {
        app.innerHTML = components.loginPage;
      }

      // login submit
      const loginForm = document.getElementById('login-form');
      if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
            controller.validateLoginInfo(email, password);
            
            
        });
      }

      // register click
      const registerLink = document.getElementById('register-link');
      if (registerLink) {
        registerLink.addEventListener('click', (event) => {
          view.setActiveScreen('registerPage');
        });
      }

      //reset password link
      const resetPasswordLink = document.getElementById('reset-password-link');
      if(resetPasswordLink){
        resetPasswordLink.addEventListener('click',(event)=>{
          view.setActiveScreen('resetPasswordPage');
        });
      }
      break;
    case 'registerPage':
      if (app) {
        app.innerHTML = components.registerPage;
      }
      //register submit
      const registerForm  = document.getElementById('register-form');
      if(registerForm){
        registerForm.addEventListener('submit',(event)=> {
          event.preventDefault();
          const registerInfo = {
            firstName : registerForm.firstName.value,
            lastName : registerForm.lastName.value,
            email : registerForm.email.value,
            password : registerForm.password.value,
            confirmPassword : registerForm.confirmPassword.value,
          };
          controller.validateRegisterInfo(registerInfo);
        });
       
      }


      //login click
      const loginLink = document.getElementById('already-have-account');
      if(loginLink){
        loginLink.addEventListener('click',(event)=>{
          view.setActiveScreen('loginPage');
        });
      }
      break;
    
    case 'chatPage':
            if (app) {
                app.innerHTML = components.chatPage;
              }
<<<<<<< HEAD
              //load all conversations
              model.loadConversations();

=======
>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
              //listen media query
              const mediaQueryResult = window.matchMedia('only screen and (max-width: 768px)');
              mediaQueryResult.addListener((mediaQuery)=>{
                if(mediaQuery.matches){
                  //render small conversation item
                  view.renderSmallConversation();
                }else{
                  //render normal conversation item
                  view.renderBigConversationItem();
                }
              });
<<<<<<< HEAD
=======
              //load all conversations
              model.loadConversations();

>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
              
              const messageInputElement = document.getElementById('message-input');
              if(messageInputElement){
                messageInputElement.addEventListener('focus',(event)=>{
                  
                });
              }

              const addNewConversation = document.getElementById('new-conversation');
            if(addNewConversation){
              addNewConversation.addEventListener('click',(event)=>{
                model.clearConversation();
                view.setActiveScreen('addNewConversation');
              })
            }

 

            const chatForm= document.getElementById('chat-form');
            if(chatForm){
              chatForm.addEventListener('submit',(event)=>{
                event.preventDefault();
                
                const chatContainer = document.getElementById("message-container");
<<<<<<< HEAD

                if(chatContainer&&chatForm.message.value){
                  //save to firebase
=======
                //chatContainer.innerHTML +="\n" +newMessage;
                if(chatContainer&&chatForm.message.value){
                  //save to database
>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
                  model.saveMessage(chatForm.message.value);
                  chatForm.message.value = '';
                }
              });
            }

<<<<<<< HEAD
            //listen addMemberForm
            const addMemberForm = document.getElementById('add-member-form');
            if(addMemberForm){
              addMemberForm.addEventListener('submit',event=>{
                event.preventDefault();
                const memberEmail = addMemberForm.email.value;
                controller.validateAddMemberEmail(memberEmail);
              });
            }
=======
>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
            
            break;
    case 'resetPasswordPage':
            if(app){
              app.innerHTML = components.resetPasswordPage;
            }

            //email submit
            const resetPasswordForm = document.getElementById('reset-password-form');
            if(resetPasswordForm){
              resetPasswordForm.addEventListener('submit',(event)=>{
                event.preventDefault();
                const email = resetPasswordForm.email.value;
                controller.validateResetInfo(email);
              });
            }
            break;
    case 'addNewConversation':
      if(app){
        app.innerHTML = components.addNewConversation;
      }

      const cancel = document.getElementById('cancel');
      if(cancel){
        cancel.addEventListener('click',(event)=>{
          view.setActiveScreen('chatPage');
        })
      }

      const form = document.getElementById('create-conversation-form');
      if(form){
        form.addEventListener('submit',event=>{
          event.preventDefault();
          const conversationName = form.conversationName.value;
          const userEmail = form.userEmail.value;
          controller.validateAddConversation(conversationName,userEmail);
          view.setActiveScreen('chatPage');
        })
      }
      break;
  }
};

view.renderErrorMessage = (elementId, errorMessage) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = errorMessage;
  }
}


view.clearRegisterInfo = ()=>{
    const registerForm = document.getElementById('register-form');
    if(registerForm){
        registerForm.firstName.value='';
        registerForm.lastName.value='';
        registerForm.email.value='';
        registerForm.password.value='';
        registerForm.confirmPassword.value='';
    }
}

view.sendMessage = (sender, messageContent) =>{
  const messageContainer = document.getElementById('message-container');
  if(messageContainer){
    const messageItem = document.createElement('div');
    const senderElement = document.createElement('div');
    const messageContentElement = document.createElement('div');

    messageItem.classList.add('message-item');
    if(sender){
      messageItem.classList.add('orther-message');
    }else{
      messageItem.classList.add('my-message');
    }

    senderElement.classList.add('sender');
    if(sender){
      senderElement.innerText = sender;
    }
    messageContentElement.classList.add('message-content');
    messageContentElement.innerText = messageContent;

    messageItem.appendChild(senderElement);
    messageItem.appendChild(messageContentElement);

    messageContainer.appendChild(messageItem);
    messageContainer.scrollTop = messageContainer.scrollHeight;

  }
};

view.renderConversationItem = (conversation)=>{
  const conversationListContent = document.getElementById('conversation-list-content');
  if(conversationListContent){
    const conversationItem = document.createElement('div');
    const mediaQueryResult = window.matchMedia('only screen and (max-width: 768px)');
    const btnAddConversation = document.getElementById('new-conversation');
    conversationItem.id = conversation.id;
    conversationItem.classList.add('conversation-item');
    conversationItem.setAttribute('data-conversation-name',conversation.name);
<<<<<<< HEAD
    
=======
>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
    if(mediaQueryResult.matches){
      conversationItem.innerText = conversation.name[0].toUpperCase();
      btnAddConversation.innerText = '+';
    }else{
      conversationItem.innerText = conversation.name;
    }
  
    if(conversation.id === model.activeConversation.id){
      conversationItem.classList.add('active-conversation');
    }

    conversationItem.addEventListener('click',(event)=>{
      let conversationInfo;
      model.conversations.forEach((item)=>{
        if(item.id===conversation.id){
          conversationInfo=item;
        }
      })

      view.removeNotification(conversation.id);
      //update model.conversation
      model.changeActiveConversation(conversation);
      
      //update .active-conversation(style)
      const activeConversationElement = document.querySelector('.active-conversation');
      if(activeConversationElement){
        activeConversationElement.classList.remove('active-conversation');
      }
      conversationItem.classList.add('active-conversation');
      //update message container
      const messageContainerElement = document.getElementById('message-container');
      if(messageContainerElement){
        messageContainerElement.innerText='';
      }
      conversationInfo.messages.forEach((item)=>{
        if(item.user==model.loginUser.email){
          view.sendMessage('',item.content);
        }else{
          view.sendMessage(item.user,item.content);
        }
<<<<<<< HEAD
      });
      //update member list
      const memberListElement = document.getElementById('member-list');
      if(memberListElement){
        memberListElement.innerText='';
        conversationInfo.users.forEach((user)=>{
          view.renderConversationUser(user);
        })
      }

    });
=======
      })
    })
>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
    conversationListContent.appendChild(conversationItem);
  }
};

view.renderNotification = (conversationId)=>{
  const conversationItemElement = document.getElementById(conversationId);
  if(conversationItemElement){
    //check exist noti
    const existedNotificationElement = conversationItemElement.querySelector('.notification');
    if(!existedNotificationElement){
      const notiElement = document.createElement('span');
      notiElement.classList.add('notification');
      conversationItemElement.appendChild(notiElement);
     ;
    }
<<<<<<< HEAD
=======
  


>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
  }
};



view.removeNotification = (conversationId)=>{
  const conversationItemElement = document.getElementById(conversationId);
  if(conversationItemElement){
    const existedNotificationElement = conversationItemElement.querySelector(`#${conversationId} .notification`);
    if(existedNotificationElement){
      conversationItemElement.removeChild(existedNotificationElement);
    }
  }
};
<<<<<<< HEAD

=======
>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
view.renderSmallConversation = ()=>{
  const conversationItemElements = document.getElementsByClassName('conversation-item');
  for(let element of conversationItemElements){
    const conversationName = element.innerText;
    const firstLetter = conversationName[0];

    element.innerText = firstLetter.toUpperCase();

  }
  const btnAddConversation = document.getElementById('new-conversation');
  if(btnAddConversation){
    btnAddConversation.innerText = '+';
  }
<<<<<<< HEAD


 
=======
>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
};


view.renderBigConversationItem =()=>{
  const conversationItemElements = document.getElementsByClassName('conversation-item');
  for(let element of conversationItemElements){
    const fullname = element.getAttribute('data-conversation-name');
    element.innerText = fullname;
  }
  const btnAddConversation = document.getElementById('new-conversation');
  if(btnAddConversation){
    btnAddConversation.innerText=btnAddConversation.getAttribute('data-name');
  }
<<<<<<< HEAD
};

view.renderConversationUser = (userEmail) =>{
  const memberListElement = document.getElementById('member-list');
  if(memberListElement){
    const userElement = document.createElement('div');
    userElement.classList.add('member-item');
    userElement.innerText = userEmail;
    
    memberListElement.appendChild(userElement);
  };
};

view.clearAddMemberForm = () =>{
  const addMemberInput =  document.getElementById('member-input');
  if(addMemberInput) {
    addMemberInput.value = '';
  }
=======
>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
};