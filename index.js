//dummy data or array
// const posts=[
//     //objects
//     {
//         name : "Mosharrof Hossain",
//         homeTown :"Bhairab",
//         desc :"I am a Programmer . I would like to solve data struture and algorithmic problems."
//     },
//     {
//         name : "Belayet Hossain",
//         homeTown :"Madaripur",
//         desc :"I am a teacher . I would like to teach students."
//     },
//     {
//         name : "Rasel",
//         homeTown :"Mymensing",
//         desc :"I am a data Scientists. I would like to work with big data."
//     },
//     {
//         name : "Mohammud Imran Khan",
//         homeTown :"Chottogram",
//         desc :"I am a Andriod developer . I would like to build new apps for suitable users."
//     },
// ];

 //fetch data
//  console.log(axios);

const fetchData = async (config)=>{
    try{
        const res= await axios(config);
        console.log(res.data);
        return res.data;
    }
    catch(error)
    {
        throw Error("data is not fetched");
    }
}
// fetchData("https://jsonplaceholder.typicode.com/posts");


const postsElement=document.querySelector(".posts");

const loadAllData=async()=>{
    const posts=await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post)=>
    {
        const postElement=document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML=`
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
};
loadAllData();

{/* <div class="posts">
       <div class="post">
        <h4 class="post-title">post title 1</h4>
        <p class="post-body">post description 1</p>
       </div>
    </div> */}