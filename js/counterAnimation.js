const allCounters = Array.from(document.getElementsByClassName("counter"));
allCounters.forEach((counter) => {
  const totalCount = counter.dataset.count;
  const speed = counter.dataset.speed;
  let count = 0;
  const countingProcess = setInterval(updateCount, 1000 / speed);
  function updateCount() {
    count++;
    counter.innerText = count;
    if (totalCount <= count) {
      clearInterval(countingProcess);
    }
  }
});
