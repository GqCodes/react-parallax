import { Parallax } from 'react-parallax';
import Nasa from '../images/nasa.jpg';

const ImageOne = () => (
  <Parallax className='image' blur={0} bgImage={Nasa} strength={200} bgImageStyle={{ minHeight: '100vh' }}>
    <div className='content'>
      <span className='img-txt'>A trip to space</span>
    </div>
  </Parallax>
);

export default ImageOne;
