new TypeIt('#type', {
  strings: [
  "For you :))",
  "It's your day...",
  "Wish it is filled with joy",
  "..........."],

  breakLines: true,
  loop: false,
  beforeStep: (step, queue, instance) => {
    instance.elements[0].style.color = randomColor();
  }
  // Other callback methods include:
  // beforeString: (step, queue, instance) => {}
  // afterStep: (step, queue, instance) => {}
  // afterComplete: (instance) => {}
});
