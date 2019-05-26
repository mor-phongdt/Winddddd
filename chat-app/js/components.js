const components = {};

components.welcomePage = `
  <div>Welcome Mindx Chats</div>
`;

components.registerPage = `
<div class='register-login-container'>
<div class='form-wrapper'>
  <div class='logo'>
    <span>Techkids Chat</span>
  </div>
  <div class='form-container'>
    <form id='register-form'>
      <div class='name-wrapper'>
        <div class='input-wrapper'>
          <input class='input' type='text' name="firstName" placeholder="Firstname" />
          <div id='firstName-error-message' class="error"></div>
        </div>
        
        <div class='input-wrapper'>
            <input class='input' type='text' name="lastName" placeholder="Lastname" />
            <div id='lastName-error-message' class="error"></div>
        </div>
        
      </div>
      <div class='input-wrapper'>
        <input class='input' type='text' name='email' placeholder="email" />
      </div>
      <div id='email-error-message' class="error"></div>
      <div class="input-wrapper">
        <input class="input" type="password" name="password" placeholder="Password"/>
      </div>
      <div id='password-error-message' class="error"></div>
      <div class="input-wrapper">
        <input class="input" type="password" name="confirmPassword" placeholder="Confirm Password"/>
      </div>
      <div id='confirmPassword-error-message' class="error"></div>
      <div class="input-wrapper register-footer">
        <a id='already-have-account' >Already have an account? Login</a>
        <input class="btn" type="submit" value="Register" />
      </div>
     
    </form>
  </div>
</div>
</div>
`;


components.loginPage = `
<div class='register-login-container'>
  <div class='form-wrapper'>
    <div class='logo'>
      <span>Techkids Chat</span>
    </div>
    <form id='login-form'>
      <div class="input-wrapper">
        <input
          class='input'
          type='text'
          name='email'
          placeholder="Email address"
        />
        <div id='email-error-message' class="error"></div>
      </div>
      <div class="input-wrapper">
        <input
          class='input'
          type='password'
          name='password'
          placeholder="Password"
        />
        <div id='password-error-message' class="error"></div>
      </div>
      <div class='input-wrapper'>
        <a id='register-link' >Dont have an account? Register</a>
        
        <input class="btn" type='submit' value='Log In' />
      </div>
      <div>
        <a id='reset-password-link' >Reset password</a>
      </div>
    </form>
  </div>
</div>
`;

components.chatPage =`<div id='welcome'>Login success !! </div>`;
components.resetPasswordPage=`<div class='reset-password-container'>
<div class='form-wrapper'>
  <div class='logo'>
    <span>Techkids Chat</span>
  </div>

  <div class="form-container">
    <form id='reset-password-form'>
      <div class="input-wrapper">
        <input
          class="input"
          type="text"
          name='email'
          placeholder="Email"/>
      </div>
      <div id='email-error-message' class='error'></div>

      <div class="input-wrapper">
          <input class="btn" type='submit' type='submit' value='Submit' />
      </div>
    </form>
  </div>
</div>
`;
