class TravelDay {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.pointsCollection = [];
    }

    add(point) {
        this.pointsCollection.push(point);
    }

    print() {
        console.log('Places to visit in ' + this.name + ':');
        
        this.pointsCollection.forEach((point) => {
          if (!point.visited) {
            console.log(point.name, point.address);
          }
        });
    }
}

const firstDay = new TravelDay('Denmark', 'Aarhus');

class TravelPoint {
   constructor(name, address) {
        this.name = name;
        this.address = address;
        this.visited = false;
    }

    markVisited() {
      this.visited = true;
    }

    markUnvisited() {
      this.visited = false;
    }
}

const artMuseum = new TravelPoint('ARoS Aarhus Art Museum', 'https://goo.gl/maps/chzzyQCCEoKnqgp36');
const oldMarketTown = new TravelPoint('Den Gamle By', 'https://goo.gl/maps/Gsn48kuZBUUf9Zxt9');
const kvindemuseet = new TravelPoint('Womens Museum', 'https://goo.gl/maps/UNPvd1KNwBEHcwFg8');

firstDay.add(artMuseum);
firstDay.add(oldMarketTown);
firstDay.add(kvindemuseet);

firstDay.print();

kvindemuseet.markVisited();

firstDay.print();