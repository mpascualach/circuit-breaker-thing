import React from 'react';

const DinoGame = () => {
  <>
    <iframe src="https://chromedino.com/" frameborder="0" scrolling="no" width="100%" height="100%" loading="lazy"></iframe>
    <style jsx>{
      `
      iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 999;
      }`
    }</style>
  </>
}

export default DinoGame;