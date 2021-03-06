define(['./internal/baseDifference', './internal/baseFlatten', './isArrayLikeObject', './last', './rest'], function(baseDifference, baseFlatten, isArrayLikeObject, last, rest) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * This method is like `_.difference` except that it accepts `comparator`
   * which is invoked to compare elements of `array` to `values`. The comparator
   * is invoked with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   *
   * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
   * // => [{ 'x': 2, 'y': 1 }]
   */
  var differenceWith = rest(function(array, values) {
    var comparator = last(values);
    if (isArrayLikeObject(comparator)) {
      comparator = undefined;
    }
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, false, true), undefined, comparator)
      : [];
  });

  return differenceWith;
});
