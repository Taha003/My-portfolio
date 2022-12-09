let img1=new Image()
img1.src='WeatherImg.png'
var images = document.images,
    data = [];
for (var i = 0, len = images.length; i < len; i++) {
  data.push(images[i].src);
  console.log(data[i]);
}
console.log(data)
let arr=[{
    img:data[1],
    title:'Todo App',
    info:'Created Todo App using React JS',
    visit:`https://taha003.github.io/React-Todo-Web-App/`
},
{
    img:data[2],
    title:'Weather App',
    info:'Created Weather Website in React js using Live API',
    visit:`https://taha003.github.io/React-Weather-App/`  
},
{
    img:data[3],
    title:'Reasturant App',
    info:'Created Resturant in React JS',
    visit:`https://taha003.github.io/React-Resturant-website/`  
},{
    img:data[4],
    title:'Consultancy Website',
    info:'Build a consultancy website for a client',
    visit:`https://sariitrader.firebaseapp.com/`   
},
{
    img:data[5],
    title:'Carpooling Web App',
    info:'Build a carpooling App UI for a client',
    visit:'https://taha003.github.io/Car-pooling-app/#/'   
},
{
    img:data[6],
    title:'Quiz App',
    info:'created Quiz App using HTML,CSS and JS',
    visit:'https://taha003.github.io/Quiz-app/'   
}
]

let projects=document.getElementById('projects')

arr.map((e,i)=>{
    return projects.innerHTML+=`<div class="col-md-4 my-2" key=${i}> <div class="card" style="width: 100%">
    <img class="card-img-top" src="${e.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${e.title}</h5>
      <p class="card-text">${e.info}</p>
      <a href=${e.visit} target="blank" class="btn btn-primary">See Project</a>
    </div></div></div>`
    
})


