//how to define object
//in object we must be use key and value

let person={

        name : "Zahra",
        age :26,
        admin : true

}
console.log("Hello")
//to accsess specific feature from an object
console.log(person.age)
console.log(person.name)
//to accsess specific feature from an object=way2
console.log(person["admin"])
//________________________________________________________________
//to define array

let users=["zahra","Fateme"]
console.log(users)
console.log(users[1])

//it is possible to add size of array in future

users[2]="sara";

users[3]=3;
users[4]=true;
console.log(users);
console.log(users.length); //length of array
//________________________________________________________________
function greet(name,age){
let message=" Hello "+name+" You are "+age+" years old";
console.log(message);

}

function square(number){
    let result=number*number;
    return result;

}
greet("Zahra",26);
console.log(square(3));
//________________________________________________________________
let hour=0;
if (hour>=6 && hour<12){
    console.log('good morning');


}
else if(hour>=12 && hour<18){
    console.log(":good afternoon");


}
else {
    console.log("nothing");
}
//________________________________________________________________
let role='guest';
switch(role){
    case "guest":
        console.log("guest user");
        break;
    case "admin":
        console.log("admin user");
        break;
    default:
        console.log("no body");
        
}
//________________________________________________________________
for (let i=0;i<100;i++){
    if(i%2==0){
        console.log(i);
    }
}
for (let i=10;i>0;i--){
    
        console.log(i);
   
}
//________________________________________________________________
let i=0;
while(i<=5){ //if we put True on i the loop repeatd forever
console.log(i);
i++;
}
//________________________________________________________________
let j=0; //difrence by while is this loop run minimum once 
do{
    console.log(j);
    j++;

}while(j<5);
//________________________________________________________________

//02:30:00
//for in & for of
const person1 = {name:"Zahra",age:27};
for(let key in person1) //key is index and person1 is itterable object
{
console.log(key);
console.log(person[key]);
}
const colors=['red','green','blue'];


for(let index in colors)
{
    //console.log(index);
    console.log(colors[index]);

}

//if we not define index , default index is 0,1,2 
//but we can define index by name


for(let color of colors){
    console.log(color); //output: red,green,blue
}
//________________________________________________________________
// after check that k is 5 break loop 
let k=0;
while(k<=10){ 
  
    if (k==5){
        break;
    }
    console.log(k);
    k++;
    }
// after check that k is 5 jump to next turn of loop
//z++ for prevent go loop to unlimited

let z=0;
while(z<=10){ 
  
    if (z==5){
        z++;
        continue;
    }
    console.log(z);
    z++;
    }
//________________________________________________________________
//object is key value pair
//object can have obect element
//OOP Programming

let circle={
    radius:1,
    location: {
    x: 1,
    y: 1,
},
isvisible:true,
draw : function(){ console.log('draw with Location'+this.location.x+','+this.location.y)}
};

circle.draw();
//________________________________________________________________
//Factory Function = to produce function
function createCircle(radius){
    return{
        radius:radius, //if radius equal to input radios 
        //another syntax: radius, (just radius)

    draw(){ console.log('draw your input radius is :'+radius)}
    //another syntax draw(){ console.log('draw)}

    }

   }


    let circle1=createCircle(1);
    console.log(circle1);

    let circle2=createCircle(2);
    console.log(circle2);

//________________________________________________________________
  //constructor function
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw')

    }
 
}
  const circle3=new Circle(3)
  console.log(circle3)
//________________________________________________________________
//Dynamic Object
const circle4={ //with const we can't redefine a value of variable bu we can add object
    radius:1

}
circle4.color="red"; //add new object
circle4.draw=function(){

}
delete circle4.radius; // to delete object
console.log(circle4);

//________________________________________________________________
//adding element to array
const numbers=[3,4];
console.log(numbers);

//adding to end of array 
numbers.push(5,6);
console.log(numbers)

//adding to first of array 
numbers.unshift(7,8);
console.log(numbers);

//adding to everywhere of array 
numbers.splice(2,0,"a"); //2=> index 0=>number of deleting character a=> what character insert into specific place
console.log(numbers);
//________________________________________________________________
//search specific element in array

//in array with premitive element
const numbers5=[1,2,3,1,4,5];
console.log(numbers5.indexOf(1)); //find index of first value that match if dosent exist give us -1
console.log(numbers5.lastIndexOf(1)); //find index of last value that match
if(numbers.includes(3)){ //check that one string include input or not
    console.log('yes');
}

console.log(numbers5.indexOf(1,1)) //search for value 1 from index of 1 to end 

//in array with refrence element
//for this elements equality calculate by address
const courses=[
    {id : 1 , name6:'a'},
    {id : 2 , name6:'b'}
];
const result=courses.find(function(course){
    return course.name6 ==="a" //give us first match ,if there is not find give us -1
})
//another syntax const result=courses.

