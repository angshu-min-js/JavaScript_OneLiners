function steamroller(arr) {
  return arr.reduce(function (flat, Flatten) {
    return flat.concat(Array.isArray(Flatten) ? steamroller(Flatten) : Flatten);
  }, []);
}

steamroller([1, [2], [3, [[4]]]]);
