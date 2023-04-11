document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)
document.querySelector('#divide').addEventListener('click', divide)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#null').addEventListener('click',del)
document.querySelector('#equal').addEventListener('click', equal)
document.querySelector('#minus').addEventListener('click', minus)




function one() {
document.querySelector('#result').innerText += '1'
}

function two() {
  document.querySelector('#result').innerText += '2'
  }

function minus() {
  document.querySelector('#result').innerText += '-'
}

function  plus() {
  document.querySelector('#result').innerText += '+'
}


// easy and dangerous way to do computation
// total = 0
// function equal() {
// total = eval(document.querySelector('#result').innerText)
// document.querySelector('#result').innerText = total
// }


// eval alternative (safe way to do computation)
function equal() {
  document.querySelector('#result').innerText = new Function('return ' + document.querySelector('#result').innerText)()
  }


function multiply() {
  document.querySelector('#result').innerText += '*'
}

 function three() {
  document.querySelector('#result').innerText += '3'
}

 function zero() {
 document.querySelector('#result').innerText += '0'
}

function four() {
    document.querySelector('#result').innerText += '4'
}
      
function five() {
    document.querySelector('#result').innerText += '5'
}
      
function six() {
 document.querySelector('#result').innerText += '6'
 }
      
function seven() {
    document.querySelector('#result').innerText += '7'
}
      
function eight() {
document.querySelector('#result').innerText += '8'
}
      
function nine() {
document.querySelector('#result').innerText += '9'
}
      
function del() {
document.querySelector('#result').innerText = ' '
}
      
function divide() {
document.querySelector('#result').innerText += '/'
}