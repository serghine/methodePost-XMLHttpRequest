'use strict';
let bouton=document.getElementById('boot');
let inputText=document.getElementById('texta');
let form=document.getElementById('form');



form.addEventListener('submit',function(e){
e.preventDefault();
var request=new XMLHttpRequest();
request.open('POST',"https://mockbin.com/request");
request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify(inputText.value));
let resultat=document.getElementById('resultat');
//resultat.innerHTML=JSON.stringify(inputText.value).postData.text;
resultat.innerHTML +=inputText.value +"\,";
});
