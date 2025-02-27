import './Background.css';
import video1 from '../../assets/viideo6.mp4';
import image1 from '../../assets/moun2.jpg';
import image2 from '../../assets/moun1.jpg';
import image3 from '../../assets/moun4.jpg';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className='Background fade-In' autoPlay loop muted>
        <source src={video1} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className='Background' alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className='Background' alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} className='Background' alt="" />;
  }
}

export default Background;

