const controller = {};
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passRegex = /^[a-z0-9_-]{6,18}$/;
controller.validateLoginInfo = (email, password) => {

  if (!email) {
    view.renderErrorMessage('email-error-message', 'Please input email');
  } else if (!emailRegex.test(email)) {
    view.renderErrorMessage('email-error-message', 'Invalid email address');
  } else {
    view.renderErrorMessage('email-error-message', '');
  }

  if (!password) {
    view.renderErrorMessage('password-error-message', 'Please input password');
  } else {
    view.renderErrorMessage('password-error-message', '');
  }


  // check database
  if(email && password){
      model.loginUser(email,password);
  }

};

controller.validateRegisterInfo = (registerInfo) =>{
  if(!registerInfo.firstName){
    view.renderErrorMessage('firstName-error-message', 'Please input First name');
  }else{
    view.renderErrorMessage('firstName-error-message','');
  }

  if(!registerInfo.lastName){
    view.renderErrorMessage('lastName-error-message', 'Please input Last name');
  }else{
    view.renderErrorMessage('lastName-error-message','');
  }

  if (!registerInfo.email) {
    view.renderErrorMessage('email-error-message','Please input email');
  } else if (!emailRegex.test(registerInfo.email)) {
    view.renderErrorMessage('email-error-message', 'Invalid email address');
  } else {
    view.renderErrorMessage('email-error-message', '');
  }

  if(!registerInfo.password){
    view.renderErrorMessage('password-error-message','Please input password');
  }else if(!passRegex.test(registerInfo.password)){
    view.renderErrorMessage('password-error-message','Invalid password');
  }else{
    view.renderErrorMessage('password-error-message','');
  }

  if(!registerInfo.confirmPassword){
    view.renderErrorMessage('confirmPassword-error-message','Please input confirm password');
  }else{
    if(registerInfo.confirmPassword==registerInfo.password){
      view.renderErrorMessage('confirmPassword-error-message','');
    }else{
      view.renderErrorMessage('confirmPassword-error-message','Please input again confirm password');
    }
  }

  if(registerInfo.firstName && registerInfo.lastName && registerInfo.email && registerInfo.password && registerInfo.confirmPassword){
      model.createNewUser(
        registerInfo.firstName,
        registerInfo.lastName,
        registerInfo.email,
        registerInfo.password
      );
  }
};
controller.validateResetInfo = (email)=>{
  if (!email) {
    view.renderErrorMessage('email-error-message', 'Please input email');
  } else if (!emailRegex.test(email)) {
    view.renderErrorMessage('email-error-message', 'Invalid email address');
  } else {
    view.renderErrorMessage('email-error-message', '');
  }
  if(email){
    model.resetPassword(email);
  }
};

controller.validateAddConversation = (conversationName,userEmail)=>{
  if(!conversationName){
    view.renderErrorMessage('conversation-name-error-message','Please input conversation name');
  }else{
    view.renderErrorMessage('conversation-name-error-message','');
  }
  if (!userEmail) {
    view.renderErrorMessage('email-error-message', 'Please input email');
  } else if (!emailRegex.test(userEmail)) {
    view.renderErrorMessage('email-error-message', 'Invalid email address');
  }else if(userEmail===model.loginUser.email){
    view.renderErrorMessage('email-error-message', 'Ypu cant input your own email')
  
  } else {
    view.renderErrorMessage('email-error-message', '');
  }

  if(conversationName && userEmail && emailRegex.test(userEmail) && userEmail!== model.loginUser.email){
    model.createConversation(conversationName,userEmail);
  }
<<<<<<< HEAD
}

controller.validateAddMemberEmail = (memberEmail)=>{
  if(!memberEmail){
    view.renderErrorMessage('email-error-message','Please input email')
  } else if (!emailRegex.test(memberEmail)){
    view.renderErrorMessage('email-error-message','Invalid email address');
  }else if(model.activeConversation.users.indexOf(memberEmail) > -1){
    view.renderErrorMessage('email-error-message','This email already in the conversation.');
  } else {
    view.renderErrorMessage('email-error-message','');
  }

  if(memberEmail && emailRegex.test(memberEmail) && model.activeConversation.users.indexOf(memberEmail) ===-1){
    model.addMember(memberEmail);
  }
};
=======
}
>>>>>>> daa02d486d8551f9a038ddaf7676f2b5d06b2e18
