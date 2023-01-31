import { Parallax } from 'react-parallax';
import spaceStation from '../images/spaceStation.jpeg';

const ImageThree = () => (
  <Parallax className='image' bgImage={spaceStation} strength={800} blur={0} bgImageStyle={{ minHeight: '100vh' }}>
    <div className='content'>
      <span className='img-txt'>A trip to space</span>
    </div>
  </Parallax>
);

export default ImageThree;
