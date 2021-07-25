'use strict'

let leftImgElement=document.getElementById('leftImg');
let rightImgElement=document.getElementById('rightImg');
let middleImgElement=document.getElementById('middlelImg');

let maxAttempts=25;
let attemptCounter=0;

let leftImgIndex;
let rightImgIndex;
let middleImgIndex;

let products=[];

function Product(name,src){
    this.name=name;
    this.source=src;
    this.votes=0;
    this.shown=0;
    products.push(this);
}
new Product('bag','imgs/bag.jpg');
new Product('banana','imgs/banana.jpg');
new Product('bathroom','imgs/bathroom.jpg');
new Product('boots','imgs/boots.jpg');
new Product('breakfast','imgs/breakfast.jpg');
new Product('bubblegum','imgs/bubblegum.jpg');
new Product('chair','imgs/chair.jpg');
new Product('cthulhu','imgs/cthulhu.jpg');
new Product('dog-duck','imgs/dog-duck.jpg');
new Product('dragon','imgs/dragon.jpg');
new Product('pen','imgs/pen.jpg');
new Product('pet-sweep','imgs/pet-sweep.jpg');
new Product('scissors','imgs/scissors.jpg');
new Product('shark','imgs/shark.jpg');
new Product('sweep','imgs/sweep.png');
new Product('tauntaun','imgs/tauntaun.jpg');
new Product('unicorn','imgs/unicorn.jpg');
new Product('water-can','imgs/water-can.jpg');
new Product('wine-glass','imgs/wine-glass.jpg');

function getRandomIndex(){
return Math.floor(Math.random()*products.length)
}

function renderThreeImgs(){
    leftImgIndex=getRandomIndex();
    rightImgIndex=getRandomIndex();
    middleImgIndex=getRandomIndex();
    while (leftImgIndex===rightImgIndex || leftImgIndex===middleImgIndex || rightImgIndex===middleImgIndex ) {
        middleImgIndex=getRandomIndex();
        rightImgIndex=getRandomIndex();
    }
    
    leftImgElement.src=products[leftImgIndex].source;
    rightImgElement.src=products[rightImgIndex].source;
    middleImgElement.src=products[middleImgIndex].source;
    products[leftImgIndex].shown++;
    products[rightImgIndex].shown++;
    products[middleImgIndex].shown++;
    
}
renderThreeImgs();


leftImgElement.addEventListener('click',handeleUserClick);
rightImgElement.addEventListener('click',handeleUserClick);
middleImgElement.addEventListener('click',handeleUserClick);

function handeleUserClick(event){
    attemptCounter++;
    if(attemptCounter<=maxAttempts){
        if (event.target.id==='leftImg') {
            products[leftImgIndex].votes++;
            

        }
        else if (event.target.id==='rightImg') {
            products[rightImgIndex].votes++;
            
        }
        else if (event.target.id==='middlelImg') {
            products[middleImgIndex].votes++;
            
        };
        renderThreeImgs();
    }
    else{
        let button= document.getElementById('button') ;
        button.addEventListener('click',resultes);
       



        
           
        
        leftImgElement.removeEventListener('click',handeleUserClick);
            middleImgElement.removeEventListener('click',handeleUserClick);
            rightImgElement.removeEventListener('click',handeleUserClick);  
            button.removeEventListener('click',handeleUserClick);

      }
     

    
}
function resultes(event){
    let list=document.getElementById('resulte');

    for (let i = 0; i < products.length; i++) {
        let listElemant=document.createElement('li');
        list.appendChild(listElemant);
        listElemant.textContent=`${products[i].name} had ${products[i].votes}votes ,and was seen ${products[i].shown}times`
    
    
  
}

}

