const diceBearUrl = "https://avatars.dicebear.com/api/identicon/";
let randomString = "";
document.getElementById("year").innerText = new Date().getFullYear();

const getRandomString = async () => {
  fetch("https://random.justyy.workers.dev/api/random/?cached&n=3")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("pfp").src = `${diceBearUrl}${data}.svg`;
    });
};

getRandomString();
