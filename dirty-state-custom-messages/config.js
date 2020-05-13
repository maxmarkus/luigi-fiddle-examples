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
                    title: 'Dirty State and custom messages!',
                    content: 'Click below to navigate to a page that shows dirty state example.'
                }
            },
            { 
                pathSegment: 'dirty', 
                label: 'Dirty State', 
                category:  'Luigi Features',
                context: {
                    title: 'Dirty State',
                    content: 'Try to navigate away from this page.'
                },
                viewUrl: baseUrl + basePath + '/views/view-dirty-state.html',
            }
        ] 
    },  
        { 
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
            title: 'Luigi Fiddle'
        } 
    },
    communication: {
        customMessagesListeners: {
            'my.navigate-to': (msg) => {
                // navigating to msg.path
                console.log('received my.navigateto', msg);
                Luigi.navigation().navigate(msg.path);   
            }
        }
    }
  }
};    
