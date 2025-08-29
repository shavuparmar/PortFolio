import { TypeAnimation } from 'react-type-animation';

const Animtext = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web - developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Graphics designer',
        1000,
        'UI Designer',
        1000,
        'Music Composer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Animtext;