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
    age: 1,
    name: '2',
    married: true,
} as const

type ObjectType = typeof myObject;
type ObjectKeysType = keyof ObjectType;
type ObjectValuesType = ObjectType[ObjectKeysType];