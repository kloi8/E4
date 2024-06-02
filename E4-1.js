function objProp(a) {
    for (let key in a) {
      if (a.hasOwnProperty(key)) {
        console.log(key, a[key])
      }
    }
  }
  
const obj = {
    a : 'one',
    b : 5,
    c : 31,
    d : 44
  };
  
  
  
  objProp(obj)