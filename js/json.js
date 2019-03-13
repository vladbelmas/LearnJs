var numbers = '[0, 1, 2, 3]';
numbers = JSON.parse(numbers);
console.log(numbers);

var users = '{ "name": "Vlad", "age": 21, "isAdmin": false, "friends": ["Maks", "Alex", "Nikita"]}';
users = JSON.parse(users);
console.log(users);

var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';

//var event = JSON.parse(str);
//alert(event.date.getDate());  /// EROR!!!!!!!!!!!
var schedule = '{ \
    "events": [ \
      {"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}, \
      {"title":"День рождения","date":"2015-04-18T12:00:00.000Z"} \
    ]\
  }';


var event = JSON.parse(schedule, function(key, value){
    if(key == 'date'){
        return new Date(value);
    }
    else{
        return value;
    }
});

console.log(event.events[0].date.getDate());
console.log(event.events[1].date.getDate());

var event = {
    title: "Конференция",
    date: "сегодня"
  };

  var str = JSON.stringify(event);
  console.log(str);
  console.log(JSON.parse(str));

  var room = {
    number: 23,
    occupy: function() {
      alert( this.number );
    }
  };
  
  var event = {
    title: "Конференция",
    date: new Date(Date.UTC(2014, 0, 1)),
    room: room
  };

  console.log(JSON.stringify(event));
  console.log(JSON.stringify(event,['title', 'date']));

  var user = {
    name: "Вася",
    age: 25,
    window: window
  };

  var str = JSON.stringify(user, function(key,value){
    if(key == 'window') return undefined;
    return value;
  });
  console.log(str);

  var user = {
    name: "Вася",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };

  var str = JSON.stringify(user, '', 4);
  console.log(str);

  var leader = {
    name: "Василий Иванович",
    age: 35
  };

  var str = JSON.stringify(leader, '', 4);
  console.log(str);
  console.log(JSON.parse(str));