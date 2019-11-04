module.exports = class TravelPoint {
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
 };
 