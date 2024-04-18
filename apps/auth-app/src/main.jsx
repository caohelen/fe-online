import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const render = () => {
	const appreact = document.getElementById('app-react')
	const root = ReactDOM.createRoot(appreact);
	root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = () => {
    render()
  };
  window.__WUJIE_UNMOUNT = () => {
		// const appreact = document.getElementById('app-react')
		// const root = ReactDOM.createRoot(appreact);
		// root.unmount();
  };
} else {
	render()
}