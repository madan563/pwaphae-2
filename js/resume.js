var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for(i in query){
param= query[i].split("=");
  paramValue=parseInt(param[1]);
}
var request;
var idb= window.indexedDB || window.mozIndexedDB ||
window.msIndexedDB || window.webkitIndexedDB;

var open=idb.open("StoreData",1);
console.log("IndexedDB is created");

open.onupgradeneeded=function(event){
var request=event.target.result;
request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});

}

open.onerror=function(error){
  console.log("Object store is not created",+error);
}
open.onsuccess=function(event){
  request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
var storeDB=transaction.objectStore("Formdata");
var info=storeDB.get(paramValue);
info.onsuccess=function(data){
  console.log(data.target.result);
  display(data.target.result);

}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function display(data)
{
  var img=document.createElement("img");
  img.src="images/girl.svg";
  left.append(img);
  var h3=document.createElement("h3");
  h3.textContent=data.name;
  left.append(h3);
   // right div
    var head=document.createElement("h2");
    head.textContent="career objective";
    right.append(head);
    var pc=document.createElement("p");
    pc.textContent=data.career;
    right.append(pc);
    var head1=document.createElement("h2");
    head1.textContent="educational details";

    right.append(head1);
    var table=document.createElement("table");
    table.











}
