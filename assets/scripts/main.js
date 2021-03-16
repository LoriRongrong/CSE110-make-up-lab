// main.js
// ES6 Modular JavaScript. 
// npm install trackjs --save



function add() {
    const first = document.getElementById('first').value;
    const second = document.getElementById('second').value;
    console.log(first, second);
    const ans = parseInt(first) + parseInt(second);
    console.log(ans);
    document.getElementById('ans').textContent = parseInt(ans);
}
// makeup lab 
function logInput() {
    console.log('This is console.log~');
    
}
function errorInput() {
    console.error('oops, something is wrong');
}
function tableInput() {
    console.table([
        {
          first: 'meh',
          last: 'bluh',
        },
        {
          first: 'oh',
          last: 'wow',
          birthday: 'asd13',
        },
        {
          first: 'okk',
          last: 'TwT',
        }
    ]);
}
function dirInput() {
    console.dir(document.head);
}
function dirxml() {
    console.dirxml(document);
}
const label = 'Adolescent Irradiated Espionage Tortoises';
function groupInput() {
    console.group(label);
    console.info('Lori');
    console.info('Kim');
    console.info('Sally');
    console.info('Emily');
    // console.groupEnd(label);
      
}
function groupEnd() {
    console.groupEnd(label);
}
function time() {
    console.info('start');
    console.time();
}

function timeEnd() {
    console.info('end');
    console.timeEnd();
}
function trace() {
    const first = () => { second(); };
    const second = () => { third(); };
    const third = () => { fourth(); };
    const fourth = () => { console.trace(); };
    first();
     
}


function triggerException() {
    try {
        // INVALID_CHARACTER_ERR
        var elem = document.createAttribute("123");
        throw new Error('this is an error');
    }
    catch (e) {
        alert('see console log for error msg');
        console.log(e);
    }   
    finally {
        console.log("this is finally");
    }
}

class ValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
  }
  
  function test() {
    throw new ValidationError("Whoops!");
  }
function customError() {
    try {
        test();
      } catch(err) {
        alert(err.message); // Whoops!
        alert(err.name); // ValidationError
        alert(err.stack); // a list of nested calls with line numbers for each
      }
    
}

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    console.log("i tried but it still prints the uncaught exception")
    return false;
};

function globe() {
    boomm();
}

    
