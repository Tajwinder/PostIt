// import firebase from 'firebase';
const firebase = require('firebase/app');
require('firebase/auth');
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDMOLFixTiKsm_Tb0YByEEi5nS_fpaEdPg",
    authDomain: "capstone-mockup.firebaseapp.com",
    databaseURL: "https://capstone-mockup.firebaseio.com",
    projectId: "capstone-mockup",
    storageBucket: "capstone-mockup.appspot.com",
    messagingSenderId: "1066418751339",
    appId: "1:1066418751339:web:80f6299646feef53792e2e"
  };
  // Initialize Firebase
 const fire= firebase.initializeApp(firebaseConfig);

export default fire;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDMOLFixTiKsm_Tb0YByEEi5nS_fpaEdPg",
//     authDomain: "capstone-mockup.firebaseapp.com",
//     databaseURL: "https://capstone-mockup.firebaseio.com",
//     projectId: "capstone-mockup",
//     storageBucket: "capstone-mockup.appspot.com",
//     messagingSenderId: "1066418751339",
//     appId: "1:1066418751339:web:80f6299646feef53792e2e"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>