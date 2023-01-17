import React from "react";
import "./App.css";
import Router from "./components/Router";
import { AuthProvider } from './state/contexts/AuthContext';

function App() {
  return (
    <div className='App'>
      {/*Add your providers and components here*/}
        <AuthProvider>
          <Router />
        </AuthProvider>
    </div>
  )
}

export default App;
