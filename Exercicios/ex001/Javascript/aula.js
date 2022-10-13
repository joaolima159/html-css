function display (val){
    document.getElementById('resultado').value += val;
    return val;
}

function solve () {
    const x = document.getElementById('resultado').value
    const y = eval(x);
    document.getElementById('resultado').value = y;
    return y;
}


function clearScreen (){
    document.getElementById('resultado').value = ''
}
function data () {
    document.getElementById('data').addEventListener.onclick
    console.log(Date)
}
