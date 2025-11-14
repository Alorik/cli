function bio(user) {
  console.log('hi ' + user.name + ' your age is ' + user.age);
}

let user = {
  name : 'nitin' ,
  age : 19
}

bio(user);

function greet(user2) {
  console.log('HI Mr. ' + user2.name + ' your age is ' + user.age );

}

let user2 = {
  name : 'NITIN' ,
  age : 19 ,
  gender : 'male'
}
greet(user2);


//assignment 3

function array(arr) {
  for (let i = 0; i < arr.length; i++) {
   
    if (arr[i].age >=18) {
      console.log((arr[i].name));
    } 
  }  
}

const arr = [{
  name: 'harkirat',
   age: 21, 
   gender:'male'
  }, {
  name: 'priya',
  age: 21, 
  gender:'female'
  }
  ,{
  name: 'raman',
  age: 11 ,
  gender: 'male' 
  }]

  array(arr);