const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="src/light-logo.png" class="brand-logo" alt=""> <!-- logo -->
            <div class="nav-items">
                <div class="search"> <!-- search box -->
                    <input type="text" class="search-box">
                    <button class="search-btn">搜尋</button>
                </div>
                <a>
                    <img src="src/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Log in as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a class="link" href="mycart.html"><img src="src/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">關於我們</a></li>
            <li class="link-item"><a href="market.html" class="link">拍賣區</a></li>
            <li class="link-item"><a href="#" class="link">廢文區</a></li>
            <li class="link-item"><a href="#" class="link">資源分享</a></li>
        </ul>
    `;
}

createNav();

const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
        userPopup.classList.toggle('hide');
    }) //顯示

window.onload = () => {
    let getUrlString = location.href;
    let url = new URL(getUrlString);
    if (url.searchParams.get('login') === 'true') { //user in login status
        popuptext.innerHTML = `log in as, ${url.searchParams.get('name')}`;
        actionBtn.innerHTML = 'log out';
        link = document.getElementsByClassName('link')
        Array.from(link).forEach(function(link) {
            link.href += `?login=true&id=${url.searchParams.get('id')}&name=${url.searchParams.get('name')}`;
        });

        actionBtn.addEventListener('click', () => {
            location.href = 'index.html';
        })
    } else { //user not login in
        popuptext.innerHTML = 'login to order';
        actionBtn.innerHTML = 'login';
        actionBtn.addEventListener('click', () => {
            location.href = 'login.html';
        })
    }
}