var horizontal = 0
var vertical = 0
window.addEventListener('keydown',function(event)
{
    
    var tecla = event.keyCode
  
    if (tecla == "68")
        {
             horizontal = horizontal + 10
             document.getElementById("objeto").style.left=x+"px"  
        }
})