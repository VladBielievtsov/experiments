"use client"

import Matter from 'matter-js'
import { useEffect, useRef } from 'react'

export default function () {
  const sceneRef = useRef(null)
  const engineRef = useRef(Matter.Engine.create())

  useEffect(() => {
    const engine = engineRef.current
    engine.world.gravity.y = 1;

    const render = Matter.Render.create({
      element: sceneRef.current! as HTMLElement,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: true,
        background: '#fafafa',
      }
    })

    const boxes = [];

    for (let i = 0; i < 10; i++) {
      const x = Math.random() * 700 + 50
      const y = Math.random() * 400 + 50
      const box = Matter.Bodies.rectangle(x, y, 80, 80);

      boxes.push(box)
    }

    const spawnBox = (event: MouseEvent) => {
      const x = event.offsetX;
      const y = event.offsetY;

      const newBox = Matter.Bodies.rectangle(x, y, 80, 80, {
        render: { fillStyle: 'blue' },
      });

      Matter.World.add(engine.world, newBox);
      boxes.push(newBox);
    }

    const canvas = render.canvas;
    // canvas.addEventListener('click', spawnBox);

    const ground = Matter.Bodies.rectangle(400, 590, 810, 60, { isStatic: true });

    Matter.World.add(engine.world, [...boxes, ground]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    Matter.Render.run(render);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    })

    Matter.World.add(engine.world, mouseConstraint);

    return () => {
      Matter.Render.stop(render)
      Matter.Runner.stop(runner)
      Matter.World.clear(engine.world, false)
      Matter.Engine.clear(engine)
      render.canvas.remove()
      render.textures = {}
      canvas.removeEventListener('click', spawnBox);
    }
  }, [])


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div ref={sceneRef} className='w-[800px] h-[600px]'></div>
    </div >
  )
}
