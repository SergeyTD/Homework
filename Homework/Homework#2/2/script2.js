var pluck = function(arr,key){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
      if (arr[i].hasOwnProperty(key)){
        newArr.push(arr[i][key])
      }
    }
    return newArr;
  }

  var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
   ];
   
   console.log(pluck(characters, 'name'));

  