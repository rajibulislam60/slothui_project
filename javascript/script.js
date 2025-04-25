function toggleMenu() {
  document.querySelector(".list").classList.toggle("show");
  document.querySelector(".auth-buttons").classList.toggle("show");
}
// -------------- Counting area------------
const counters = document.querySelectorAll(".countingItem");

counters.forEach((counter) => {
  const target = parseFloat(counter.getAttribute("data-target"));
  let current = 0;
  const speed = 0.02;
  const delay = 10;

  const suffix = counter.innerText.replace(/[0-9.,]/g, "");

  const updateCount = () => {
    current += target * speed;

    if (current < target) {
      if (suffix === "M") {
        counter.innerText = current.toFixed(2) + suffix;
      } else {
        counter.innerText = Math.floor(current).toLocaleString() + suffix;
      }
      setTimeout(updateCount, delay);
    } else {
      if (suffix === "M") {
        counter.innerText = target.toFixed(2) + suffix;
      } else {
        counter.innerText = target.toLocaleString() + suffix;
      }
    }
  };

  updateCount();
});
// --------------------- testimonials items --------------------
function toggleItem(){
  const frame = document.getElementById('testimonialsFrame');
  frame.classList.toggle('show-all');

  const btn = document.querySelector('.loadMoreBtn');
  btn.textContent = frame.classList.contains('show-all') ? "Show Less -" : "Load More +";
}
// --------------------- FAQ Items ----------------------
function toggleFaq(element) {
  const item = element.parentElement;
  item.classList.toggle('active');
}
