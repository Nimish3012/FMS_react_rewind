
// document.getElementById("h1").innerHTML = "hello js";

// const parent = React.createElement('div' , {id: 'parent'}, [
//     React.createElement('div',{id: 'chidl'}, [
//         React.cloneElement('h1' , {} , "i am h1 under child")
//     ]),
// ]);


const parent = React.createElement
    ('div', { id: 'main' }, "i am main ",
        [
            React.createElement('div', { id: 'parent' },
                [
                    React.createElement('h1', {}, "I am h1 from parent "),
                    React.createElement('h2', {}, "I am h2 from parent"),
                ]),
            React.createElement('div', { id: 'child' },
                [
                    React.createElement('h1', {}, "I am h1 from child "),
                    React.createElement('h2', {}, "I am h2 from child"),
                ]),
        ]
    );

const p2 = React.createElement('h1', {}, "I am p2 being rendered");
// const parent = React.createElement('div', { id: 'parent' }, [
//   React.createElement('div', { id: 'child' }, [
//     React.createElement('h1', {}, "I'm h1 Tag"),
//     React.createElement('h2', {}, "I'm h2 Tag"),
//   ]),
//   React.createElement('div', { id: 'child2' }, [
//     React.createElement('h1', {}, "I'm h1 Tag"),
//     React.createElement('h2', {}, "I'm h2 Tag"),
//   ]),
// ]);


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);


// we have not installed anything yet
// using react from cdn and no bundler like parcel
// no such npm / npx yet
//just simple  js and html