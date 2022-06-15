const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
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
