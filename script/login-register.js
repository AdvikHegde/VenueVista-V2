// // JavaScript to handle the modal popup
// let login_popup = document.querySelector('.login-container-div');
// let register_popup = document.querySelector('.register-container-div');

// let overlay = document.querySelector('.overlay');

// let login_popup_displayed = false;
// let register_popup_displayed = false;

// // Show the login_popup
// document.body.addEventListener('click', () => {
//    if(!login_popup_displayed) {

//     // Show the login_popup and overlay
//     login_popup.style.display = 'block';
//     overlay.style.display = 'block';
//     login_popup_displayed = true;
//   }
// })
// overlay.addEventListener('click',(event)=> {
//   // Toggle the popup display based on its current state
//   if (login_popup_displayed) {
//     // Hide the login_popup and overlay
//     login_popup.style.display = 'none';
//     overlay.style.display = 'none';
//     login_popup_displayed = false;
//   }
//   event.stopPropagation();
// })

// //Code to display register popup and hide the login popup when the register link of the login popup is clicked.
// let register_element = document.getElementById('register-link');
// register_element.addEventListener('click',(event)=>{
//   login_popup.style.display = 'none';
//   login_popup_displayed = false;

//   register_popup.style.display = 'block';
//   register_popup_displayed = true;

//   overlay.style.display = 'block';
//   event.stopPropagation();
// })
// //Code to hide register popup when any part outside of the register popup is clicked.
// overlay.addEventListener('click',(event)=>{
//   if (register_popup_displayed){
//     register_popup.style.display = 'none';
//     overlay.style.display = 'none';
//     register_popup_displayed = false;
//   }
//   event.stopPropagation()
// })
