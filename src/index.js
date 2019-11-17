import search from './search';
import movieSearch from './movieSearch'
import {view} from './searchView';
import {movieView,slide} from './movieView';




const headerForm = document.querySelector(".header__form");
const headerSearch = document.querySelector(".header__search");
const headerList = document.querySelector(".header__list")


// // Slide 
slide();


// Search Control 

const searchControl = async (e) => {

    e.preventDefault();

    const searchInput = headerSearch.value;


    
    if(searchInput === '') {
        headerList.style.display = 'none';
        return
    }

    try{

       
       await search(searchInput).then(data => {

        view(data);
        console.log(data.length)
        
        if(data.length == 0){
            headerList.style.display = 'none';
        }else{

            headerList.style.display = 'flex';
            


        }
            

       })
    }
    catch(err){
        headerList.style.display = 'none';
    }


}

// Remove Input in Search Field

headerList.addEventListener("click", function(e){

    if(e.target.parentElement.matches(".header__text")|| e.target.parentElement.matches(".header__post") ){
        headerSearch.value = '';
    }
})

// Event Listener  Search Control 
headerForm.addEventListener("keyup", searchControl)
window.addEventListener("click", (e) =>{
    headerList.style.display = 'none'
})

//   Movie Control 

const movieControl = async (e) => {

    const id = window.location.hash.replace("#",'');

    if(id === '') return;

    movieSearch(id).then(data => {

        movieView(data);
        


    })
}

//  Event Listener Movie Control 

const someEvents =  ['load', 'hashchange'];

someEvents.forEach(items =>  window.addEventListener(items, movieControl))

// Add Class on Scroll 

window.addEventListener("scroll", function(e){

    
    const overview =  document.querySelector(".overview");
    const vid_trailer =  document.querySelector(".video__trailer");
    if(window.scrollY >= 355){
        
        overview.classList.add("animateover") 
    }

    if(window.scrollY >= 655){
        
        vid_trailer.classList.add("animatetrailer") 
    }
})


// Hide Loader

window.addEventListener("load", ()=>{

    document.querySelector(".loader").style.display = 'none'

})


