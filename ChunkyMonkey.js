function chunk(arr, size) {
  var chunky=[],i=0;
  while(i<arr.length)
  {chunky.push(arr.slice(i,i+=size));}
  return chunky;}
  chunk(['a', 'b', 'c', 'd'], 2);
