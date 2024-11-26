import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

const SearchPage2 = () => {
    console.log("Start");
    // let text = "ABES";
    const [text, setText] = useState("ABES");
    const [cnt, setCnt] = useState(0);
    // let cnt = 0;
    const handle = (e) => {
        // text = e.target.value;
        // cnt++;
        setText(e.target.value);
        // console.log(cnt);
        // console.log(text);
    };

    const increment = () => {
        setCnt(cnt + 1);
    };

    return (
        <div>
            <Navbar />
            <div className="search-container">
                {/* onkeydown="handle(event)" */}
                <input type="text" onChange={handle} />
                <button>Search</button>
                <hr />
                <h1>{text}</h1>
                <button onClick={increment}>Click ME</button>
                <h1>{cnt}</h1>
            </div>
            <Footer />
        </div>
    );
};

// // const student = {
// //   name: 'Ajay',
// //   city: "Jaipur"
// // }
// // console.log(student.name)

// // // destructuring
// // key / name matters, postion does not matter
// // const {name, age} = student;
// // console.log(name, age);

// const arr = ['Ajay', "Jaipur", "Hello", 'world', 'hi'];

// // key / name does not matter, postion matters
// const [a,b,c,d] = arr;

// console.log(c, d)

export default SearchPage2;
