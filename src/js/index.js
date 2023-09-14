// ? --- Табы на странице мероприятия
window.addEventListener('load', () => {
  let event_tabs = document.querySelectorAll('.event__tabs-item');

  if (event_tabs === null) {
    return;
  }
  else {
    event_tabs.forEach(item => {
      let item_content = item.querySelector('.event__tabs-item-content');
      let item_top = item.querySelector('.event__tabs-item-top');


      item.addEventListener('click', (e) => {

        if (item.classList.contains('event__tabs-item--active')) {
          item.classList.remove('event__tabs-item--active');
          item.setAttribute('style', '');
        }
        else {
          item.classList.add('event__tabs-item--active');
          item.setAttribute(`style`, `height:${item_content.offsetHeight + item_top.offsetHeight}px; transition:height 0.3s;`);
        }
      })
    })
  }
});