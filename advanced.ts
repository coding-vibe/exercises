// Task: create an object type similar to PropTypes.objectOf:
// - accepts only fixed list of keys
// - all values of object should implements one interface
type Type = {
    age: number;
    name: string;
    married: boolean;
}

type MyObject = {
    [Property in keyof Type]: Type[Property];
}

// Task - create a union type from object values:
const myObject = {
    number: 1,
    string: '2',
    boolean: true,
}

type ObjectValuesBased = keyof typeof myObject;