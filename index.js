gapi.load('auth2', function() {
  gapi.auth2.int();
});
function onSignIn(googleUser) {
  window.location.replace("http://ads.lciteam.club/welcome.html");
}
