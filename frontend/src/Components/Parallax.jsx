// ParallaxComponent.js

import React from 'react';
import { useSpring, animated } from 'react-spring';

const ParallaxComponent = ({ children, offsetY }) => {
  const springProps = useSpring({
    from: { transform: "translateY(0px)" },
    to: { transform: `translateY(${offsetY}px)` },
  });

  return <animated.div style={springProps}>{children}</animated.div>;
};

export default ParallaxComponent;
