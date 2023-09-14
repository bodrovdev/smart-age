// ? --- Табы
function tabsFunc(rootClassName) {
  window.addEventListener('load', () => {
    let tabsList = document.querySelectorAll(`.${rootClassName}__tabs-item`);

    if (tabsList === null) {
      return;
    }
    else {
      tabsList.forEach(item => {
        let tabsItemContent = item.querySelector(`.${rootClassName}__tabs-item-content`);
        let tabsItemTop = item.querySelector(`.${rootClassName}__tabs-item-top`);

        item.addEventListener('click', () => {
          if (item.classList.contains(`${rootClassName}__tabs-item--active`)) {
            item.classList.remove(`${rootClassName}__tabs-item--active`);
            item.setAttribute('style', '');
          }
          else {
            item.classList.add(`${rootClassName}__tabs-item--active`);
            item.setAttribute(`style`, `height:${tabsItemContent.offsetHeight + tabsItemTop.offsetHeight}px; transition:all 0.3s;`);
          }
        })
      })
    }
  })
}

tabsFunc('event');
tabsFunc('shop');