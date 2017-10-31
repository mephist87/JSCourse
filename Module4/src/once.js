// Надо написать функцию once, которая не позволяет вызвать переданную внутрь функцию более 1 раза.

export function joinedArgs() {
  return [].join.call(arguments, ', ')
}

export function once(func) {
  let firstRun = true;
  return function() {
      if (firstRun) {
          firstRun = false;
          return func.apply(this, arguments);
      }
      return undefined;
  };
}
