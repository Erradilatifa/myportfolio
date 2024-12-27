document.addEventListener("DOMContentLoaded", function () {
  const words = ["Web Developer", "Mobile Developer", "Frontend Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = '';
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const newWordDelay = 2000;

  function type() {
      if (charIndex < words[wordIndex].length) {
          currentWord += words[wordIndex].charAt(charIndex);
          document.querySelector('.typing-animation').textContent = currentWord;
          charIndex++;
          setTimeout(type, typingSpeed);
      } else {
          setTimeout(erase, newWordDelay);
      }
  }

  function erase() {
      if (charIndex > 0) {
          currentWord = currentWord.slice(0, -1);
          document.querySelector('.typing-animation').textContent = currentWord;
          charIndex--;
          setTimeout(erase, erasingSpeed);
      } else {
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, typingSpeed + 1100);
      }
  }

  type();
});

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.main-btn');

    downloadBtn.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('Me-Stuff/erradilatifa.pdf', '_blank');
        window.location.href = 'index.html';
    });
});

// Animate progress bars
const progressBars = document.querySelectorAll('.progress-done');

progressBars.forEach(bar => {
    setTimeout(() => {
        bar.style.width = bar.getAttribute('data-done') + '%';
        bar.style.opacity = 1;
    }, 500);
});

// Animate circular skills
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
});
