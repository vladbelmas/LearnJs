// BOM
//var popup = window.open('file:///C:/Users/vladb/OneDrive/Documents/LearnJs/index2.html', 'width=400, height=400, resizable=yes');
function closeWindow(){
    if(popup){
        popup.close();
    }
    
}
function resizeWindow(){
    if(popup){
        popup.resizeTo(600,500);
    }
    
}
function moveWindow(){
    if(popup){
        popup.moveTo(200,200);
    }
}
// setTimeout(resizeWindow, 10000);
// setTimeout(moveTo, 15000);
//setTimeout(closeWindow,5000);

console.log('In history: ' + history.length + ' pages');
//location.replace('http://google.com/');
console.log(navigator.userAgent);

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
     
    document.write("Широта: " + latitude + "<br/>");
    document.write("Долгота: " + longitude + "<br/>");
    document.write("Высота: " + altitude + "<br/>");
    document.write("Скорость перемещения: " + speed + "<br/>");
};
 
function error(obj) {
    document.write("Ошибка при определении положения");
};
navigator.geolocation.getCurrentPosition(success, error);


//timers

function writeConsole(){
    console.log('hello!!!');
}
//setTimeout(writeConsole, 5000);

//setInterval(writeConsole, 3000);