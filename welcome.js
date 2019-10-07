gapi.load('auth2', function() {
  gapi.auth2.int();
});
var profile = googleUser.getBasicProfile();
if (profile.getEmail() === null) {
  window.location.replace("http://ads.lciteam.club/");
}
