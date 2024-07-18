// //dummy data

// const posts=[
//     {
//         title:"This is title-1",
//         body:"This is body-1"
//     },
//     {
//         title:"This is title-2",
//         body:"This is body-2"
//     },
//     {
//         title:"This is title-3",
//         body:"This is body-3"
//     },
//     ,
//     {
//         title:"This is title-4",
//         body:"This is body-4"
//     },
//     {
//         title:"This is title-5",
//         body:"This is body-5"
//     },
//     ,
//     {
//         title:"This is title-6",
//         body:"This is body-6"
//     }

// ];

//fetch data
console.log(axios);
const fetchData=async(config)=>{
    try{

        const res=await axios(config);
        return res.data;
    }
    catch(error)
    {
        throw Error("data is not fetched");
    }
    console.log(res.data);
}
//fetchData("https://jsonplaceholder.typicode.com/posts");

const postsElement=document.querySelector(".posts");
const loadAllData=async()=>{
    const posts=await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post)=>{
        console.log(post);

        const postElement=document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML=`
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
        `
        postsElement.appendChild(postElement);
        });
       
};
loadAllData();


