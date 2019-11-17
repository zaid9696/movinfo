
import ISO6391 from 'iso-639-1';

// add comma to numbers 
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// convert minutes to hours 
var timeConvert = function(n){
    var minutes = n%60
    var hours = (n - minutes) / 60
    return hours + 'h' + " " + minutes + 'm'
}

// Loop Through The Geners Items;
const genersMov = (item => item.name);

// Loop Through The Languages Items;
const langSpoken =  (item =>  ISO6391.getName(item.iso_639_1));


export  const movieView = (items) => {

    const title = document.querySelector(".title");
    const info = document.querySelector(".info");
    const overview = document.querySelector(".overview");
    const trailer = document.querySelector(".trailer"); 
    const videoTrailer = document.querySelector(".video"); 
    const trailerTitle = document.querySelector(".trailer__title"); 

    title.innerHTML = '';
    info.innerHTML = '';
    overview.innerHTML = '';
    videoTrailer.innerHTML = '';
    trailerTitle.style.display = 'block';


    const titleResult = `
        <div class="title__container">
                    <h2>${items.title}</h2>
        </div>
    `;
    title.insertAdjacentHTML('beforeend', titleResult);

    const infoResult = `

            <div class="info__poster">
            <img src="${items.poster_path ?' https://image.tmdb.org/t/p/w500/' + items.poster_path : 'imgs/not-available.jpg'}" alt="Poster">
        </div>
        <div class="info__content">
            <div class="info__header">
                    <div class="info__facts"> <h3>Genres</h3><p>${items.genres.map(item => genersMov(item)).join(", ")}</p></div>
                    <div class="info__facts"> <h3>Rating</h3><p  class="p-num">${items.vote_average}</p></div>
            </div> 
            <div class="info__header">
                            <div class="info__facts"> <h3>VOTE</h3><p  class="p-num">${numberWithCommas(items.vote_count)}</p></div>
                            <div class="info__facts"> <h3>RUNTIME</h3><p  class="p-num">${timeConvert(items.runtime)}</p></div>
            </div> 
            <div class="info__header">
                            <div class="info__facts"> <h3 class="h3-small">SPOKEN LANGUAGES</h3><p>${items.spoken_languages.map(item => langSpoken(item)).join(', ')}</p></div>
                            <div class="info__facts"> <h3 class="h3-small">POPULARITY</h3><p  class="p-num">${items.popularity}</p></div>
                            
            </div> 
            <div class="info__header">
                            <div class="info__facts"> <h3 class="h3-small">RELEASE DATE                                        </h3><p class="p-num" >${items.release_date}</p></div>
                            <div class="info__facts"> <h3>REVENUE</h3><p  class="p-num">${numberWithCommas(items.revenue)}
                                    </p></div>
            </div> 
            <div class="info__header">
                            <div class="info__facts"> <h3>TAGLINE                                      </h3><p>${items.tagline}</p></div>
                            <div class="info__facts"> <h3>BUDGET</h3><p class="p-num">${numberWithCommas(items.budget)}
                                    </p>
                                    </div>
            </div> 

        </div>

    `;

    info.insertAdjacentHTML('beforeend', infoResult);

    const infoContent = document.querySelector('.info__content');

    infoContent.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${items.backdrop_path})`

    const overviewResult = `

        <div class="overview__title"><h2>Overview</h2></div>
        <div class="overview__Info">
                <div class="overview__paragraph">
                    <p>${items.overview}</p>
        </div></div>
    `;

    overview.insertAdjacentHTML('beforeend', overviewResult)

    const find = items.videos.results.find(item => item.type === 'Trailer');

    const vidoeTrailerResult = `
        <div class="video__trailer">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${find.key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;

    videoTrailer.insertAdjacentHTML('beforeend', vidoeTrailerResult)
}

// Background Slider''

export const slide = () =>{

    const slider = document.querySelectorAll(".slide");
    const current = document.querySelector(".current");

    current.classList.remove("current");
    if(current.nextElementSibling){

        current.nextElementSibling.classList.add("current")
    }else{

        slider[0].classList.add("current")
    }


};

setInterval(slide, 7000);