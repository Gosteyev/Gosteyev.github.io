const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("drop", drop);
    elem.addEventListener("dragleave", dragLeave);
});

function dragEnter(e){
    if(!e.target.classList.contains('dropped')){
        e.target.classList.add('droppable-hover');
    }
}

function dragLeave(e){
    e.target.classList.remove('droppable-hover');
}

function dragStart(e){
    console.log('Drag start', e);
    e.dataTransfer.setData('text', e.target.style.color);
    e.dataTransfer.setData('id', e.target.id);
}

function dragOver(e){
    e.preventDefault();
    console.log('Drag Over', e);
}

function drop(e){
    e.preventDefault();
    //const draggableElementData = e.dataTransfer.getData('text');
    //e.target.style.backgroundColor = draggableElementData;
    const draggableElementId = e.dataTransfer.getData('id');
    const droppableElement = e.target.getAttribute('data-draggable-id');
    if (draggableElementId == droppableElement){
        e.target.classList.add('dropped');
        const draggedElement = document.getElementById(draggableElementId);
        e.target.style.backgroundColor = draggedElement.style.color;
        //e.target.append(draggedElement);
        draggedElement.classList.add('dragged');
        draggedElement.setAttribute('draggable', false);
        e.target.insertAdjacentHTML('afterbegin', `<i class="fas fa-${draggableElementId}"></i>`);
    }
    e.target.classList.remove('droppable-hover');

}

