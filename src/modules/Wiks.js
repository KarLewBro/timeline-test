import wikijs from 'wikijs';
import * as Maths from './Maths.js';

wikijs().page('Plato').then(pg => pg.info()).then(console.log);
fetchPerson('Robin Williams');
//    Robin Williams    Julius Ceasar

async function fetchPerson(search) {
  return {
    name: await getName(search),
    birth: await getBirthYear(search),
    death: await getDeathYear(search),
    //TODO: Search for pastel randomiser
    color: "white",//Test stand in
    // start: await Maths.findStart(search),
    // size: await Maths.findSize(search)
  };
}

async function generateSpans() {

}

async function getName(x) {
  let targetPage = await wikijs().page(x);
  let name = await targetPage.info('name');
  if (name) {
    return name;
  } else {
    return null;
  }
};

async function getBirthYear(x) {
  let targetPage = await wikijs().page(x);
  let birthInfo = await targetPage.info('birthDate');
  if (birthInfo) {
    if (birthInfo.date) {
      let year = birthInfo.date.getFullYear();
      return year;
    } else {
      //let year = await parseDate(birthInfo);
      return 'Wack'
    }
  } else {
    return null;
  }
};

async function getDeathYear(x) {
  let targetPage = await wikijs().page(x);
  let deathInfo = await targetPage.info('deathDate');
  if (deathInfo) {
    if (deathInfo.date) {
      let year = deathInfo.date.getFullYear();
      return year;
    } else {
      //let year = await parseDate(deathInfo);
      return 'Wack'
    }
  } else {
    return 'Present';
  }
};

function checkPresent(x) {
  let today = new Date();
  let thisYear = today.getFullYear();
  if (x === thisYear) {
    return true
  } else {
    return false
  }
}

//TODO: this bullshit
// async function parseDate(rawDate) {
//
// }

export {
  fetchPerson,
  generateSpans
}
