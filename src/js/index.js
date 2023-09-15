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

// ? --- Звёзды рейтинга
window.addEventListener('load', () => {
  let shopItems = document.querySelectorAll('.shop__reviews-slider-slide');

  if (shopItems === null) {
    return;
  }
  else {
    shopItems.forEach(item => {
      let shopItemsStars = item.querySelectorAll('.shop__reviews-slide-star');
      for (let i = 0; i < item.dataset.rating; i++) {
        Array.from(shopItemsStars)[i].classList.add('shop__reviews-slide-star--active');
      }
    })
  }
});

// ? --- Показать ещё
window.addEventListener('load', () => {
  let shopItemText = document.querySelectorAll('.shop__reviews-slide-text');

  if (shopItemText === null) {
    return;
  }
  else {
    shopItemText.forEach(text => {
      if (text.offsetHeight > 57) {
        text.classList.add('shop__reviews-slide-text--hidden');

        text.addEventListener('click', () => {
          text.classList.toggle('shop__reviews-slide-text--hidden');
        })
      }
    })
  }
})

// ? --- Лайк / Дизлайк
window.addEventListener('load', () => {

  document.querySelectorAll('.shop__reviews-slider-slide').forEach(item => {
    let shopItemButtons = item.querySelectorAll('.shop__reviews-slide-likes-button');

    if (shopItemButtons === null) {
      return;
    }
    else {
      shopItemButtons.forEach(button => {
        button.addEventListener('click', () => {
          shopItemButtons.forEach(buttonItem => { buttonItem.classList.remove('shop__reviews-slide-likes-button--active') });

          button.classList.add('shop__reviews-slide-likes-button--active');

          item.dataset.reaction = button.dataset.like;
        })
      })
    }
  })
});