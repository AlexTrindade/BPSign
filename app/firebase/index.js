import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDtK0peZIdx2TKdf7AIv8HhDlK0eCyq1IU",
    authDomain: "bpsign-2d44b.firebaseapp.com",
    databaseURL: "https://bpsign-2d44b.firebaseio.com",
    storageBucket: ""
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
