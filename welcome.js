var profile = googleUser.getBasicProfile();
if (profile.getEmail() === null) {
  window.location.replace("http://ads.lciteam.club/");
}
