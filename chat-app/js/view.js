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
            const welcomeEle = document.getElementById('welcome');
            if(welcomeEle){
                welcomeEle.innerText =` Welcome back ${model.loginUser.email} `
            }
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