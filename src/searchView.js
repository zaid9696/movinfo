
export const view = (data) => {

    const headerList = document.querySelector(".header__list");

    function cutString(s, n){
        var cut= s.indexOf(' ', n);
        if(cut== -1) return s;
        return s.substring(0, cut) + '...'
    }
    headerList.innerHTML = '';
    
    data.forEach(item => {

        const result = `
        <a href="#${item.id}" class="header__linkid">
        <div class="header__post">
             <img src="${item.poster_path ? 'https://image.tmdb.org/t/p/w300/' + item.poster_path : 'imgs/not-available.jpg'}" alt="poster">
              <div class="header__text">
                    <h3>${item.original_title}</h3>
                    <p>${item.overview ? cutString(item.overview,80): "Sorry, The Overview Is Not Available (⌣́_⌣̀)"}</p>
                </div>
            </div>
        </a>
    `;
    headerList.insertAdjacentHTML('beforeend', result);

    })
}

