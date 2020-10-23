// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.
const load: unknown = () => {};

let hello: unknown = load();

const trimmed = (hello as string).trim();

let letter
letter = '1231';

const numbert = +letter as number;


type direction = 'Up' | 'Down' | 'Right' | 'Left';

const oneDirection: direction = "Right";
//const wrongDirection: direction = "Some";


type Square = {
    kind?: 'square',
    size: number
}

type Rectangle = {
    kind?: 'rectangle',
    width: number,
    height: number
}

type Shape = | Square | Rectangle;

function area(shape: Shape){
    if(shape.kind === 'square'){
        return shape.size ** 2;
    }
    else if(shape.kind === 'rectangle'){
        return shape.width * shape.height;
    }
    else return;
}

area({size: 2});
area({width: 5, height: 10})