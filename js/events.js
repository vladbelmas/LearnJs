function displayMessage(){
    
    alert('hello');
}

function handler(obj){
    alert(obj.innerText);
}

function handlerEvent(e){
    alert(e.type);
}
console.log(document.getElementById('main-button'));

//1var
//document.getElementById('main-button').onclick = handlerEvent;

var mainButton = document.getElementById('main-button');

//2 var
// mainButton.addEventListener('click', function(e){
//     alert(e.type);
// });

//3 var
mainButton.addEventListener('click',handlerEvent);

mainButton.removeEventListener('click',handlerEvent);

var clicks = 0;

function handlerOne(e){
    alert(e.type);
}
function handlerTwo(e){
    clicks++;
    var newNode = document.createElement('p');
    newNode.innerText = 'count of click: ' + clicks;
    document.body.appendChild(newNode);
}
function handlerMain(event){
    console.log('Type of event: ' + event.type);
    console.log(event.target);
    event.target.style.backgroundColor = 'blue';
}

var rect = document.getElementById('rect');

window.onload = function(){
    // rect.addEventListener('click', handlerOne);

    // rect.addEventListener('click', handlerTwo);
    rect.addEventListener('click', handlerMain);
}

var redRect = document.getElementById('redRect');
redRect.addEventListener('click', function(event){
    console.log('Event on red rect');

    //stops another events
    event.stopPropagation();
});
var blueRect = document.getElementById('blueRect');
blueRect.addEventListener('click',function(event){
    console.log('Event on blue rect');
});

document.body.addEventListener('click',function(event){
    console.log('Event on body');
});

function setColor(e){
    if(e.type === 'mouseover'){
        e.target.style.backgroundColor = 'yellow';
    }
    else if(e.type === 'mouseout'){
        e.target.style.backgroundColor = 'green';
    }
}
var greenRect = document.getElementById('greenRect');
greenRect.addEventListener('mouseover', setColor);
greenRect.addEventListener('mouseout', setColor);

function handleClick(e){
    console.log('screenX: ' + e.screenX);
    console.log('screenY: ' + e.screenY);
    console.log('clientX: ' + e.clientX);
    console.log('clientY: ' + e.clientY);
}

greenRect.addEventListener('click', handleClick);

function moveRect(e){
     
    var blueRect = document.getElementById("greenRect");
    // получаем стиль для blueRect
    var cs = window.getComputedStyle(blueRect);
     
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
     
    switch(e.keyCode){
         
        case 37:  // если нажата клавиша влево
            if(left>0)
                blueRect.style.marginLeft = left - 10 + "px";
            break;
        case 38:   // если нажата клавиша вверх
            if(top>0)
                blueRect.style.marginTop = top - 10 + "px";
            break;
        case 39:   // если нажата клавиша вправо
            if(left < document.documentElement.clientWidth - 100)
                blueRect.style.marginLeft = left + 10 + "px";
            break;
        case 40:   // если нажата клавиша вниз
            if(top < document.documentElement.clientHeight - 100)
                blueRect.style.marginTop = top + 10 + "px";
            break;
    }
}

addEventListener("keydown", moveRect);
