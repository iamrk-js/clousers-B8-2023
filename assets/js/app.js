let cl = console.log;


// lexical scope

// scope of the parent (parent function)
// lexical scope means the socpe of parent 
// the inner function can access the properties/declrations of the parent function
// because of Lexical Scope

function printName(){
    return 'Bond James Bond'
}

// let demo = printName();
// cl(demo) // 'Bond James Bond'


function outerFunction(){
    let x = 100;
    return function innerFunction(){
        return x;
    }
}

let f1 = outerFunction();

cl(f1)

cl(f1())