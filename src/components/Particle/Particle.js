import React from 'react';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import logo from '../../assets/img/color.png';

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);

    return (
        <Particles className='particles'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    // modes: {
                    //     push: {
                    //         quantity: 4,
                    //     },
                    //     repulse: {
                    //         distance: 200,
                    //         duration: 0.4,
                    //     },
                    // },
                },
                particles: {
                    color: {
                        value: "#e3d7bf",
                    },
                    links: {
                        color: "",
                        distance: 300,
                        enable: true,
                        opacity: 1,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 10,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'images',
                        image: [
                          {
                            src: logo,
                            height: 30,
                            width: 25,
                          }]},
                    size: {
                        value: { min: 20, max: 30 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Particle;