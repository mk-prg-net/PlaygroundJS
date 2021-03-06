define(['./nativeCreate'], function(nativeCreate) {

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Creates an hash object.
   *
   * @private
   * @returns {Object} Returns the new hash object.
   */
  function Hash() {}

  // Avoid inheriting from `Object.prototype` when possible.
  Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

  return Hash;
});
