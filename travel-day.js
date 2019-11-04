module.exports = class TravelDay {
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

    output() {
      return {
        name: this.name,
        location: this.location,
        points: this.pointsCollection,
      };
    }
};
