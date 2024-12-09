const Form = document.querySelector('form');
const commentList = document.querySelector('.comment-list');

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    const Id = document.querySelector('#userid').value.trim();
    const Comment = document.querySelector('#comment').value.trim();

    if (Id !== '' && Comment !== '') {
        const newValue = document.createElement('li');
        newValue.textContent = `${Id} - ${Comment}`;
        commentList.append(newValue);
    }

    // input 창 초기화
    Id.value = '';
    Comment.value = '';
});
