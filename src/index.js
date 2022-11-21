
let apiUrl = "https://jsonplaceholder.typicode.com/comments";
function displayComments(response){
    console.log(response);
}
axios.get(apiUrl).then(displayComments);

let apiFCUrl = "https://jsonplaceholder.typicode.com/comments/1";

function displayComment1(response){
    console.log(response);
}

axios.get(apiFCUrl).then(displayComment1);

