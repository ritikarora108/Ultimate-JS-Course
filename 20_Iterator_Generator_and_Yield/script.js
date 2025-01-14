// Iterator
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
    const rangeIterator = {
        next() {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false }
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return result = { value: iterationCount, done: true };
        }
    }
    return rangeIterator;
}

const rangeIterator = makeRangeIterator(0, 10, 1);
let result = rangeIterator.next();
while (!result.done) {
    // console.log(result.value);
    result = rangeIterator.next();
}

// Yield keyword works with generator function : function*

// generator function
function* generateRangeIterator(start,end,step) {
    for (let i = start; i < end; i += step){
        yield i;  // 'yield' keyword
    }
}

const sequence = generateRangeIterator(12,34,3);
// for (const val of sequence) {
//     console.log(val);
// }

let res = sequence.next();
while (!res.done) {
    console.log(res.value);
    res = sequence.next();
}

