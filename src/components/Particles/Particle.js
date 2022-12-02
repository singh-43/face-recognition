import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
	const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
	return(
		<div>
			<Particles
		      id="tsparticles"
		      init={particlesInit}

		      options={
		      	{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": -1
                        //-1 o send it to back
                    },
                    "fpsLimit": 120,
                    "particles": {
                        "number": {
                            "value": 140,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ff0000",
                            "animation": {
                                "enable": true,
                                "speed": 20,
                                "sync": true
                            }
                        },
                        "opacity": {
                            "value": 0.5
                        },
                        "size": {
                            "value": {
                                "min": 0.1,
                                "max": 3
                            }
                        },
                        "links": {
                            "enable": true,
                            "distance": 100,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 3,
                            "direction": "none",
                            "outModes": {
                                "default": "out"
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onHover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onClick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "quantity": 4
                            }
                        }
                    },
                    "detectRetina": true,
                    "background": {
                        // "color": "#000000"
                    }
                }
		      }
		    />
		</div>
	)
}

export default Particle;

