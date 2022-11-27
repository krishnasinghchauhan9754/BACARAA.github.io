import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyANQPIa91gq3Tic3C30thvoDhKj6_kf87o",
    authDomain: "baccara-2191c.firebaseapp.com",
    projectId: "baccara-2191c",
    storageBucket: "baccara-2191c.appspot.com",
    messagingSenderId: "517336114705",
    appId: "1:517336114705:web:4c98e4bce2fa2e6ebbf3b0"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


document.getElementById('reg-btn').addEventListener('click', function(){
    document.getElementById('register-div').style.display='inline';
    document.getElementById('login-div').style.display='none';

});

document.getElementById('log-btn').addEventListener('click', function(){
    document.getElementById('register-div').style.display='none';
    document.getElementById('login-div').style.display='inline';
});


document.getElementById("login-btn").addEventListener('click', function(){
    const loginEmail= document.getElementById("login-email").value;
    const loginPassword=document.getElementById("login-password").value;


    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="welcome back<br>"+loginEmail+" was login successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="sorry ! <br>"+errorMessage;
    });

});
