import '../styles/app.scss';

const btnTrigger = document.getElementById('btn-trigger');
const collapse = document.getElementById('collapse');

btnTrigger.addEventListener('click', () => {
  btnTrigger.classList.toggle('is-active');
  collapse.classList.toggle('is-open');
});
