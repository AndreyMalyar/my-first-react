import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
//import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {index} from "./store";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/my-first-react">
      <Provider store={index}>
          <App />
      </Provider>
  </BrowserRouter>
)
