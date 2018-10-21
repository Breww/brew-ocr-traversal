import { fixtures } from './fixtures'

function area (serializedBb) {
  const [_, __, width, height ] = serializedBb.split(',');
  return width * height;
}

const terms = fixtures.regions.reduce((regionAcc, region) => [
  ...regionAcc,
  ...region.lines.reduce((acc, line) => [...acc, ...line.words], [])
], [])


const searchTerm = terms
  .slice()
  .sort(({ boundingBox: a }, { boundingBox: b }) => area(b) - area(a))
  .map(({ text }) => text)
  .join(' ')
  .toLowerCase()

console.log(searchTerm);