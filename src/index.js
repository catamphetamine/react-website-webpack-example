// Add ES6 polyfill (for older browsers).
require('@babel/polyfill')

// Run the application.
require('./render').default().catch(error => console.error(error))