class Rectangle {
  constructor(width , height , color) {
    this.width = width ;
    this.height = height ;
    this.color = color;
  }

  area () {

    const area = this.width * this.height ;
    return area
  }

  paint () {
    console.log("color is ");
    console.log(this.color);
  }

}

const rect = new Rectangle(2,5,"black");
const area = rect.area() ;
console.log(area); 


// javascript have some of their own class example -----

const now = new Date();  //date 
console.log(now);
console.log(now.getMonth());

//maps

const map = new Map();
map.set('name', 'nittu');
map.set('age' , 19);

console.log(map.get('name'));


