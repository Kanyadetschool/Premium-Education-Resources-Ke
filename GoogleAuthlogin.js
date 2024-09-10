// FirebaseUI config
var uiConfig = {
  signInFlow: 'popup',  // Change to 'popup' to avoid cross-origin redirect issues
  signInSuccessUrl: 'loginwindow2.html',
  signInOptions: [
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  tosUrl: './terms.html'
};

// Initialize the FirebaseUI Widget using Firebase
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded
ui.start('#firebaseui-auth-container', uiConfig);
