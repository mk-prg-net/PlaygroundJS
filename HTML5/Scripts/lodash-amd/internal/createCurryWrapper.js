define(['./apply', './createCtorWrapper', './createHybridWrapper', './createRecurryWrapper', './replaceHolders', './root'], function(apply, createCtorWrapper, createHybridWrapper, createRecurryWrapper, replaceHolders, root) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Creates a function that wraps `func` to enable currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper` for more details.
   * @param {number} arity The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createCurryWrapper(func, bitmask, arity) {
    var Ctor = createCtorWrapper(func);

    function wrapper() {
      var length = arguments.length,
          index = length,
          args = Array(length),
          fn = (this && this !== root && this instanceof wrapper) ? Ctor : func,
          placeholder = wrapper.placeholder;

      while (index--) {
        args[index] = arguments[index];
      }
      var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
        ? []
        : replaceHolders(args, placeholder);

      length -= holders.length;
      return length < arity
        ? createRecurryWrapper(func, bitmask, createHybridWrapper, placeholder, undefined, args, holders, undefined, undefined, arity - length)
        : apply(fn, this, args);
    }
    return wrapper;
  }

  return createCurryWrapper;
});
