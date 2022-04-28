import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Widget from '../components/Widget';
import Featured from '../components/Featured';

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Widget />
      <Featured />
    </div>
  );
};

export default Home;
