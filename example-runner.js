module.exports = (baseUrl) => {
  const storageKey = 'lui-fiddle-custom-selected-example';
  const selectedExample = JSON.parse(sessionStorage.getItem(storageKey));
  fetch(baseUrl + 'examples.json')
  .then(res => res.json())
  .then(examples => {
    runConfig(selectedExample || examples[0]);
    addExamplesToFiddle(examples);
  })

  function runConfig(example) {
    console.log('runConfig', example);

    sessionStorage.setItem(storageKey, JSON.stringify(example))
    fetch(`${baseUrl}${example.path}/${example.entry}`)
      .then((res) => res.text())
      .then(raw => {
          const config = eval(raw)(baseUrl, example.path);
          console.log('config', config);
          Luigi.setConfig(config);
      })
  }
  
  // Adds a dropdown and button to load a specific example
  function addExamplesToFiddle(examples) {
    window.selectConfig = () => {
      const config = examples[document.getElementById(storageKey).selectedIndex];
      console.log('selectConfig', document.getElementById(storageKey).selectedIndex, config);
      runConfig(config);
    };

    // get preselected index
    let selectedExIndex;
    if (selectedExample) {
      for (let i = 0; i < examples.length; i++) {
        if(examples[i].path == selectedExample.path) {
          selectedExIndex = i;
        }
      }
    }
    console.log('selectedExIndex', selectedExIndex);
    // create select
    const select = document.createElement('select');
    select.id = storageKey;

    // options
    examples.forEach((example, index) => {
      var opt = document.createElement('option');
      opt.value = index;
      opt.innerHTML = example.name;
      if ((selectedExIndex == index) || (!selectedExIndex && index === 0)) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    const actionbar = document.querySelector('.fiddle-toolbar .fd-action-bar__actions');
    actionbar.insertBefore(select, actionbar.childNodes[0] || null);
    select.addEventListener('change', () => window.selectConfig());
  }
}
