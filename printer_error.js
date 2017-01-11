/*
In a factory a printer prints labels for boxes. For one kind of boxes 
the printer has to use colors which, for the sake of simplicity, are 
named with letters from a to m.

The colors used by the printer are recorded in a control string. For 
example a "good" control string would be aaabbbbhaijjjm meaning that the 
printer used three times color a, four times color b, then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and 
a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output 
the error rate of the printer as a string representing a rational whose 
numerator is the number of errors and the denominator the length of the 
control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
*/


// my initial thoughts and attempt
function printerError(s) {
    // split string into array
    var s_array = s.split("");
    // regExp comparison
    var regex = /[a-m]+/g;
    // placeholder for error messages
    var error = 0;
    // iterate thru array to evalute regExp
    for (var i = 0; i < s_array.length; i++){
      if (s_array[i] != regex){
        error = s_array[i].length - 1;
      }
    }
    // join array back into one string
    s_array.join("");
    // return results as a string
    return error.toString() + "/" + s_array.length.toString();
}
