import React from 'react';
import ImageGallery from './components/ImageGallery'
import MenuBasic from './components/menu'
import PostCard from './components/postCard';
import Posts from './components/Posts';
// import ZmageSlider from './components/ImageSlider'


function App() {
  return (
    <div className="App">
      <MenuBasic/>
      <ImageGallery perRow={4} count={24}/>
      {/* <ZmageSlider/> */}
      <Posts/>

     
    </div>
  );
}

export default App;
