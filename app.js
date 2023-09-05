const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');


item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);


placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
})

function dragstart(e) {
    e.target.classList.add('hold');
    placeholders.forEach(placeholder => {
        placeholder.classList.add('active')
    });
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragend(e) {
    placeholders.forEach(placeholder => {
        placeholder.classList.remove('active');
    });
    e.target.className = 'item';
}

function dragover(e) {
    e.preventDefault();
}

function dragenter(e) {
    e.target.classList.add('hovered');
    e.target.classList.remove('active');
}

function dragleave(e) {
    e.target.classList.remove('hovered');
    e.target.classList.add('active');
    
}

function dragdrop(e) {
    e.target.append(item);
    e.target.classList.remove('hovered');
}