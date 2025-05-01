"use client";

import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import { useEffect } from 'react';

export default function () {
  useEffect(() => {
    gsap.registerPlugin(SplitText);

    let split = SplitText.create(".text", {
      type: "chars, words",
      autoSplit: true,
    })

    // gsap.from(split.chars, {
    //   opacity: 0,
    //   yPercent: "random(-100, 100)",
    //   rotation: "random(-60, 60)",
    //   ease: "back.out",
    //   stagger: 0.08,
    // })

    gsap.from(split.chars, {
      yPercent: "random([-100, 100])",
      rotation: "random(-30, 30)",
      ease: "back.out",
      autoAlpha: 0,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 0.3,
        from: "random",
      },
    })
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text text-8xl text-center">Hello World.</div>
    </div>
  )
}
