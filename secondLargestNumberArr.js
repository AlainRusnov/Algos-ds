// Complete the getSecondLargest. It has one parameter: an array, , of  numbers. The function must find and return the second largest number in .

function getSecondLargest(nums) {
  // Complete the function
  const biggest = Math.max(...nums)
  return Math.max(...nums.filter(i => i !== biggest))
}