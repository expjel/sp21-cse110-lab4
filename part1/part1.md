##part 1a
1. values added: 20
2. It would throw a reference error since it is trying to access result outside of sumValues, which would be out of scope.
3. values added: 20
4. It would throw a reference error since it is trying to access result outside of the code block, which would be out of scope.
5. values added: 20
6. It would throw a reference error since it is trying to access result outside of the code block, which would be out of scope.
##part 1b
1. This line would print the length of the prices array which is 3
2. This line would print the discounted price of the last price in the price array, 300 * (1-0.5) = 150
3. This line would print the final price that was calculated in the for loop
4. It should return an array of the discounted prices which will be [50, 100, 150]
5. This would throw a reference error because the i is declared in the for loop using let which means it can only be accessed within the for loop block
6. This would throw a reference error because discountedPrice is declared in the for loop using let which means it can only be accessed within the for loop block.
7. This will print the final price of the last item in the price array which is 150
8. It should return an array of the discounted prices which will be [50, 100, 150]
9. This would cause a reference error because i is only declared within the for loop
10. This would print the length of the prices array which is 3
11. This would just return an empty array since discountedPrice was declared as const in the for loop and when it would try to update an error would be thrown, so discounted would remain unchanged from when it was first initialized 
12. A: student.name, B: student["Grad Year"], C: student.greeting(), D: student["Favorite Teacher"].name, E: student.courseLoad[1]
13. Arithmetic
    - A: 32. Since 3 was a string and the operation was + it made 2 a string and concatenated them
    - B: 1. Since the operation follow '3' is -, 3 was converted to a number and a subtraction was performed
    - C: 3. Since 3 is a number followed by a +, the null was converted to 0.
    - D: 3null. Since 3 is a string followed by a +, it converted null to a string and concatenated them.
    - E: 4. Since true was followed by a + and a number, true is converted to 1 and added to 3.
    - F: 0. Since both are not strings and there is a + between them, they are both converted to 0.
    - G: 3undefined. Since 3 is a string followed by a +, undefined is treated as a string and they are concatenated.
    - H: NaN. Since the string 3 is followed by a -, it is treated as a number and undefined is converted to "NaN".
14. Comparison
    - A: True. When compared against the number 1, the string 2 becomes a number
    - B: False. Comparing the '2' to the first character of '12' which is '1'
    - C: True. These are equal values and the "==" operator is being used
    - D: False. Since these are not of the same type and the "===" operator is being used
    - E: False. With the "==" operator, true is converted into the number 1 and that does not equal 2.
    - F: True. Both are of types Boolean and Boolean(2) is true.
15. == uses type conversion and compares values whereas === checks if both the type and value are equal.
16. (refer to seperate js file)
17. This should return the array [2,4,6]. For each iteration of the for loop, the current element in the array is passed to the callback function, in this case doSomething which multiplies a number by 2. When doSomething returns, that value is the one that is pushed to the new array in line 14. Once the for loop is over, newArr holds the values 2,4,6 and is returned.
18. (refer to seperate js file)
19. 1 4 3 2
