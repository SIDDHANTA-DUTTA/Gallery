/*Name this external file gallery.js*/

function upDate(previewPic){
    document.getElementById("imagee").src = previewPic.src;
}
   
function unDo(){
    document.getElementById("imagee").innerHTML = "";
}
