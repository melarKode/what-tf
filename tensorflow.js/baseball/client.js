import io from 'socket.io-client';
const predictionContainer = document.getElementById('predict-container');
const predictButton = document.getElementById('predict-button');

const socket = io('http://localhost:8001',{
    reconnectionDelay:300, reconnectionDelayMax: 300
});

const testSample = [2.668,-114.333,-1.908,4.786,25.707,-45.21,78,0];

predictButton.onclick = ()=>{
    predictButton.disabled = true;
    socket.emit('predictSample', testSample)
}

socket.on('connect',()=>{
    document.getElementById('waiting-msg').style.display='none';
    document.getElementById('training-status').innerHTML = 'Training in progress';
})

socket.on('trainingComplete',()=>{
    document.getElementById('training-status').innerHTML = 'Training Complete';
    document.getElementById('predict-sample').innerHTML = '['+testSample.join(', ')+']';
    predictionContainer.style.display = 'block'
})

socket.on('predictResult',(result)=>{
    plotPredictResult(result);
})

socket.on('disconnect',()=>{
    document.getElementById('training-status').innerHTML='';
    predictionContainer.style.display = 'none';
    document.getElementById('waiting-msg').style.display = 'block';
})

function plotPredictResult(result){
    predictButton.disabled = false;
    document.getElementById('predict-result').innerHTML = result;
    console.log(result);
}