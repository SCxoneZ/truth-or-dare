const truthBtn = document.querySelector('.container button.btn-truth');
const dareBtn = document.querySelector('.container button.btn-dare');
const output = document.querySelector('.container .output p');
let text = ``;

truthBtn.addEventListener('click', async () => {
  output.innerHTML = '';
  const data = await getData('truth');
  const random = Math.floor(Math.random()*data.length);
  text = data[random];
  renderText();
})

dareBtn.addEventListener('click', async () => {
  output.innerHTML = '';
  const data = await getData('dare');
  const random = Math.floor(Math.random()*data.length);
  text = data[random];
  renderText();
})


function renderText(){
  let index = 0;
  const interval = setInterval(() => {
    if(index < text.length-1){
    output.innerHTML += text[index];
    index += 1;
    }else{
      clearInterval(interval);
    }
  }, 100);
}

function getData(type){
  if(type == 'truth'){
    return fetch('data.json')
      .then(res => res.json())
      .then(data => data.truth)
      .catch(err => err);
  }else if(type == 'dare'){
    return fetch('data.json')
      .then(res => res.json())
      .then(data => data.dare)
      .catch(err => err);
  }
}