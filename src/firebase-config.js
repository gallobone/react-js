const Rebase = require('re-base')
const firebase = require('firebase')



  const FirebaseConfig = {
    apiKey: "AIzaSyA1LBMJGW0fSadUwtqNwZ6aFAkDvB_hKng",
    authDomain: "xumes-portfolio-738ab.firebaseapp.com",
    databaseURL: "https://xumes-portfolio-738ab.firebaseio.com",
    projectId: "xumes-portfolio-738ab",
    storageBucket: "xumes-portfolio-738ab.appspot.com",
    messagingSenderId: "707851828895"
  };

  
  const app = firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database())


  export default config
