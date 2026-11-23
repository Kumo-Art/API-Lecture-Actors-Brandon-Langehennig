//Data Services, Every fetch to our api lives in this file
//It only talks to the server. It never touches the page

const baseURL = "http://localhost:5288/api/movie";

export const movieFetch = async () => {
    const res = await fetch(baseURL);

    //We check if API sends back a 200 if not we throw error
    if(!res.ok) {
        throw new Error(`Get failed: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
}


export const createMovie = async (movie) => {
       const res = await fetch(`${baseURL}/addmovie`, {
        // tells the api the body is JSON
        method: "POST",
        headers: {"Content-Type": "application/json"},
        // fetch sends text, so turn object into a JSON string.
        body: JSON.stringify(movie)
       });


       if(!res.ok) {
        throw new Error(`Post failed: ${res.status}`);
       }

       const data = await res.json();
       return data;
}


export const getById = async (id) => {
    const res = await fetch(`${baseURL}/getbyid/${id}`);
    if(!res.ok){
        throw new Error(`GET failed: ${res.status}`);
    }

    const data = await res.json();
    return data;
}

//Sends the changed movie as JSON. the id goes in the URL, not the body
export const updateMovie = async (id, movie) => {
    const res = await fetch(`${baseURL}/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(movie)
    });

    if(!res.ok){
        throw new Error(`PUT failed: ${res.status}`);
    }

    return await res.json();
}

//A good DELETE comes back 204 No Content, so there's no JSON to read
export const deleteMovie = async (id) => {
     const res = await fetch(`${baseURL}/delete/${id}`,{ method: "DELETE"});

     if(!res.ok){
        throw new Error(`DELETE failed: ${res.status}`);
     }
}