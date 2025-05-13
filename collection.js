// Scroll Reveal Animation
const products = document.querySelectorAll('.product');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

products.forEach(product => {
  product.classList.add('hidden');
  observer.observe(product);
});
