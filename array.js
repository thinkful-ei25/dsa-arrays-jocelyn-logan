'use strict';
const Memory = require('./memory');
const memory = new Memory();


class Array {
  constructor() {
    this.length = 0;
    this.capacity = 0;
    this.ptr = memory.allocate(this.length);
  }
  //push
  push(value) {
    if (this.length >= this.capacity) {
      //resize
      //console.log(Array.SIZE_RATIO);
      this.resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // console.log('length', this.length);
    // console.log('capacity', this.capacity);
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  //get
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('index out of bounds');
    }
    return memory.get(this.ptr + index);
  }
  //pop
  pop() {
    if (this.length === 0) {
      throw new Error('Cant pop, Empty array');
    }
    const popval = memory.get(this.ptr + this.length - 1);
    this.length--;
    return popval;
  }
  //insert
  insert(index, value) {
    if (this.length >= this.capacity) {
      this.resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  //remove
  remove(index) {
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

  resize(value) {
    const oldPointer = this.ptr;
    this.ptr = memory.allocate(value);
    memory.copy(this.ptr, oldPointer, this.length);
    memory.free(oldPointer);
    this.capacity = value;
  }
}

function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  // add an item to the array
  // What is the length, capacity and memory address of your array?
  // Array { length: 1, capacity: 3, ptr: 0 }
  arr.push(3);
  // console.log(arr);

  // Add the following in the main function before printing the array
  // What is the length, capacity and memory address of your array? 
  // Array { length: 6, capacity: 12, ptr: 3 }
  // Explain the result of your program after adding the new lines of code

  // array length is now 6 because we pushed 6 values into the array
  // array capacity is set to 12 because our initial capacity is 3 and we applied the formula (this.length + 1) * size_ratio
  // memory address is 3 because we set this.ptr = memory.allocate(value) in the resize;
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // console.log(arr);
  // What is the length, capacity and address of your array? 
  // Explain the result of your program after adding the new lines of code

  // Array { length: 3, capacity: 12, ptr: 3 }
  // length decreased in size because we removed values from the array with pop
  // capacity is the same as before as we did not change it when length decreases in the pop method
  // memory is the same as we didn't chance capacity
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // console.log(arr);

  // Print the first item in the array arr.
  // console.log(arr.get(0));

  // Empty the array and add just one item arr.push("tauhida");
  arr = new Array();
  arr.push('tauhida');
  // Print this one item that you just added. What is the result? Can you explain your result?
  console.log(arr.get(0));
  // Prints out NaN because in memory class the array is defined to only hold numbers

  //What is the purpose of the _resize() function in your Array class?
  //To change capacity, to free up old memory space and create new memory space for what we need
  // resize is with underscore because: its private therefore shouldnt be used in other classes (javascript doesnt have it, this is just convention)

  // // pop testing
  // arr.pop();
  // // insert testing
  // arr.insert(1, 500);
  // arr.remove(1);
  // // get testing
  // console.log('Get index[1] = ', arr.get(1));
  // console.log(arr);
}
main();

