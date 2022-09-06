#!/usr/bin/node

const msgLen = process.argv.length;

if (msgLen < 3) {
  console.log('No argument');
} else if (msgLen === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
