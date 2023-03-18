var display = document.getElementById('display');
var btn = document.getElementsByClassName('button');
var x = 0;
var result = null;
var y = null;
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        if (value == '/' || value == '*' || value == '-' || value == '+') {
            if (display.textContent == '') {
                result = value;
            } else {
              x = parseFloat(display.textContent);
                result = value;
                display.innerHTML = "";
              }
            } else if (value == '=') {
                if (result == null) {
          
                  return;
          
                } else if (display.textContent == '' && result !== null) {
          
                  display.innerHTML = x;
          
                } else if (display.textContent == '' && x == 0) {
          
                  display.innerHTML = 0;
          
                } else {
          
                  y = parseFloat(display.textContent);
          
                  if (x == 0 && result == '/' && y == 0) {
                    display.innerHTML = 'ERROR';
          
                  } else {
                    display.innerHTML = parseFloat(eval(x + result + y));
                  }
          
                  x = 0;
                  result = null;
                  y = null;
          
                }
          
          
              } else if (value == 'ac') {
                x = 0;
                display.innerHTML = '';
                result = null;
                y = null;
          
          
          
              } else if (value == 'x') {
          
                var temp = display.innerHTML;
                display.innerHTML = temp.substring(0, (temp.length - 1));
          
          
          
              } else if (value == '%') {
          
                var temp = display.innerHTML;
                display.innerHTML = parseFloat(eval(temp * 0.01));
          
          
          
              } else {
                display.innerHTML += value;
              }
          
            });
          };
          
