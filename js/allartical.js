// Variale 
let toggler = document.querySelector(".toggle");
let nav = document.querySelector("header nav");
let closeBtn = document.querySelector(".close");
let link = document.querySelectorAll("header nav a");
let articalSection = document.querySelector(".all-artical div .artical");


// Artical For Artical Page
let myReq = new XMLHttpRequest();
myReq.open("GET", "../json/artical.json");
myReq.send();
myReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let jsData = JSON.parse(this.responseText);
        for (let i = 0; i < jsData.length; i++) {
            let box = document.createElement("div");
            box.className = `all ${jsData[i].who} box`;
            // Title - h3
            let h3 = document.createElement("h3");
            let title = document.createTextNode(jsData[i].title);
            h3.appendChild(title);
            // Info - p
            let infoP = document.createElement("p");
            let infoText = document.createTextNode(jsData[i].info);
            infoP.appendChild(infoText);
            // Content Div - div
            let contentDiv = document.createElement("div");
            // Icon Div - div
            let iconDiv = document.createElement("div");
            iconDiv.className = "icons";
            iconDiv.innerHTML = `
                <span>${jsData[i].bookmark} <i class="fa-regular fa-bookmark"></i></span>
            `;
            // Footer Div - div
            let foot = document.createElement("div");
            foot.className = "foot";
            foot.innerHTML = `
                <a href="artical.html" id="${jsData[i].id}">
                    <button>قراءة المقال</button>
                </a>
            `;
            contentDiv.appendChild(iconDiv);
            contentDiv.appendChild(foot);
            box.appendChild(h3);
            box.appendChild(infoP);
            box.appendChild(contentDiv);
            articalSection.appendChild(box);
        };
        let linkId = document.querySelectorAll(".box a");
        linkId.forEach((e) => {
            e.addEventListener("click", (el) => {
                jsData.forEach((el) => {
                    el.show = false;
                });
                const newJson = JSON.stringify(jsData);
                const jsonForLocal = JSON.parse(newJson);
                for (let i = 0; i < jsonForLocal.length; i++) {
                    if (jsonForLocal[i].id == e.id) {
                        jsonForLocal[i].show = true;
                    }
                    window.localStorage.setItem("get", JSON.stringify(jsonForLocal));
                };
            });
        });
        let linkLi = document.querySelectorAll(".all-artical div ul li");
        let allBox = Array.from(document.querySelectorAll(".box"));
        // remove class active
        linkLi.forEach((e) => {
            e.addEventListener("click", removeActive);
            e.addEventListener("click", mangeArtical);
        });
        function removeActive() {
            linkLi.forEach((li) => {
                li.classList.remove("active");
                this.classList.add("active");
            });
        };
        function mangeArtical() {
            allBox.forEach((box) => {
                box.style.display = "none";
            });
            document.querySelectorAll(this.dataset.cat).forEach((e) => {
                e.style.display = "flex";
            });
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