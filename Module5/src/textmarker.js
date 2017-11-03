export function initTextMarkers() {
    let buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        let isTooltipHidden = btn.innerHTML === 'Показать';
        btn.addEventListener('click', () => {
            if (isTooltipHidden) {
                btn.innerHTML = 'Скрыть';
                isTooltipHidden = false;
                btn.parentNode.querySelectorAll('[data-tooltip]').forEach((tc) => {
                    let tooltip = document.createElement('span');
                    tooltip.classList.add('tooltip-item');
                    tooltip.innerHTML = tc.getAttribute('data-tooltip');
                    tc.appendChild(tooltip);
                });
            } else {
                isTooltipHidden = true;
                btn.innerHTML = 'Показать';
                btn.parentNode.querySelectorAll('.tooltip-item').forEach(e => e.parentNode.removeChild(e));
            }
        })
    })


}