/*Name this external file gallery.js*/

function upDate(previewPic){
    document.getElementById("imagee").src = previewPic.src;
    document.getElementById("name").innerHTML = previewPic.alt;
}
   
function unDo(){
    document.getElementById("imagee").src = "";
    document.getElementById("name").innerHTML = "Image Name";

}
