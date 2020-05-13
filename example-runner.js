module.exports = (baseUrl) => {
  const storageKey = 'lui-fiddle-custom-selected-example';
  fetch(baseUrl + 'examples.json')
  .then(res => res.json())
  .then(examples => {
    const selectedExample = window.sessionStorage.getItem(storageKey);
    runConfig(selectedExample || examples[0]);
    addExamplesToFiddle(examples);
  })

  function runConfig(example) {
    // window.sessionStorage.setItem(storageKey, JSON.stringify(example))
    fetch(baseUrl + example.entry)
      .then((res) => res.text())
      .then(raw => {
          const config = eval(raw)(baseUrl);
          console.log('config', config);
          Luigi.setConfig(config);
      })
  }
  // Adds a dropdown and button to load a specific example
  function addExamplesToFiddle(examples) {
    console.info('Not yet implemented.');
  }
}
