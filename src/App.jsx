import ReactPlayer from 'react-player/youtube';
import logo from './assets/images/Spongebob.png';

const App = () => {
  return (
    <div>
      <h1>Here is Spongebob!</h1>
      <img src={logo} alt="Spongebob logo" />
      <h1>And here is a video:</h1>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url="https://www.youtube.com/watch?v=iGGHKq8kXTs" playing={false} volume={0.5} />
  );
};

export default App;
