import React from 'react';
import GlitchText from './utils/GlitchText';
import SplashCursor from './utils/SplashCursor';

const not_found = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <GlitchText>404 NOT FOUND</GlitchText>
    <SplashCursor/>
    </div>
  )
};

export default not_found;