// import React from 'react'
// import { connect } from 'react-redux'


// export class Nav extends React.Component {
// render () {
// return (
// <p class='clock'></p>
// )
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
// }

// function updateTime(k) {
//   if (k < 10) {
//     return "0" + k;
//   }
//   else {
//     return k;
//   }
// }

// currentTime(); 
// export default connect(mapStateToProps)(Clock)