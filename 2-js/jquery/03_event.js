$('.p-msg').click(function () {
    $('.p-msg').css('color', 'red');
});
$('.p-msg').click(function () {
    $(this).css('color', 'blue');
});

$('.num').on('click', function () {
    $(this).css('color', 'orange');
});

$('.num').click(function () {
    $(this).css('color', 'orange');
});
const nums = document.querySelectorAll('.num');
for (let num of nums) {
    console.log('num >>>', num);
    num.addEventListener();
}

$('.numbers').on('mouseover', function () {
    $(this).css('background-color', 'skyblue');
    $(this).append('<div>handler for basic</div>');
});
$('.numbers').mouseover(function () {
    $(this).css('background-color', 'skyblue');
    $(this).append('<div>handler for basic</div>');
});

// key event
$('.input-key').on('keydown', function (e) {});
$('#todo-form').on('submit', function (e) {
    e.preventDefault();

    $('.todo').val($('.todos').value);
    const todo = $("[name='todo']").val()
    $('.todo').append($('.todos').value);
    $('.todo').append('<li>$(todo)</li>');
    $('.todos').append('<li>$(todo)</li>');

    element.val('');
});

BigInt.addEventListener('click', function(){

})
for (let span of spans) {
    span.addEventListener('click', function())
}
