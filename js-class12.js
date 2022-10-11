let individual = prompt('who is there?');

    if (individual !== ""){
        alert(`Welcome ${individual}`);
    }
    else if(individual === ''){
        alert('No one is at the door GO HOME!!!!!!!!!');
    };

    // function sayHello(){
    //     let user = prompt('Who is there?')
    //     if (user !== ''){
    //         alert(`Welcome ${user}`);
    //     }
    //     else if( user === ''){
    //         alert('No one is at the door')
    //     }
    // };
    

    // // function to solve a simple math OP 
    // function mathOP(a, b){
    //     return 2 * a + Math.pow(b, 2);
    // };
    
    // let answer = mathOP(3,5);
    // console.log(answer);

    // Arrow Functions
    // function greet(name){
    //     return `good morning ${name}`;
    // }


    greet = (name) => `good morning ${name}`;

    // OBJRCTS

    let user = {
        firstname: 'Samuel',
        lastname: 'Oketola',
        username: 'dprince123',
        hobbies: ['swimming', 'movies', 'coding', 'gaming'],
        aboutMe: function (){
            console.log('I love playing videogames, coding and meeting new people.');
        }
    }

    let user3 = {
            firstname: 'lancer',
            lastname: 'nabasf',
            username: 'gentlemizt',
            hobbies: ['reading', 'coding', 'gaming', 'eating'],
            aboutMe: () => {
                console.log('Hello there, I no love JS ooo')
            }
    }

    let user4 = {
        firstname: 'Olamide',
        lastname: 'Iyanda',
        age: 19,
        email: 'olamideiyanda18@gmail.com',
        fullname: function(){
          return `${this.firstname} ${this.lastname}` 
        },
        about(){
            return `I am ${this.age} years old. My email is ${user4['email']}`;
        }
    }
    // creating multiple user objectss in an array
    let users = [
        user,
        {
            firstname: 'seun',
            lastname: 'unknown',
            username: 'seunjs',
            hobbies: ['reading', 'coding'],
            fullname: function(){
                return `${this.firstname} ${this.lastname}` 
              },
            aboutMe(){
                console.log('Hello there, I love JS')
            }
        },
        user3,
    ];
    
    // to access a property in an object, the syntax used is usually the
    // object.property syntax
    console.log(user4.fullname());
    console.log(users[1].aboutMe());

    // For In Loop 
    // for (let prop in user4){
    //     console.log(user4);
    // }
    // to access just the key part in the object
    // for (let prop in user4){
    //     console.log(prop);
    // }
    // to access just the value part in the object
    // Note that for the value themselves to be shown, you have to make use of the [] system of calling individual properties
    // of an object.
    // for (let prop in user4){
    //     console.log(user4[prop]);
    // }
    // If we want to access both the key and the value, we concatenate, to do that
    for (let prop in user4){
        console.log(`${prop}: ${user4[prop]}`);
    }
    // To get the object length or rather the number of object's keys we have in the object, we make use of 
    // object.keys(object_name).length
    // console.log( Object.keys(user).length );

    // ALTERNATIVELY, we can make use of just the 'for loops' to iterate through an object
    // to do that instead of us manually specifying the limit of the looping, we can specify it to get the amount of items 
    // in the object then take it as it's limit. 
    // Which was why we made ourselves known to how we can get the length of object's keys.

    // for (let i = 0; i < Object.keys(user4).length; i++){
    //     // doing this now, the code is going to run 6 times 
        
    // }

    //But the general way of iterating or looping through objects, we make use of the 'For In Loop'
    