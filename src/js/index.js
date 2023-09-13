// ? --- Табы на странице мероприятия
document.addEventListener('load', () => {
  let event_tabs = document.querySelectorAll('.event__tabs-item');

  if (!(event_tabs === null)) {
    event_tabs.forEach(item => {
      let item_content = item.querySelector('.event__tabs-item-content');

      item.addEventListener('click', () => {
        if (item.classList.contains('event__tabs-item--active')) {
          item.classList.remove('event__tabs-item--active');
          item.setAttribute('style', '');
        }
        else {
          item.classList.add('event__tabs-item--active');
          item.setAttribute(`style`, `height:${item_content.offsetHeight + 50}px; transition:height 0.3s;`);
        }
      })
    })
  }
})