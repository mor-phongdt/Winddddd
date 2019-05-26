const model = ()=>{};

model.loginUser = undefined;

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