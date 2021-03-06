define(['./arrayReduce', '../deburr', '../words'], function(arrayReduce, deburr, words) {

  /**
   * Creates a function like `_.camelCase`.
   *
   * @private
   * @param {Function} callback The function to combine each word.
   * @returns {Function} Returns the new compounder function.
   */
  function createCompounder(callback) {
    return function(string) {
      return arrayReduce(words(deburr(string)), callback, '');
    };
  }

  return createCompounder;
});
