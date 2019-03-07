
var header = document.getElementById('header');
document.write('Text of title: ' + header.innerText);

var pElements = document.getElementsByTagName('p');

for(var i =0; i< pElements.length; i++){
    document.write('Text of paragraph: ' + pElements[i].innerText + '<br/>');
}
var pElement = document.getElementsByTagName('p')[0];
console.log(pElement.innerText);

var article = document.getElementsByClassName('article')[0];
console.log(article);

var textElems = document.getElementsByClassName('text');
for(var i = 0; i< textElems.length; i++){
    console.log(textElems[i]);
}

//search by selector css
var elem = document.querySelector('.article h3');
console.log(elem);

var elems = document.querySelectorAll('.article p');
console.log(elems);

for(var i = 0;i<elems.length; i++){
    console.log(elems[i].innerText);
}

var images = document.images;
images[0].alt = 'test picture';

images[1].src = 'img/test2.png';
images[1].src = 'img/test.png';

for(var i = 0; i < images.length; i++){
    document.write('<br/>' + images[i].src);
    document.write('<br/>' + images[i].alt);
}

var links = document.links;

for(var i = 0; i< links.length; i++){
    document.write('<br/>' + links[i].innerText);
    document.write('<br/>' + links[i].href);
}

var articleDiv = document.querySelector('.article');
var nodes = articleDiv.childNodes;

for(var i = 0; i< nodes.length; i++){
    var type = '';
    if(nodes[i].nodeType === 1){
        type = 'element';
    }
    else if(nodes[i].nodeType === 2){
        type = 'atribute';
    }
    else if(nodes[i].nodeType === 3){
        type = 'text';
    }
    console.log(nodes[i].nodeName + ': ' + type);
}

var firstNode = articleDiv.firstChild;
var lastNode = articleDiv.lastChild;
console.log(lastNode);
console.log(lastNode.previousSibling);

//create new node element

var elem = document.createElement('h2');
var elemText = document.createTextNode('hello world');

elem.appendChild(elemText);
articleDiv.appendChild(elem);

var newElem = elem.cloneNode(true);

var firstElem  = articleDiv.firstChild.nextSibling;
articleDiv.insertBefore(newElem, firstElem);

//replace node elem
articleDiv.replaceChild(elem, newElem);


articleDiv.removeChild(elem);
