import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import './css/bootstrap.css';
import './css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter basename="/Apple_Custom">
		<App />
	</BrowserRouter>
);
