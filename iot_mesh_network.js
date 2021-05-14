/*
You’re trying to build an IoT mesh network. Signals can only travel 
the maximum of 5 units. You’re given coordinates for the switch, the 
light, and the mesh hubs (which capture and forward signals). Return 
true if the switch can successfully toggle the light.

Example:
let network = { switch: [0,1], hub: [[2,1], [2,5]], light: [1,6] }
$ canToggle(network)
$ true
If you want a more visual example, here’s a diagram. In this example, 
canToggle would return false because the red circles don’t connect in 
the middle, with the blue triangle being the switch, and the green being the light!
*/

const distanceBetween = (a, b) => {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
};

const canToggle = (network) => {
  const maxUnit = 5;
  const start = network.switch;
  const nodes = network.hub;
  const end = network.light;
  let explored = new Set();
  let toExplore = [end];
  let toggle = false;
  explored.add(String(end));
  while (toExplore.length > 0) {
    let curr = toExplore.pop();
    if (distanceBetween(curr, start) <= maxUnit) {
      toggle = true;
      break;
    }
    nodes.forEach((node) => {
      if (
        !explored.has(String(node)) &&
        distanceBetween(curr, node) <= maxUnit
      ) {
        explored.add(String(node));
        toExplore.push(node);
      }
    });
  }

  return toggle;
};

let network = {
  switch: [0, 1],
  hub: [
    [2, 1],
    [2, 5],
  ],
  light: [1, 6],
};
console.log(canToggle(network));
