const a = document.querySelector(".nav__question");
const modal = document.getElementById("modal");
const blur = document.getElementById("blur");
const baseUrl = "https://64b36b2638e74e386d560d13.mockapi.io/api/v1/lawyer";
const mdBtn = document.getElementById("md_btn");
const tel = document.getElementById("tname");
const fname = document.getElementById("fname");
const post = document.getElementById("post");
const close = document.getElementById("md_close");
const success = document.getElementById("success");
const ftclose = document.getElementById("close_ft");
const zakrit = document.querySelector(".zakrit");
const introBtn = document.getElementById("intro__btn");
const openMenu = document.querySelector(".open_menu");
const menuBtn = document.getElementById("menu-btn");
const menuClose = document.querySelector(".menu__close");


a.addEventListener("click", () => {
  modal.classList.remove("hidden");
  blur.classList.remove("hidden");
  modal.classList.add("block");
  blur.classList.add("block");
  document.body.style.overflowY = "hidden";
  console.log(blur.classList, blur);
});

blur.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  success.classList.add("hidden");
  success.classList.remove("flex");
  modal.classList.remove("block");
  blur.classList.remove("block");
  document.body.style.overflowY = "scroll";
});

close.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  modal.classList.remove("block");
  blur.classList.remove("block");
  document.body.style.overflowY = "scroll";
});

ftclose.addEventListener('click', () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  success.classList.add("hidden");
  success.classList.remove("flex");
  modal.classList.remove("block");
  blur.classList.remove("block");
  document.body.style.overflowY = "scroll";
});

zakrit.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  success.classList.add("hidden");
  success.classList.remove("flex");
  modal.classList.remove("block");
  blur.classList.remove("block");
  document.body.style.overflowY = "scroll";
});

introBtn.addEventListener('click', () => {
  modal.classList.remove("hidden");
  blur.classList.remove("hidden");
  modal.classList.add("block");
  blur.classList.add("block");
  document.body.style.overflowY = "hidden";
  console.log(blur.classList, blur);
});

menuBtn.addEventListener('click', () => {
  openMenu.style.transform = "translateX("+1+ "px) ";
  openMenu.style.transitionDuration = "0.3s";
});

menuClose.addEventListener('click', () => {
openMenu.style.transform = "translateX("+ -428 +"px)";
});



function createPost() {
  const newPost = {
    tel: tel.value,
    name: fname.value,
  };

  fetch(`${baseUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
}

post.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(post);
  if(tel.value !== "" && fname.value !== "") {
    createPost();
    success.classList.add("flex")


  }else{
    alert("Iltimos oxirigacha to'ldiring!!!")
  }
});

