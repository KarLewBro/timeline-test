async function doMaths(xs) {
  let startPoint = await findStart(xs);
  let size = await findSize(xs);
  return { startPoint, size };
}

async function findStart(xs) {
  let baseRange = await findBase(xs);
  let baseLength = (baseRange[1]-baseRange[0]);
  let startPoint = (Math.round((xs.birth-baseRange[0])/baseLength)*100);
  return startPoint;
}

async function findSize(xs) {
  let baseRange = await findBase(xs);
  let baseLength = (baseRange[1]-baseRange[0]);
  let size = (Math.round(((xs.death-xs.birth)/baseLength)*100));
  return size;
}

async function findBase(xs) {
  let min = 9000,
  max = 0;
  for await (const person of xs) {
    min = person.birth < min ? person.birth : min;
    max = person.death > max ? person.death : max;
  }
  return [min, max];
}

export {
  findStart,
  findSize
}
