import firebase from "firebase"
import "firebase/auth";


export const register = (email, password) =>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  }

  export const login = (email, password) =>{
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    alert(error.message);
  });
  }

  export const logout = () =>{
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("logout")
    }).catch((error) => {
      // An error happened.
    });
  }

