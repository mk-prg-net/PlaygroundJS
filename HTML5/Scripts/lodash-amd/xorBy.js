define(['./internal/arrayFilter', './internal/baseIteratee', './internal/baseXor', './isArrayLikeObject', './last', './rest'], function(arrayFilter, baseIteratee, baseXor, isArrayLikeObject, last, rest) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * This method is like `_.xor` except that it accepts `iteratee` which is
   * invoked for each element of each `arrays` to generate the criterion by which
   * uniqueness is computed. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of values.
   * @example
   *
   * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
   * // => [1.2, 4.3]
   *
   * // using the `_.property` iteratee shorthand
   * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 2 }]
   */
  var xorBy = rest(function(arrays) {
    var iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
      iteratee = undefined;
    }
    return baseXor(arrayFilter(arrays, isArrayLikeObject), baseIteratee(iteratee));
  });

  return xorBy;
});
