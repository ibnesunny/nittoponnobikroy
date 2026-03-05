import React, { useEffect, useRef } from 'react'
import bgImage from '../../../assets/images/banner5.jpeg';
import onBanner from '../../../assets/images/banner6.jpeg';
import gsap from 'gsap';
import SplitType from 'split-type';

const Banner = () => {
  const quoteRef = useRef();
  const tl = useRef();

  useEffect(() => {
    const split = new SplitType(quoteRef.current, {
      types: 'words, chars',
      tagName: 'span',
    });

    split.words.forEach((word) => {
      word.classList.add('mr-2');
    });

    tl.current = gsap.timeline();
    tl.current.from(split.chars, {
      y: 80,
      opacity: 0,
      scale: 0.8,
      rotationX: 180,
      transformOrigin: 'center',
      ease: 'back.out(1.7)',
      duration: 1,
      stagger: 0.04,
    });

    return () => {
      split.revert();
    };
  }, []);

  const handleAnimate = () => {
    tl.current.restart();
  };

  return (
    <div
      className="mx-5 bg-base-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        borderRadius: '25px',
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={onBanner} alt="IGT Gas Safety Device" className="lg:max-w-md rounded-lg shadow-2xl" />
        <div className="text-white text-center">
          <h1
            ref={quoteRef}
            className="font-bold text-white mb-0 text-3xl md:text-4xl lg:text-5xl text-shadow-md text-shadow-green-700"
          >
            {'Safe Cooking Starts'} <br />{'from Here....'}
          </h1>
          <p className="py-6 font-poppins text-shadow-lg text-shadow-green-900">
            The IGT Gas Safety Device is an advanced LPG regulator that detects gas leaks, monitors cylinder pressure, and automatically shuts off gas to prevent accidents. Ensure safe and worry-free cooking for your home.
          </p>
          <button
            onClick={handleAnimate}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white text-[22px] hover:shadow-white hover:shadow-md hover:border-white hover:border-2"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
