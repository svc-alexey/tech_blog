'use client'
import React, { useEffect, useRef, useMemo, useState } from 'react'
import styles from './featured.module.css'
import LogoIcon from '../Icons/Logo'
import Typed from 'typed.js'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Featured = props => {

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: { enable: false, force: 60, smooth: 10 }
          },
          resize: true
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 }
        }
      },
      particles: {
        color: { value: "#410c96" },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: false,
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.05,
            sync: true,
            startValue: "max",
            count: 1,
            destroy: "min"
          },
          value: {
            min: 0,
            max: 0.5
          }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 5 }
        }
      }
    }),
    [],
  );

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Привет, это блог про технологии!', 'Давай развиватся вместе!'],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 500,
      fadeOut: true,
      loop: true,
      showCursor: false
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div class={styles.fullWidth}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className={styles.content}>
          <LogoIcon size={300} />
          <div ref={el} className={styles.typed}></div>
        </div>
      </div>
    </div>
  )
}

export default Featured