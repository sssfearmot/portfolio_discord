import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppProviders from './AppProviders'
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// class Index extends React.Component {
//   render() {
//     return (
//       <AppProviders>
//         <App />
//       </AppProviders>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

reportWebVitals();