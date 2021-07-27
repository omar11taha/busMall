'use strict'

let leftImgElement = document.getElementById('leftImg');
let rightImgElement = document.getElementById('rightImg');
let middleImgElement = document.getElementById('middlelImg');
let images = document.getElementById('images');
let maxAttempts = 25;
let attemptCounter = 0;

let leftImgIndex;
let rightImgIndex;
let middleImgIndex;

let products = [];
let namesArr = [];
let votsArr = [];
let shownArr = [];

function Product(name, src) {
    this.name = name;
    this.source = src;
    this.votes = 0;
    this.shown = 0;
    products.push(this);
    namesArr.push(name);
    // sittingItem();
}
function sittingItem() {
    let stringArr=JSON.stringify(products);
    localStorage.setItem('prodact',stringArr);
    console.log(stringArr);
    
}
// sittingItem();
function gitProducts() {
    let data=localStorage.getItem('prodact');
    let parseAdd=JSON.parse(data);
if (parseAdd !==null) {
    products=parseAdd
    console.log(parseAdd);
}

}



new Product('bag', 'imgs/bag.jpg');
new Product('banana', 'imgs/banana.jpg');
new Product('bathroom', 'imgs/bathroom.jpg');
new Product('boots', 'imgs/boots.jpg');
new Product('breakfast', 'imgs/breakfast.jpg');
new Product('bubblegum', 'imgs/bubblegum.jpg');
new Product('chair', 'imgs/chair.jpg');
new Product('cthulhu', 'imgs/cthulhu.jpg');
new Product('dog-duck', 'imgs/dog-duck.jpg');
new Product('dragon', 'imgs/dragon.jpg');
new Product('pen', 'imgs/pen.jpg');
new Product('pet-sweep', 'imgs/pet-sweep.jpg');
new Product('scissors', 'imgs/scissors.jpg');
new Product('shark', 'imgs/shark.jpg');
new Product('sweep', 'imgs/sweep.png');
new Product('tauntaun', 'imgs/tauntaun.jpg');
new Product('unicorn', 'imgs/unicorn.jpg');
new Product('water-can', 'imgs/water-can.jpg');
new Product('wine-glass', 'imgs/wine-glass.jpg');

function getRandomIndex() {
    return Math.floor(Math.random() * products.length)
}
let previas =[]
function renderThreeImgs() {
    leftImgIndex = getRandomIndex();
    rightImgIndex = getRandomIndex();
    middleImgIndex = getRandomIndex();

    
    while (leftImgIndex === rightImgIndex || leftImgIndex === middleImgIndex || rightImgIndex === middleImgIndex || previas.includes(leftImgIndex) || previas.includes(rightImgIndex)|| previas.includes(middleImgIndex)) {
        

        middleImgIndex = getRandomIndex();
        rightImgIndex = getRandomIndex();
        leftImgIndex = getRandomIndex();

    }
     previas = [leftImgIndex, rightImgIndex, middleImgIndex];
   

    leftImgElement.src = products[leftImgIndex].source;
    rightImgElement.src = products[rightImgIndex].source;
    middleImgElement.src = products[middleImgIndex].source;

    products[leftImgIndex].shown++;
    products[rightImgIndex].shown++;
    products[middleImgIndex].shown++;

}
renderThreeImgs();


images.addEventListener('click', handeleUserClick);
// rightImgElement.addEventListener('click', handeleUserClick);
// middleImgElement.addEventListener('click', handeleUserClick);

function handeleUserClick(event) {
    attemptCounter++;
    if (attemptCounter <= maxAttempts) {
        if (event.target.id === 'leftImg') {
            products[leftImgIndex].votes++;
            renderThreeImgs();

        }
        else if (event.target.id === 'rightImg') {
            products[rightImgIndex].votes++;
            renderThreeImgs();
        }
        else if (event.target.id === 'middlelImg') {
            products[middleImgIndex].votes++;
            renderThreeImgs();
        };
    //     gitProducts();
    }
    else {
        // console.log('fineshed');
        images.removeEventListener('click', resultes);

        let button = document.getElementById('button');
        button.hidden = false;
        button.addEventListener('click', resultes);

    }
    // button.removeEventListener('click',resultes);
    
}

function resultes(event) {
    let list = document.getElementById('resulte');

    for (let i = 0; i < products.length; i++) {
        votsArr.push(products[i].votes);
        shownArr.push(products[i].shown);
    }
    // console.log(votsArr);
    // console.log(shownArr);
    // showChart();

    for (let i = 0; i < products.length; i++) {
        let listElemant = document.createElement('li');
        list.appendChild(listElemant);
        listElemant.textContent = `${products[i].name} had ${products[i].votes}votes ,and was seen ${products[i].shown}times`



    }
    // leftImgElement.removeEventListener('click', resultes);
    // middleImgElement.removeEventListener('click', resultes);
    // rightImgElement.removeEventListener('click', resultes);
   
    button.removeEventListener('click', resultes);
    
    showChart();
    sittingItem();

}
// gitProducts();

function showChart() {

    const data = {
        labels: namesArr,
        datasets: [{
            label: 'Votes',
            data: votsArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
                // 'rgba(255, 205, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                // 'rgb(255, 159, 64)',
                // 'rgb(255, 205, 86)',
                // 'rgb(75, 192, 192)',
                // 'rgb(54, 162, 235)',
                // 'rgb(153, 102, 255)',
                // 'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        },
        {
            label: 'Shown',
            data: shownArr,
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
                // 'rgba(255, 205, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                // 'rgb(255, 99, 132)',
                // 'rgb(255, 159, 64)',
                // 'rgb(255, 205, 86)',
                // 'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                // 'rgb(153, 102, 255)',
                // 'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }

        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };


    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}



gitProducts();