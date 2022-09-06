#!/usr/bin/node

if (isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  for (let x = 0; x < process.argv[2]; x++) {
    console.log('X'.repeat(process.argv[2]));
  }
}
