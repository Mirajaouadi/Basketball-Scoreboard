score_home = parseInt(document.getElementById("home-points-text").textContent);
score_guest = parseInt(
  document.getElementById("guest-points-text").textContent
);
function add1_home() {
  score_home += 1;
  document.getElementById("home-points-text").textContent = score_home;
}
function add2_home() {
  score_home += 2;
  document.getElementById("home-points-text").textContent = score_home;
}
function add3_home() {
  score_home += 3;
  document.getElementById("home-points-text").textContent = score_home;
}
function add1_guest() {
  score_guest += 1;
  document.getElementById("guest-points-text").textContent = score_guest;
}
function add2_guest() {
  score_guest += 2;
  document.getElementById("guest-points-text").textContent = score_guest;
}
function add3_guest() {
  score_guest += 3;
  document.getElementById("guest-points-text").textContent = score_guest;
}
