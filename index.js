const TravelDay = require('./travel-day');
const TravelPoint = require('./travel-point');
const Database = require('./database');

const travelDay = new TravelDay('Denmark', 'Aarhus');

const artMuseum = new TravelPoint('ARoS Aarhus Art Museum', 'https://goo.gl/maps/chzzyQCCEoKnqgp36');
const oldMarketTown = new TravelPoint('Den Gamle By', 'https://goo.gl/maps/Gsn48kuZBUUf9Zxt9');
const kvindemuseet = new TravelPoint('Womens Museum', 'https://goo.gl/maps/UNPvd1KNwBEHcwFg8');

travelDay.add(artMuseum);
travelDay.add(oldMarketTown);
travelDay.add(kvindemuseet);

travelDay.print();

Database.save('travel-day.json', travelDay.output())
