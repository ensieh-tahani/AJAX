
let apiUrl = "https://jsonplaceholder.typicode.com/comments";
function displayComments(response){
    console.log(response);
}
axios.get(apiUrl).then(displayComments);

let apiFCUrl = "https://jsonplaceholder.typicode.com/comments";

function showComment1(response){
    console.log(response.data[0].email);
}

axios.get(apiFCUrl).then(showComment1);

