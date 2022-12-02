import React from 'react';
import robot from './robot.png'
import Tilt from 'react-parallax-tilt';
import './ParallaxEffectImg.demozap.scss';

const Logo = () => {
	return(
		<div>
		  <Tilt
			    className="br2 shadow-2 parallax-effect-img"
			    tiltMaxAngleX={40}
			    tiltMaxAngleY={40}
			    perspective={800}
			    transitionSpeed={1500}
			    scale={1.1}
			    gyroscope={true}
			    style={{height:150,width:150}}
			  >
			  <div className='pa3 tc align-items'><img style={{paddingTop: '5px'}} alt='logo' src={robot} /></div>
		  </Tilt>
		</div>
	)
}

export default Logo;