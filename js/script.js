const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    document.querySelector('.active').classList.remove('active');
    event.currentTarget.classList.add('active');

    document.querySelector('.show').classList.remove('show');
    document
      .querySelector(event.currentTarget.dataset.panel)
      .classList.add('show');
  });
});
