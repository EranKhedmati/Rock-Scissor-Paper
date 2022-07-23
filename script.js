// Choose cpu 
let cpuChoice = Math.floor(Math.random() * 3) + 1;
console.log(cpuChoice);

// claculate to who winer and show Result
let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let paper = document.getElementById('paper');
let result = document.querySelector('.result');
let refresh = document.getElementById('refresh');

rock.addEventListener('click', () => {
    if (cpuChoice === 1) {
        result.innerHTML = "Draw";
    } else if (cpuChoice === 2) {
        result.innerHTML = "User Win"
    }else{
        result.innerHTML = "CPU Win";
    }
    disableBtn();
});

scissor.addEventListener('click',()=>{
    if(cpuChoice === 1){
        result.innerHTML = "CPU Win";
    } else if(cpuChoice === 2){
        result.innerHTML = "Draw";
    } else{
        result.innerHTML = "User Win";
    };
    disableBtn();
});

paper.addEventListener('click',()=>{
    if(cpuChoice === 1){
        result.innerHTML = "User Win";
    } else if(cpuChoice === 2){
        result.innerHTML = "CPU Win";
    } else{
        result.innerHTML = "Draw"
    }
    disableBtn();
});

// disable buttons for refresh and show refresh button
function disableBtn(){
    rock.classList.add('disabled');
    scissor.classList.add('disabled');
    paper.classList.add('disabled');
    refresh.classList.remove('d-none');
}