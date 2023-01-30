import React from 'react';
import { ReactSVG } from 'react-svg';

export default function FirstPage() {
  return (
    <>
      <div> Hello</div>
      <comic-gen
        name="rickynuovo"
        angle="side"
        emotion="wink"
        pose="normal"
        mirror="mirror"
        ext="svg"
      />
      <div className="d-flex">
        <ReactSVG src="https://gramener.com/comicgen/v1/comic?name=speechbubble&text=%D0%A2%D0%AB+%D0%9D%D0%98%D0%9A%D0%A3%D0%94%D0%90+%D0%9D%D0%95+%D0%A3%D0%99%D0%94%D0%95%D0%A8%D0%AC%21%3F&width=100&height=78&align=center&font-family=Indie+Flower&font-size=14&font-weight=bolder&pointerx=135&pointery=35&padding=20&fill=%23ffffff&line-height=1&x=0&y=0&scale=1&rough=2.5&box=&boxcolor=%23f7f7f7&boxgap=131&mirror=" />
        <ReactSVG src="https://gramener.com/comicgen/v1/comic?name=speechbubble&text=%D0%9A%D0%B0%D0%BA%D0%BE%D0%B9+IT%3F&width=100&height=100&align=right&font-family=Schoolbell&font-size=33&font-weight=normal&pointerx=130&pointery=50&padding=5&fill=%23ffffff&line-height=1&x=0&y=0&scale=1&rough=2.5&box=&boxcolor=%23f7f7f7&boxgap=124&mirror=" />
        <ReactSVG src="https://gramener.com/comicgen/v1/comic?name=aavatar&gender=female&character=bindi&facestyle=sketchy&emotion=afraid&attire=bodycon&pose=handonhip&face=%23eeddc5&shirt=%23ffcc66&pant=%233a4e5c&box=&boxcolor=%23000000&boxgap=&mirror=" />
        <ReactSVG src="https://gramener.com/comicgen/v1/comic?name=aryan&emotion=angry&pose=handsfolded&shirt=%23ffcc66&face=%23fbf4e9&box=10&boxcolor=%23000000&boxgap=116&mirror=" />
      </div>
    </>
  );
}
