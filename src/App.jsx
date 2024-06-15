import ImageGallery from 'react-image-gallery'
import Calendario from '../src/assets/calendario-app.png';
import Poke from '../src/assets/pokedex-2.png';
import Fit from '../src/assets/fit-club.png';

import "react-image-gallery/styles/css/image-gallery.css";

const App = () => {
  
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ]

  return (
    <div>
      <ImageGallery items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={true}
        showBullets={true}
        autoPlay={false}
        slideInterval={3000}
        slideDuration={3000}
      />
    </div>
  )
}

export default App