//Cookies

document.cookie = 'login=vlad98';
console.log(document.cookie);
//alert('hello');

//AJAX
// function createImage(){
//     var request = new XMLHttpRequest();
//     function responseload(){
//         if(request.readyState == 4){
//             var status = request.status;
//             if(status == 200){
                
//                 var block = document.getElementById('block-wrap');
//                 var image = document.createElement('img');
//                 image.src = request.responseURL;
//                 //console.log(image);
//                 block.appendChild(image);
//                 //console.log(request);
            
//             }
//         }
//     }
//     request.open('GET', './img/test.png', true);
//     request.onload = responseload;
//     request.send();

// }
// var button = document.getElementById('getImage');
// button.addEventListener('click', createImage);

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
                item.dataset.id = inputText[i].id;
                inputSearch.appendChild(item);
                outResults = document.querySelectorAll('.input-result');
                outResults.forEach(elem => {
                    elem.addEventListener('click', chooseItem);
                });
            }

        }
    }
    
}
function chooseItem(e){
    var name = e.target.textContent;
    var id = e.target.dataset.id;
    //console.log(name,id);
    inputSearch.value = name;
    inputSearch.dataset.id = id;
    $('.input-result').each(function(){
        $(this).remove();
    });
    $('.temp-result').each(function(){
        $(this).remove();
    })
    
    //console.log(inputSearch);
}
function loadweather(e){
    var id = '//api.openweathermap.org/data/2.5/weather?id=';
    id += inputSearch.dataset.id;
    id += '&units=metric';
    // id += '&APPID=';
    // id += 'a7bef83ddbd2e1cac553f979f59489fb';
    // function requestLoad(){
    //     if(request.readyState == 4 && request.status ==200){
    //     }
    // }
    // var request = new XMLHttpRequest();
    
    // request.open('GET', id, false);
    // request.withCredentials = true;
    // request.setRequestHeader('APPID','a7bef83ddbd2e1cac553f979f59489fb');
    // console.log(request);
    // request.onload = requestLoad;
    // request.send();
    var weather;
    $.ajax({
        url: id,
        method: 'GET',
        beforeSend: function(){
            $('.temp-esult').remove();
        },
        data:{
            'APPID': 'a7bef83ddbd2e1cac553f979f59489fb'
        },
        success: function(data){
            weather = data;
            console.log(weather);
            console.log(weather.main.temp);
            var temp = weather.main.temp;
            var element = document.createElement('p');
            element.className = 'temp-result';
            element.textContent = 'Сейчас температура в '+ weather.name + ' ' + weather.sys.country + Math.round(weather.main.temp) + ' градусов';
            var wrapTemp = document.getElementById('wrap-temp');
            wrapTemp.appendChild(element);
        }
    })
}

var outResults;
var inputSearch = document.getElementById('input-text');
inputSearch.addEventListener('keyup', oninput);

var getWeather = document.getElementById('getWeather');

getWeather.addEventListener('click', loadweather);





