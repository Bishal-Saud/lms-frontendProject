// Component imports
import App from './App.jsx'
import React from 'react'
//CSS Import
import './index.css'
// Library imports
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import store from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>

<BrowserRouter>
    <App />
    <Toaster/>
</BrowserRouter>  
    </Provider>
)
