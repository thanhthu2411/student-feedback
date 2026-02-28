
const UserAvatarHandler = () => {
    const userAvatar = document.querySelector(".user-avatar");
    const sideBar = document.querySelector(".sidebar-container");
    const sidebarCloseBtn = sideBar.querySelector(".close-btn");

    userAvatar.addEventListener('click', () => {
        sideBar.classList.add("sidebar-open");
        console.log("clicked");
    });

    sidebarCloseBtn.addEventListener('click', () => {
        sideBar.classList.remove("sidebar-open");
                console.log("clicked");

    })
}


function init() {
    UserAvatarHandler();
}

init();