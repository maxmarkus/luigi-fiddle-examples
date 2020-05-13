module.exports = (baseUrl, basePath) => {
  return {
    navigation: { 
        nodes: [{ 
            pathSegment: 'home', 
            label: 'h', 
            hideFromNav: true, 
            children: [{
                pathSegment: 'overview', 
                label: 'Overview', 
                icon: 'home',
                viewUrl: baseUrl + basePath + '/views/view-1.html',
                context: {
                    title: 'Welcome to my personal github examples!',
                    content: 'There is some other content'
                }
            },
            { 
                pathSegment: 'ui5sc 1', 
                label: 'Shopping Cart 1', 
                category:  'UI5 Demo Pages',
                hideSideNav: true,
                loadingIndicator: {
                    enabled: false
                },
                viewUrl: 'https://sapui5.netweaver.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html'
            },
            { 
                pathSegment: 'ui5sc 2', 
                label: 'Shopping Cart 2', 
                category:  'UI5 Demo Pages',
                hideSideNav: true,
                loadingIndicator: {
                    enabled: false
                },
                viewUrl: 'https://sapui5.netweaver.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html'
            },
            { 
                pathSegment: 'ui5sc 3', 
                label: 'Shopping Cart 3', 
                category:  'UI5 Demo Pages',
                hideSideNav: true,
                loadingIndicator: {
                    enabled: false
                },
                viewUrl: 'https://sapui5.netweaver.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html'
            },
            { 
                pathSegment: 'ui5sc 4', 
                label: 'Shopping Cart 4', 
                category:  'UI5 Demo Pages',
                hideSideNav: true,
                loadingIndicator: {
                    enabled: false
                },
                viewUrl: 'https://sapui5.netweaver.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html'
            },
        ] 
        },{ 
            pathSegment: 'foo', 
            label: 'Some Action',
            icon: 'favorite-list',
            viewUrl: baseUrl + basePath + '/views/view-1.html',
            hideSideNav: true,
            context: {
                title: 'Left navigation hidden',
                content: 'for pages needing more space or wanting to handle navigation internally'  
            }
        },{ 
            pathSegment: 'help', 
            label: 'Help',
            icon: 'sys-help',
            viewUrl: baseUrl + basePath + '/views/view-1.html',
            context: {
                title: 'Help Section',
                content: 'Find some useful links on the left'  
            },
            children: [{
                label: 'Back',
                link: '/',
                icon: 'nav-back'
            }]
        }]
    }, 
    routing: { 
        useHashRouting: true 
    }, 
    settings: { 
        responsiveNavigation: 'semiCollapsible',
        header: { 
            // logo: 'img/luigi.png', 
            title: 'Luigi Fiddle'
        } 
    } 
  }
};    
