/*
table = [n00, n01, n10, n11]

n00 = table[0] = 76
n10 = table[1] = 4
n01 = table[2] = 9
n11 = table[3] = 1

n1• = n10 + n11 = table[2] + table[3] = 9  + 1 = 10
n0• = n00 + n01 = table[0] + table[1] = 76 + 4 = 80
n•1 = n01 + n11 = table[1] + table[3] = 4  + 1 = 5
n•0 = n00 + n10 = table[0] + table[2] = 76 + 9 = 85


phi = function(table) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt(n1• * n0• * n•1 * n•0)
}

*/

//JavaScript code
phi = function(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]))
}
/*
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
*/