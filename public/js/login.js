window.onload = function () {
    initApp();
};

function initApp() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          
          alert("Sign in already!!")
        //   document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
        //   document.getElementById('quickstart-sign-in').textContent = 'Sign out';
        //   document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          if (!emailVerified) {
            // document.getElementById('quickstart-verify-email').disabled = false;
          }
        } else {
          // User is signed out.
        //   document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
        //   document.getElementById('quickstart-sign-in').textContent = 'Sign in';
        //   document.getElementById('quickstart-account-details').textContent = 'null';
        }
        // document.getElementById('quickstart-sign-in').disabled = false;
      });

    document.getElementById('loginBtn').addEventListener('click', signIn, false);
}

function signIn() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }

        // Signin
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
    }
}

function signUp() {
    window.location = "./email-link.html";
}