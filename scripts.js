let count = 1

setInterval(()=>{
  document.querySelector('#slide' + count).checked = true;
  count ++;

  if(count > 5){
    count = 1
  }
}, 3500)