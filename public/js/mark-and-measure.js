window.addEventListener("load", thingToMeasure);

function thingToMeasure() {
  // const start = new Date().getTime();
  performance.mark('start');
  fetch("/api")
  .then(result => result.json())
  .then(json => {
    json.images.forEach(image => console.log(image.name));
    // const end = new Date().getTime();
    performance.mark('end');
    // const result = end - start;
    performance.measure('Our measurment', 'start', 'end');
    // console.log(result);
    const measurment = performance.getEntriesByType('measure');
    console.log(measurment);
  });
}

