define(['./internal/baseSortedUniq'], function(baseSortedUniq) {

  /**
   * This method is like `_.uniq` except that it's designed and optimized
   * for sorted arrays.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.sortedUniq([1, 1, 2]);
   * // => [1, 2]
   */
  function sortedUniq(array) {
    return (array && array.length)
      ? baseSortedUniq(array)
      : [];
  }

  return sortedUniq;
});
