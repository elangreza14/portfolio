console.log('initalize app')
if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
  console.log('app ready!')
}
