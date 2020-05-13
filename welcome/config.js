module.exports = (baseUrl) => {
return {
  navigation: { 
    nodes: [{ 
      pathSegment: 'home', 
      label: 'h', 
      hideFromNav: true, 
      children: [
        {
          pathSegment: 'overview', 
          label: 'Overview', 
          icon: 'home',
          viewUrl: baseUrl + 'welcome/multipurpose.html',
          context: {
            title: 'My personal fiddle examples',
            content: 'Select your desired example in the bottom select box'
          }
        },
        {
          label: 'GH maxmarkus',
          icon: 'external',
          externalLink: {
            url: 'https://github.com/maxmarkus/luigi-fiddle-examples',
            sameWindow: false
          }
        }
      ]
    }]
  }, 
  routing: { 
    useHashRouting: true 
  }, 
  settings: { 
    responsiveNavigation: 'semiCollapsible',
    header: {
      title: 'gh:maxmarkus'
    }
  } 
}
};    
