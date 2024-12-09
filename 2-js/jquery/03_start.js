function prependJS() {
    const Color = document.getElementsByClassName('colors');
    const li = document.createElement('li');
    li.innerText = '마지막 자식으로 추가된 js';
    Color.append(li);
}

function prependJquery() {
    $('.colors').prepend('<li>첫 자식으로 추가된 Jquery</li>');
}

function beforeJs() {
    const Green = document.querySelector('.green');
    const li = document.querySelector('li');
    li.textContent = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
    li.style.color = 'blue';
    Green.before(li);
}

function afterJquery() {
    $('.green').after('green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)');
}

function removeJs() {
    const li2 = document.querySelector('#li2');
    li2.remove();
}
function removeJquery() {
    $('#li2').remove();
}
function emptyJs() {
    const Nums = document.querySelector('.nums');
    Nums.textContent = ' ';
}
function emptyJquery() {
    $('nums').empty();
}
function findParent() {
    console.log(document.querySelector('.child2').parentNode);
    console.log(document.querySelector('.child2').parentElement);
    console.log(document.querySelector('html').parentNode);
    console.log(document.querySelector('html').parentElement);

    console.log($('.child2').parent());
}
function findNext() {
    console.log(document.querySelector('child2')).nextElementSibling;
}

function findChildren() {
    console.log(document.querySelector('.parent').children);
    console.log($('.parent').children());
}

document.querySelector('#h1').classList.add('fs-50');
$('#h1').addClass('fs-50');

document.querySelector('#h1').classList.remove('fs-50');
$('#h1').removeClass('fs-50');

document.querySelector('#h1').classList.contains('fs-50');
$('#h1').hasClass('fs-50');
