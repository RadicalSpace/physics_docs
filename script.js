var tot= document.body.scrollHeight
console.log(tot)
window.onscroll = function(){
  document.getElementById("progress").style.width = String(100*scrollY)/tot+"%"
}