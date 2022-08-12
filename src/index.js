  /** 
 *  @param {Array<Array>} matrix
 * bracketsConfig = [['(', ')'], ['|', '|']] example
 */

module.exports = function towelSort (matrix) {
  if( matrix !== undefined && matrix.length !== 0){
    return matrix.map(arr => arr.sort((a, b) => a - b))
      .reduce((prev, curr, index) => index % 2 === 0 ? prev.concat(curr) : prev.concat(curr.reverse()));
  }
  else{
    return [];
  }
}
