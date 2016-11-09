const App = App || {};

document.addEventListener('DOMContentLoaded', () => {
  for (let module in App) {
    if('init' in App[module]){
      App[module].init();
    }
  }
});
