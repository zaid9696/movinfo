

export default async function search(input){

    try{

        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=273d33ec22a3877238d52bc405b33195&language=en-US&query=${input}&page=1&include_adult=false`);

        const data = await res.json();

         return data.results;


    }
    catch(err){

        console.log(err);

    }


}