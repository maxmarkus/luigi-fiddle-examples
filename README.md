# My Fiddle examples

Add the following code as fiddle configuration, this will add the examples from this configuration to your fiddle: 

```javascript
const baseUrl = 'https://maxmarkus.github.io/luigi-fiddle-examples/';
fetch(baseUrl + 'example-runner.js')
  .then((res) => res.text())
  .then(raw => {
    eval(raw)(baseUrl);
  });
```
