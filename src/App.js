import React from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Slider from './component/slider';

function App() {

  return (
    <div className="App">
      <div className='content'>
          <Nav></Nav><br></br>
          <Slider></Slider>
        </div>
      <div className="container">
        <header className="header">
          <h1 className="mt-0">Hello Developer!</h1>
          <p>Welcome to Favstores onboarding template</p>
        </header>
        
        <div className="content">
          <div className="card w-12">
            <div className="flex flex-row align-items-center justify-content-center flex-wrap card-container blue-container">
              <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 text-white border-round m-2">1</div>
              <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 text-white border-round m-2">2</div>
              <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-blue-500 text-white border-round m-2">3</div>
            </div>
          </div>
          <h2 className="text-center w-12">Layout introduced by Prime Flex</h2>
          <h3 className="text-center w-12"><a href="https://www.primefaces.org/primeflex/" alt="prime-flex-css-library">https://www.primefaces.org/primeflex/</a></h3>
          <div className="card w-12">
            <div className="flex card-container blue-container">
              <div className="flex-grow-1 flex-shrink-1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white p-4 m-3 border-round">
              Note: style should be given in javascript format as  minWidth: 200, minHeight: 50 in double curly braces
              </div>
              <div className="flex-shrink-0 flex align-items-center justify-content-center bg-blue-500 font-bold text-white p-4 m-3 border-round">shrink item</div>
              <div className="flex-grow-1 flex-shrink-1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white p-4 m-3 border-round">
                Note: class should be given as className
              </div>
            </div>
          </div>
          <p>Edit src/app.js to make your changes</p>
          <p>Use npm i && npm start in repo through cmd / terminal to load webpage in your browser</p>
          <div className="card">
            <div className="flex flex-wrap card-container yellow-container">
              <div className="md:flex-order-2 flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">1</div>
              <div className="md:flex-order-1 flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">2</div>
              <div className="md:flex-order-0 flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">3</div>
            </div>
          </div>
          <div className="card">
            <div className="flex align-content-around flex-wrap card-container indigo-container" style={{"minWeight": 320, "maxWidth": 700}}>
              <div className="flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2" style={{"minWidth": 200, "minHeight": 50}}>1</div>
              <div className="flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2" style={{"minWidth": 200, "minHeight": 50}}>2</div>
              <div className="flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2" style={{"minWidth": 200, "minHeight": 50}}>3</div>
              <div className="flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2" style={{"minWidth": 200, "minHeight": 50}}>4</div>
              <div className="flex align-items-center justify-content-center bg-indigo-500 font-bold text-white border-round m-2" style={{"minWidth": 200, "minHeight": 50}}>5</div>
            </div>
          </div>
        </div>

        
      </div>
    </div >
  );
}
export default App;