const result2=courses.findIndex(function(course){
    return course.name6 ==="a" //give us index of first match ,if there is not find give us -1
})

//naother syntax
const result3=courses.find((course)=>{
    return course.name ==='a'
})

console.log(result);
//04:56:00
//________________________________________________________________
//delete element from array
const numbers7=[1,2,3,4];
last=numbers7.pop(); //value=last value that deleted
console.log(last); //print 4
console.log(numbers7);
//remove first element from first of array
const first = numbers7.shift();
console.log(first);
console.log(numbers7);
const result4=numbers7.splice(2,1); //2=value of which index 1=how many value will be delete?

//delete all of array elements
let numbers8 = [1,2,3,4,5,6,7];
//if variable defination was by const we cant delete all of element with this way
numbers8=[];
console.log(numbers8);
//when another variable point to number8 for deleting all array element of both :
let numbers10=[1,2,3,4,5]
let another =numbers10;
numbers10.length=0;
console.log(numbers10);
console.log(another);

//________________________________________________________________
//how to attach two array

const first2=[1,2,3];
const second2=[4,5,6];
const combined=first2.concat(second2);
console.log(combined);

//how to cut a partinion of string
const slice=combined.slice(2,4); //2=start index 4=end of index 
console.log(slice);


//________________________________________________________________
//concat with spread 
const combined2=[...first2,...second2];//output:123456
const combined3=['a',...first2,'c',...second2,'b'];
const slice3=combined3
console.log(slice3);
//________________________________________________________________
//iterate array
const numbers11=[1,2,3];
for(let number of numbers11)
{
    console.log(number);
}
//another way:
numbers11.forEach(number=>console.log(number));
//________________________________________________________________
//join array =convert array to string
const numbers12=[1,2,3];
const joined=numbers12.join('-'); //define specific seperator in input
console.log(joined);

//convert string to array
const message ='neon coding is cool';
const parts=message.split(' '); // define seperator that by this base split work
console.log(parts);

const combined4=parts.join(' '); //convert again to string
console.log(combined4);

//________________________________________________________________
//sorting array
const numbers14=[2,3,1];
numbers14.sort(); //sort array
console.log(numbers14);
const reverse=numbers14.reverse();
console.log(reverse); //reverse array

const number15=[  //sort when element of array is object
    {id : 1 , name15 : 'html'},
    {id : 2 , name15 : 'css'},
];

number15.sort(function(a,b){ 
    
    let nameA = a.name15.toLowerCase();
    let nameB = b.name15.toLowerCase(); // for better compration we should change all of letter to lower or upper
    if (nameA<nameB) return -1;
    if (nameB>nameA) return 1;
    return 0;

}); 
console.log(number15);
//________________________________________________________________
//05:30:00
//every & SUM
const numbers16=[-1,-2,-3];
const allpositive=numbers.every(function(value){
    return value>=0;
//for all element should be positive
//if one of them was negative final result is false
})
console.log(allpositive);

const atleastonepositive=numbers16.some(function(value){ // at least one of element is positive
    return value>=0;
})
console.log(atleastonepositive);
//________________________________________________________________
//filter array

const numbers17=[1,-1,2,3];
const filtered=numbers17.filter(value=>value>=0)
console.log(filtered);

const users10=[
    {name : 'ali' , age : 18},
    {name : 'ali' , age : 27},
    {name : 'ali' , age : 16},
    {name : 'ali' , age : 14},
    {name : 'ali' , age : 20}
]
const result6=users10.filter(function(user){
return users10.age>=18;
} )
console.log(result6); // retrive element that age >=18
//________________________________________________________________
//mapping array to new value

const numbers18=[1,3,5,7];
const result10=numbers18.map(function(value){
    return value*2;


})
console.log(result10);

//Another Sample

const products=['html','css','js'];

const items=products.map(function(product){
    return `<li>${product}</li>` //map ti li tag in html
});
console.log(items);

const html=items.join(''); //convert  to string
console.log(html);

const items2=products.map(function(product){
    const obj={value:product} //example output:value: "html"
    return obj;
});
console.log(items2);
//Another Sample

const numbers19=[1,-1,2,3];
const items3=numbers19.filter(v=>v>=0).map(n=>({value:n}));
console.log(items3);

//________________________________________________________________
//this
//point to location of current function
//this if in function--->global
//this if in method--->object that mothod exist on it

//global object in browser--->window
//global object in node--->global

const video = { 
    title : 'a',
    play(){
        console.log(this);
    },
    stop(){
        console.log(this); //this if in method--->object that mothod exist on it

   }

}


video.play();
video.stop();
//Another Sample:

function playVideo(){
    console.log(this);
}
playVideo();//this if in function--->global & global object in browser--->window

//________________________________________________________________

function Video(title){
    this.title = title; // fill empty object by title that we put on input
    console.log(this); 
}

const v = new Video('abc'); //create empty object

