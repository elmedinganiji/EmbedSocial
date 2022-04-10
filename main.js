fetch('data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {



for (var i = 0; i < data.length; i++) {

    var mainContainer=document.createElement("div");
    mainContainer.classList.add('card');

    //create div1 - header of cards

    var div1 = document.createElement("div");
    div1.classList.add('divone');

    const img = document.createElement('img');
    img.classList.add("img_div1");

    const name = document.createElement('h3');
    name.classList.add("name_div1");

    const icon = document.createElement('img');
    icon.classList.add("icon_div1");
    
   
    if (data[i].source_type == "instagram"){
        
        icon.src="instagram-logo.svg";
       
    } else {
        
        icon.src= "facebook.svg";
    }
    
    
    div1.appendChild(img);
    div1.appendChild(name);
    div1.appendChild(icon);

    name.innerHTML = data[i].name;
    img.src = data[i].profile_image;

   
    
    //create div2 - main content
    
    var div2 = document.createElement("div");
    div2.classList.add('divtwo');

    var text = document.createElement("p");
    text.classList.add('text_div2');
    text.innerHTML = data[i].caption;

    const img2 = document.createElement('img');
    img2.classList.add("img_div2");
    img2.src = data[i].image;

    div2.appendChild(img2);
    div2.appendChild(text);

    //create div3 - likes button 
    

    var div3 = document.createElement("div");
    div3.classList.add('divthree');

    const btn = document.createElement('button');
    btn.classList.add('btn-like');
    const btn1 = document.createElement('button');
    btn1.classList.add('btn-like1');

    

    btn.addEventListener('click',button1);
    btn1.addEventListener('click',button2);
    
    btn1.style.display="none";

    function button1(){
        
    var h= document.querySelector('.counts').innerHTML;
       
    h++;
    document.querySelector('.counts').innerHTML= h;
    btn.style.display="none";
    btn1.style.display="block";

   
    }

    function button2(){
    var h= document.querySelector('.counts').innerHTML;

    h--;
    document.querySelector('.counts').innerHTML= h;
    btn1.style.display="none";
    btn.style.display="block";

    countss.style.color="red";
    } 

    
    const img3 = document.createElement('img');
    img3.classList.add("img_div3");
    img3.src="heart.svg";

    const img4 = document.createElement('img');
    img4.classList.add("img_div3");
    img4.src="heart.svg";

    var counts = document.createElement('h5');
    counts.classList.add("counts");
    counts.innerHTML=data[i].likes;
    
    
    
    
    btn.appendChild(img3);
    btn1.appendChild(img4);
    div3.appendChild(btn);
    div3.appendChild(btn1);
    div3.appendChild(counts);
    

   

    mainContainer.appendChild(div1);
    mainContainer.appendChild(div2);
    mainContainer.appendChild(div3);

    document.getElementById('content').appendChild(mainContainer);
   
    
}
}

// button that shows more cards/after all cards are shown hide button

const showmore=() =>{
if(innerHeight="1220px")
{
document.querySelector('#content').style.height="2440px";
document.querySelector('#like2').style.display="inline";
document.querySelector('#like').style.display="none";
}


}
const showmoree=() =>{
document.querySelector('#content').style.height="auto";
document.querySelector('#like2').style.display="none";
}

const btnnn=document.querySelector('#like');
btnnn.addEventListener('click',showmore);

const btnn = document.querySelector('#like2');
btnn.addEventListener('click',showmoree);

