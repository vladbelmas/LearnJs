var searchForm;
for(var i = 0; i < document.forms.length; i++){
    if(document.forms[i].name === 'search'){
        searchForm = document.forms[i];
    }
}
window.onload = function(){
    var settingsForm = document.settings;

}

var searchForm2 = document.forms['search'];
console.log(searchForm2);

var searchForm3 = document.getElementsByTagName('form')[0];
console.log(searchForm3);

var searchForm4 = document.forms['search'];

for(var i = 0; i < searchForm4.elements.length; i++){
    console.log(searchForm4.elements[i].name);
}
var keyBox = searchForm4.elements['key'];
console.log(keyBox.name);
console.log(keyBox.form.name);

//focus at elemnt of form
keyBox.focus();

//disable focus at element
keyBox.blur();

function sendForm0(e){
    var keyBox = document.search.key;
    var val = keyBox.value;
    if(val.length > 5){
        alert('Ohh no, so many letters');
        document.search.reset();
        e.preventDefault();
        //document.search.action = 'PostForm'; //change adrres to send form
    }
    else{
        alert('Send is done');
    }
}
function printForm(e){
    var keyBox = document.search.key;
    var val = keyBox.value;
    document.search.reset();
    var printBlock = document.getElementById('printBlock');
    var pElement = document.createElement('p');
    pElement.innerText = val;
    printBlock.appendChild(pElement);
}
var addButton = document.search.addSend;
console.log(addButton);
addButton.addEventListener('click', printForm);

var sendButton = document.search.send;
sendButton.addEventListener('click',sendForm0);

var keyBox = document.search.key;
function onchange(e){
    var syncBlock = document.getElementById('syncBlock');
    var val = e.target.value;
    syncBlock.textContent = val;
}
function onblur(e){
    keyBox.style.borderColor = 'red';
}
function onfocus(e){
    keyBox.style.borderColor = 'blue';
}

keyBox.addEventListener('keyup', onchange);
keyBox.addEventListener('focus', onfocus);
keyBox.addEventListener('blur', onblur);