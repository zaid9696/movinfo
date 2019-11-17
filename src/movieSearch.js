

export default async function movieSearch(id){


    try{

        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=273d33ec22a3877238d52bc405b33195&append_to_response=videos`);

        const data = await res.json();

        return data;

    }
    catch(err){
        alert(err)
    }


}