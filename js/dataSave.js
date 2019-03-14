//Cookies

document.cookie = 'login=vlad98';
console.log(document.cookie);
//alert('hello');

//AJAX
function createImage(){
    var request = new XMLHttpRequest();
    function responseload(){
        if(request.readyState == 4){
            var status = request.status;
            if(status == 200){
                
                var block = document.getElementById('block-wrap');
                var image = document.createElement('img');
                image.src = request.responseURL;
                //console.log(image);
                block.appendChild(image);
                //console.log(request);
            
            }
        }
    }
    request.open('GET', './img/test.png', true);
    request.onload = responseload;
    request.send();

}
var button = document.getElementById('getImage');
button.addEventListener('click', createImage);

var request = new XMLHttpRequest();
var cities;
var names = [];
function responseload(){
    if(request.readyState == 4 && request.status ==200){
        cities = JSON.parse(request.responseText);
        //  , function(key, value){
        //     if(key == 'name'){
        //         return value;
        //     }
        //     else{
        //         return undefined;
        //     }
        // });
        
        console.log(cities.length);
        for(var i =0;i<cities.length;i++){
            var name = cities[i].name;
            var id = cities[i].id;
            var country = cities[i].country;
            var object = {name,id,country}
            names.push(object);
        }
        console.log(names);
        
    }
}
request.open('GET', './img/city.list.json', true);
request.onload = responseload;
request.send();

function displayNames(){
    if(names.length > 200000){
        console.log(names);
        clearInterval(interval);
    }   
}

//var interval = setInterval(displayNames,500);

function oninput(e){
    var inputSearch = document.getElementById('input-search');
    console.log(e.target.value);
    var inputText = [];
    inputText = names.filter(function(item){
        inputlower = item.name.toLowerCase();
        targetlower = e.target.value.toLowerCase();
        if((targetlower.length >= 3) && (inputlower.includes(targetlower))){
            return item;
        }
    });
    inputSearch.innerHTML = '';
    if(e.target.value.length >= 3){
        for(var i = 0; i < 8 && i < inputText.length; i++){
            var item = document.createElement('div');
            item.className = 'input-result ';
            if(inputText[i].name.length >=1){
                item.textContent = inputText[i].name + ' ' + inputText[i].country;
                item.className += inputText[i].id;
                inputSearch.appendChild(item);
            }

        }
    }


    

}
var inputSearch = document.getElementById('input-text');
inputSearch.addEventListener('keyup', oninput);




