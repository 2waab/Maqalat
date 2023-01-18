// Variale 
let toggler = document.querySelector(".toggle");
let nav = document.querySelector("header nav");
let closeBtn = document.querySelector(".close");
let link = document.querySelectorAll("header nav a");
let content = document.querySelector(".page-of-artical div");
let title = document.querySelector("title");

// Get Information From Local Storge
let mainData = window.localStorage.getItem("get");
let dataObj = JSON.parse(mainData);
for (let i = 0; i < dataObj.length; i++) {
    if (dataObj[i].show === true) {
        title.innerText = `مقالات | ${dataObj[i].title}`;
        content.innerHTML = `
            <h3>${dataObj[i].title}</h3>
            <div class="info">
                <p>${dataObj[i].author}</p>
                <p>${dataObj[i].bookmark}</p>
            </div>
            <div class="content">${dataObj[i].content}</div>
        `;
    };
};

// Nav Bar Section
toggler.onclick = () => {
    nav.classList.add("open");
};
closeBtn.onclick = () => {
    nav.classList.remove("open");
};
document.onkeyup = (e) => {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    };
};
link.forEach((e) => {
    e.onclick = () => {
        nav.classList.remove("open");
    };
});