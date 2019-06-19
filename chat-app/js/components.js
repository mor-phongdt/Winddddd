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

components.chatPage =` <div id='chat-screen' class='chat-screen'>
<div class='header'>Mindx Chats</div>

<div class='chat-container'>
  <div class='conversation-list'>
    <div class='add-conversation'>
      <button class="btn" id='new-conversation' data-name='New conversation'>+New conversation</button>
    </div>
    <div class='conversation-list-content' id='conversation-list-content'>
    
    </div>
  </div>

  <div class="chat-content">
    <div class='conversation-name'>
      <h3></h3>
    </div>
  
    <div class="message-container" id="message-container">
      <div class='message-item my-message'>
   
      
      </div>
      <div class='message-item orther-message'>
         
      
      </div>
    </div>
  
    <div class = 'message-form-container'>
      <form id='chat-form'>
        <input
          class="message-input"
          type='text'
          placeholder="Type a message.."
          name='message'
      
        />
        <input class="btn"
          class='send-button'
          type='submit'
          value='Send' 
        />
      </form>
    </div>
  </div>
  
  <div class='conversation-member' id='cnversation-member'>

    <div class="member-list" id='member-list'>

    </div>
  <form id='add-member-form'>
    <div class="add-member-form" >
      <div class="input-wrapper">
        <input
          id="member-input"
          class="input"
          type="text"
          name='email'
          placeholder="Email"/>
      </div> 
      <div id='email-error-message' class='error'></div>
      <div>
          <input type='submit' class="btn" value='Add member'/>
      </div>
    </div>
    </form>
  </div>
</div>
</div>

`;
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
          <input class="btn" type='submit'  value='Submit' />
      </div>
    </form>
  </div>
</div>
`;
components.addNewConversation = ` <div class='register-login-container'>
<div class='form-wrapper'>
  <div class='logo'>
    <span>Create a new conversation</span>
  </div>
  <form id='create-conversation-form'>
    <div class='input-wrapper'>
      <input 
        class="input"
        type="text"
        name="conversationName"
        placeholder="Conversation name"/>
    </div>
    <div id='conversation-name-error-message' class="error"></div>
    <div class="input-wrapper">
      <input
        class='input'
        type='text'
        name='userEmail'
        placeholder="Email address"
      />
      <div id='email-error-message' class="error"></div>
    </div>
    <div >
        <button type="submit" class="btn" id='add'>Create</button>
        <button type='button' class="secondary-btn" id='cancel'>Cancel</button>
    </div >

  </form>
</div>
</div>`
