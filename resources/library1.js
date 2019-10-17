function elt ( type ) {
var node = document . createElement ( type ) ;
for ( var i = 1; i < arguments . length ; i ++) {
var child = arguments [ i ];
if ( typeof child == " string " || typeof child == "number"){
child = document . createTextNode ( child ) ;
}
node . appendChild ( child ) ;
}
return node ;
}

function getPageParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function q(){
 if(arguments.length==0){
   return document.body;
 }else if(arguments.length==1){
   var out = false;
   out=document.querySelector(arguments[0]);
   return out;
 }else{
   var out = [];
   for(var i=0;i<arguments.length;i++){
   out.push(document.querySelector(arguments[i]));
   }
   return out;
 }
  
}

function qs(){
 if(arguments.length==0){
   return document.body;
 }else if(arguments.length==1){
   var out = false;
   out=document.querySelectorAll(arguments[0]);
   return out;
 }else{
   var out = [];
   for(var i=0;i<arguments.length;i++){
   out.push(document.querySelectorAll(arguments[i]));
   }
   return out;
 }
  
}

function append(node,parent){
  if(node&&parent){
    if ( typeof node == " string " || typeof node == "number"){

      node = document . createTextNode ( node ) ;

    }
  parent.appendChild(node);

  }else{
  
    throw new SyntaxError("Not enough args to append(node,parent)");
  }
}
