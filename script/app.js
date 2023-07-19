const a = document.querySelector(".nav__question");
const modal = document.getElementById("modal");
const blur = document.getElementById("blur");
const baseUrl = "https://64b36b2638e74e386d560d13.mockapi.io/api/v1/lawyer";
const mdBtn = document.getElementById("md_btn");
const tel = document.getElementById("tname");
const fname = document.getElementById("fname");
const post = document.getElementById("post");
const post1 = document.getElementById("post1");
const close = document.getElementById("md_close");
const success = document.getElementById("success");
const ftclose = document.getElementById("close_ft");
const ftclose1 = document.getElementById("close_ft1");
const zakrit = document.querySelector(".zakrit");
const zakrit1 = document.querySelector(".zakrit1");
const introBtn = document.getElementById("intro__btn");
const openMenu = document.querySelector(".open_menu");
const menuBtn = document.getElementById("menu-btn");
const menuClose = document.querySelector(".menu__close");
const secondBtn = document.getElementById("sc__btn");
const responsivemd = document.getElementById("modal_res");
const resClose = document.querySelector(".res_close");
const success1 = document.getElementById("success1");
const tel1 = document.getElementById("tname1");
const fname1 = document.getElementById("fname1");


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
  responsivemd.classList.add("hidden");
  responsivemd.classList.remove("block");
  success1.classList.add("hidden");
  success1.classList.remove("flex");
  document.body.style.overflowY = "scroll";
});

close.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  modal.classList.remove("block");
  blur.classList.remove("block");
  document.body.style.overflowY = "scroll";
});

ftclose.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  success.classList.add("hidden");
  success.classList.remove("flex");
  modal.classList.remove("block");
  blur.classList.remove("block");
  document.body.style.overflowY = "scroll";
});

ftclose1.addEventListener("click", () => {
  responsivemd.classList.add("hidden");
  blur.classList.add("hidden");
  success1.classList.add("hidden");
  success1.classList.remove("flex");
  responsivemd.classList.remove("block");
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

zakrit1.addEventListener('click', () => {
  responsivemd.classList.add("hidden");
  blur.classList.add("hidden");
  success1.classList.add("hidden");
  success1.classList.remove("flex");
  responsivemd.classList.remove("block");
  blur.classList.remove("block");
  document.body.style.overflowY = "scroll";
})

introBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  blur.classList.remove("hidden");
  modal.classList.add("block");
  blur.classList.add("block");
  document.body.style.overflowY = "hidden";
  console.log(blur.classList, blur);
});

menuBtn.addEventListener("click", () => {
  openMenu.style.transform = "translateX(" + 1 + "px) ";
  openMenu.style.transitionDuration = "0.3s";
});

menuClose.addEventListener("click", () => {
  openMenu.style.transform = "translateX(" + -428 + "px)";
});

secondBtn.addEventListener("click", () => {
  responsivemd.classList.remove("hidden");
  blur.classList.remove("hidden");
  blur.classList.add("block");
  console.log(responsivemd.classList);
  document.body.style.overflowY = "hidden";
  responsivemd.classList.add("block");
});

resClose.addEventListener('click', () => {
  responsivemd.classList.add("hidden");
  blur.classList.add("hidden");
  responsivemd.classList.remove("block");
  blur.classList.remove("block");
  document.body.style.overflowY = "scroll";
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
  if (tel.value !== "" && fname.value !== "") {
    createPost();
    success.classList.add("flex");
  } else {
    alert("Iltimos oxirigacha to'ldiring!!!");
  }
});

post1.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(post);
  if (tel1.value !== "" && fname1.value !== "") {
    createPost();
    success1.classList.add("flex");
    responsivemd.classList.remove("block");
    responsivemd.classList.add("hidden")
  } else {
    alert("Iltimos oxirigacha to'ldiring!!!");
  }
});
