const buildPyramid = (input) => {
     // Write my code here
     var size = input;
     var row = '';
     for (var i=1; i<=size; i++){
          for(var k=1; (k<=size-i); k++){
              row += ' ';
          }
          for(var j=1; j<=i; j++ ){
              row += ' *';
          }
          row += "  \n";
      }
      //console.log(row);
           return row;
  };
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * **
*/
module.exports = buildPyramid;
