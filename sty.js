const sentenceContainer = document.getElementById('sentence-container');
const sentence = 'Hello, there';

sentence.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.animationDelay = `${index * 0.1}s`; // Adjust the delay for a staggered effect
  sentenceContainer.appendChild(span);
});
