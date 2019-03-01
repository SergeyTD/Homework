var area = document.querySelector('#area');
var colorInput = document.querySelector('#colorInput');
var circle = document.getElementById('cir');
var square = document.getElementById('sq');
var oval = document.getElementById('ov');
var rectangle = document.getElementById('rect');
var sizeInput = document.getElementById('size');
var sizeInput2 = document.getElementById('size2');

document.querySelector('#fig1').onclick = function() {
    sizeInput2.style.display = 'none';
}
document.querySelector('#fig2').onclick = function() {
    sizeInput2.style.display = 'inline-block';
}

area.addEventListener('click', function(e) {
var target = this;
var color = colorInput.value;
var size = sizeInput.value;
var size2 = sizeInput2.value;
var el = document.createElement('div');

if (circle.checked) {
    el.classList.add('circle');
    el.style.width = +size + 'px';
    el.style.height = +size + 'px';
} else if (square.checked) {
    el.classList.add('square');
    el.style.width = +size + 'px';
    el.style.height = +size + 'px';
} else if (oval.checked) {
    el.classList.add('oval');
    el.style.width = +size + 'px';
    el.style.height = +size2 + 'px';
} else if (rectangle.checked) {
    el.classList.add('rectangle');
    el.style.width = +size + 'px';
    el.style.height = +size2 + 'px';
}

el.style.top = e.offsetY + 'px';
el.style.left = e.offsetX + 'px';
el.style.backgroundColor = color;
target.appendChild(el);
})


    