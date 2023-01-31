import { Parallax } from 'react-parallax';
import Satellite from '../images/satellite.jpeg';

const ImageTwo = () => (
  <Parallax className='image' bgImage={Satellite} strength={800} blur={0} bgImageStyle={{ minHeight: '100vh' }}>
    <div className='content'>
      <span className='img-txt'>A trip to space</span>
    </div>
  </Parallax>
);

export default ImageTwo;
