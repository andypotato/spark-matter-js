# Matter.js for Meta Spark

This is a fork of the [Matter.js 2D physics library](https://github.com/liabru/matter-js/) for use in [Meta Spark](https://sparkar.facebook.com/ar-studio/) projects.

## Usage

Just drop build/matter.js into your Spark AR project. Note that the **Runner** and **Renderer** classes have been removed from this build. You need to implement your own runner and update the objects in the Spark world according to the positions of your bodies.

## Example

```
const fps = 1000 / 30;
const engine = Engine.create({ ... your engine options here ... });

// the scene objects you want to simulate
const sparkBodies = [ ... ];

Time.ms.monitor().subscribe(evt => {

  const deltaTime = (evt.newValue - evt.oldValue);
  update(deltaTime);

});

function update(deltaTime) {

  // update world
  Engine.update(engine, fps);

  // now move the Spark bodies
  sparkBodies.forEach(obj => {
    obj.update(deltaTime);
  });
}
```
