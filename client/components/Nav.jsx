import React from 'react'
import { connect } from 'react-redux'


export class Nav extends React.Component {
  render() {
    return (
      <p class='clock'></p>
    )
    // }
    // }
    // function currentTime() {
    //   var date = new Date()
    //   var hour = date.getHours()
    //   var min = date.getMinutes()
    //   var sec = date.getSeconds()
    //   hour = updateTime(hour);
    //   min = updateTime(min);
    //   sec = updateTime(sec);
    //   document.getElementById('clock').innerText = hour + " : " + min + " : " + sec; 
    //     var t = setTimeout(function(){ currentTime() }, 1000); 
  }
}
// function updateTime(k) {
//   if (k < 10) {
//     return "0" + k;
//   }
//   else {
//     return k;
//   }
// }



//Google sign in function

// export default function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

// onSignIn()

// Google sign out button;
{/* <a href="#" onclick="signOut();">Sign out</a>
<script>
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
</script> */}


// currentTime(); 
// export default connect(mapStateToProps)(Nav)
