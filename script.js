function toggleAccordion(accordion) {
    accordion.classList.toggle('active'); 
    var panel = accordion.nextElementSibling; 
  
    if (panel.classList.contains('open')) {
      panel.classList.remove('open'); 
    } else {
      panel.classList.add('open');
    }
  }
  