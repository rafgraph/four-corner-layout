import React from 'react';

function App({ children, location }) {

  if (location.hash) {
    // push onto callback queue so it runs after the DOM is updated
    // this is required when navigating from a different page so that
    // the element is redered on the page before trying to getElementById
    setTimeout(() => {
      let id = location.hash.replace('#', '');
      let element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }

  return children;
}


// function App(props) {
//   const a = function() {
//     console.log(props);
//     return <div>hellooo wooorld</div>
//   }
//   // debugger;
//   return a();
// }

export default App;
