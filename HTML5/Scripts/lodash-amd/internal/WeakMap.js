define(['./getNative', './root'], function(getNative, root) {

  /* Built-in method references that are verified to be native. */
  var WeakMap = getNative(root, 'WeakMap');

  return WeakMap;
});
