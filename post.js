var submits = document.getElementsByClassName('submit')
for(let i=0; i<submits.length;i++){
  submits[i].addEventListener('click',(e)=>{
    let ans = submits[i].closest('fieldset').ariaLabel
    let options = submits[i].closest('fieldset').children
    let checked
    for(let i=0; i<((options.length-1)/3)-1; i++){
      if(options[3*i+1].checked){
        checked = options[3*i+1]
      }
    }
    let checkedId = checked.id.split("")[checked.id.split("").length-1]
    if(checkedId==ans){
      checked.style.borderColor = "#00aa00"
      checked.style.backgroundColor = "#00aa00"
      submits[i].closest("div").children[submits[i].closest("div").children.length-1].style.display = "block"
    } else {
      checked.style.borderColor = "#dd0000"
      checked.style.backgroundColor = "#dd0000"
    }
  })
}
let prog = document.getElementById('progress');

let body = document.body,
    html = document.documentElement;

let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
);

const setProgress = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  prog.style.width = scrolled + "%";
};

window.addEventListener('scroll', setProgress);

setProgress();
