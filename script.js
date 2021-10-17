new TypeIt('#type', {
  strings: [
  "Somewhere over the rainbow, way up high",
  "And the dreams that you dream of, once in a lullaby",
  "Somewhere over the rainbow, blue birds fly",
  "And the dreams that you dream of, dreams really do come true..."],

  breakLines: false,
  loop: true,
  beforeStep: (step, queue, instance) => {
    instance.elements[0].style.color = randomColor();
  }
  // Other callback methods include:
  // beforeString: (step, queue, instance) => {}
  // afterStep: (step, queue, instance) => {}
  // afterComplete: (instance) => {}
});
