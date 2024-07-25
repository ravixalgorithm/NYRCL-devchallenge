document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const animation = document.querySelector('.animation');
  
    nav.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'A') {
        const left = e.target.offsetLeft;
        const width = e.target.offsetWidth;
        animation.style.left = `${left}px`;
        animation.style.width = `${width}px`;
        animation.style.backgroundColor = '#b82811';
      }
    });
  
    nav.addEventListener('mouseout', () => {
      animation.style.left = '0';
      animation.style.width = '100px';
      animation.style.backgroundColor = '#b82811';
    });
  
    const skewMenu = document.querySelector('.skew-menu ul');
    skewMenu.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'A') {
        const listItem = e.target.parentElement;
        listItem.style.backgroundColor = '#eee';
        e.target.style.color = '#b82811';
      }
    });
  
    skewMenu.addEventListener('mouseout', (e) => {
      if (e.target.tagName === 'A') {
        const listItem = e.target.parentElement;
        listItem.style.backgroundColor = '#ffffff';
        e.target.style.color = '#555';
      }
    });
  
    const joinButtons = document.querySelectorAll('.button');
    joinButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! Please check your email for further instructions.');
      });
    });
  });
  
  
