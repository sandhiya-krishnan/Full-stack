import './App.css'
import ClassComp from './Components/ClassComponents/ClassComp';
import React from 'react';
import UnorderedList from "./Components/functionComponent/UnorderedList";
import DefaultExportInfo from "./Components/functionComponent/DefaultExportInfo";


const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Welcome to Vite + React</h1>
      <p>This is the default exported App component.</p>
      <ClassComp/>
      <DefaultExportInfo />
      <UnorderedList />
    </div>
  );
};

export default App;