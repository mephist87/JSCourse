export function initTextMarkers() {
    let buttons = document.querySelectorAll('.btn');
    let tooltipItems = document.querySelectorAll('.tooltip-item');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.innerHTML = (el.innerHTML === 'Свернуть' ? 'Показать' : 'Свернуть');
        })
    })


}