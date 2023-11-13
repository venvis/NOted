
function font() {
    var p = document.getElementById('p');
    if (p.style.fontFamily === 'somatic') {
        p.style.fontFamily = 'catamaran';
    } else {
        p.style.fontFamily = 'somatic';
    }
}
function erase(){
    var erase=document.getElementById('p');
    erase.textContent=''
}
function bold(){
    var bold=document.getElementById("bold");

    document.execCommand("bold", false, null);
      
  


}
function italics(){
    var italics=document.getElementById("p");

    document.execCommand("italic", false, null);
      
  


}
function underline(){
    var underline=document.getElementById("p");

    document.execCommand("underline", false, null);
      
  


}
// function printContent() {
//     const contentToSave = document.getElementById("p");
//     const newWindow = window.open('', '_blank');
//     newWindow.document.write('<html><head><title></title></head><body>');
//     newWindow.document.write(contentToSave.innerHTML);
//     newWindow.document.write('</body></html>');
//     newWindow.document.close();
//     newWindow.print();
//     newWindow.close();
// }

function printContent() {
    const contentToSave = document.getElementById("p");
    html2pdf().from(contentToSave).save();
}
function highlightText() {
    const selectedText = window.getSelection();
    const range = selectedText.getRangeAt(0);
    const span = document.createElement("span");
    span.className = "highlighted-text"; 
  
    range.surroundContents(span);

 
}
let number=0;
function newname(){

    var newelement=document.getElementById('h3')
    newelement.style.display='block';
     var text=document.getElementById("p").innerText;
     var split=text.split(' ')[0]+' '

    newelement.innerText=`Previous Note : ${split}....`;
    document.getElementById("p").textContent = 'Enter content here......';
    
    number++;
   


}


