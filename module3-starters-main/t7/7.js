'use strict';

const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

trigger.addEventListener('mouseover', function() {
  target.src = 'picB.jpg';
});

trigger.addEventListener('mouseout', function() {
  target.src = 'picA.jpg';
});


