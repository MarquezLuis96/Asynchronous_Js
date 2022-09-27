function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Diego','Carlos','Luis','Rodrigo']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());