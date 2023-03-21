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
                <i class="fa fa-gear sett"></i>
                <div> 
                    <p>${dataObj[i].author}</p>
                    <p>${dataObj[i].bookmark}</p>
                </div>
            </div>
            <div class="content">${dataObj[i].content}</div>
        `;

        // Show And Hide Setting Box
        let btnSett = document.querySelector(".page-of-artical .info i");
        let overlay = document.querySelector(".overlay");
        let btnOnBox = document.querySelector(".hide-box");
        let boxSetting = document.querySelector(".box-setting");
        btnSett.addEventListener("click", () => {
            overlay.classList.add("show");
            boxSetting.classList.add("show");
        });
        overlay.onclick = () => {
            overlay.classList.remove("show");
            boxSetting.classList.remove("show");
        };
        btnOnBox.onclick = () => {
            overlay.classList.remove("show");
            boxSetting.classList.remove("show");
        };
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

// Change font Of Artical 
let listFont = document.querySelectorAll(".setting-font ul li");
listFont.forEach(li => {
    li.addEventListener("click", () => {
        listFont.forEach(element => {
            element.classList.remove("active");
            li.classList.add("active");
            let allPragraph = document.querySelector(".content");
            allPragraph.style.fontSize = `${li.dataset.size}`;
        });
    });
});
