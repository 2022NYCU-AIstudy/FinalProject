const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="src/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">關於</li>
                    <li><a href="aboutus.html" class="footer-link">關於我們</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">二手好物</li>
                    <li><a href="market.html" class="footer-link">拍賣區</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">心情分享</li>
                    <li><a href="#" class="footer-link">廢文區</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">找工作、找實習</li>
                    <li><a href="#" class="footer-link">資源分享</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">公司簡介</p>
        <p class="info">佛心公司╰(⊙д⊙)╮佛心公司╭(⊙д⊙)╯</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
            </div>
        </div>
        <p class="footer-credit">清交優質交流網</p>
    `;
}

createFooter();
