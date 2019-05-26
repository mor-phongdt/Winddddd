window.onload = () => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyChkUzOraZw_ZrN0I4P8rJNT4whKD5hy9A",
        authDomain: "ci-21-dd303.firebaseapp.com",
        databaseURL: "https://ci-21-dd303.firebaseio.com",
        projectId: "ci-21-dd303",
        storageBucket: "ci-21-dd303.appspot.com",
        messagingSenderId: "289017032387",
        appId: "1:289017032387:web:321dc819811621fe"
      };

      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    view.setActiveScreen('loginPage');
  }