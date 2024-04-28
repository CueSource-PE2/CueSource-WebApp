/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Layout from './components/layout/Layout';
import Forum from './components/Forum/Forum';
import ProfileLayout from './components/layout/ProfileLayout';
import Profile from './components/Profile/Profile';
import Quests from './components/Quests/Quests';
import QuestLayout from './components/layout/QuestLayout';
import Error from './components/error/Error';

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
          <Route path='/profile' element={<ProfileLayout><Profile /></ProfileLayout>} />
          <Route path='/create-quests' element={<QuestLayout><Quests /></QuestLayout>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App