define(['./internal/arrayFilter', './internal/baseXor', './isArrayLikeObject', './last', './rest'], function(arrayFilter, baseXor, isArrayLikeObject, last, rest) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * This method is like `_.xor` except that it accepts `comparator` which is
   * invoked to compare elements of `arrays`. The comparator is invoked with
   * two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.xorWith(objects, others, _.isEqual);
   * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
   */
  var xorWith = rest(function(arrays) {
    var comparator = last(arrays);
    if (isArrayLikeObject(comparator)) {
      comparator = undefined;
    }
    return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
  });

  return xorWith;
});
