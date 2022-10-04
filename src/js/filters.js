export function filters() {
  const filterOpen = document.querySelector('.block-filter-js');
  const filterContent = document.querySelector('.sidebar-js');
  const filterClose = document.querySelector('.block-close-js');
  const filterClearMobile = document.querySelector('.block-clear-mobile-js');
  const filterClearDesktop = document.querySelector('.block-clear-desktop-js');

  const filterClear = () => {
    let checkboxes = document.querySelectorAll('.checkbox__real-check');
    for (const checkbox of checkboxes) {
      checkbox.checked = false;
    }
  };

  if (filterOpen) {
    filterOpen.addEventListener('click', () => {
      filterContent.classList.toggle('active');
    });
  }

  if (filterClose) {
    filterClose.addEventListener('click', () => {
      filterContent.classList.remove('active');
    });
  }

  if (filterClearMobile) {
    filterClearMobile.addEventListener('click', filterClear);
  }

  if (filterClearDesktop) {
    filterClearDesktop.addEventListener('click', filterClear);
  }
}
