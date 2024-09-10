var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyCYYh-wS7CB1ByGRM_03EthUJWfG8Bnw9A",
  authDomain: "premium-education-resources-ke.firebaseapp.com",
  projectId: "premium-education-resources-ke",
  storageBucket: "premium-education-resources-ke.appspot.com",
  messagingSenderId: "140427076511",
  appId: "1:140427076511:web:829120ea2e43ce64e0d3aa",
  measurementId: "G-8CJBLDB2CE"
};

if (!hasInit) {
    firebase.initializeApp(config);
    hasInit = true;
}
