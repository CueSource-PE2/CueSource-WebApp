import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Layout from './components/layout/Layout';
import Forum from './components/Forum/Forum';

function App() {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "OpenSource Calls You 🚀!!";
  })
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });
  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Layout><Homepage /></Layout>} />
          <Route path='/forum' element={<Layout><Forum /></Layout>} />
        </Routes>
      </Router>
    </>
  )
}

export default App