const todolist = document.querySelectorAll('.todo');
const donelist = document.querySelectorAll('.done');

todolist.forEach((list) => {
    list.classList.toggle('todo');
    list.classList.toggle('done');
});
donelist.forEach((list) => {
    list.classList.toggle('todo');
    list.classList.toggle('done');
});
