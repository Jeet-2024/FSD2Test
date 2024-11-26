import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const SearchPage3 = () => {
    const [arr, setArr] = useState([]);
    const [text, setText] = useState("");

    const getProductData = () => {
        console.log("text", text);
        const pr = fetch(`https://dummyjson.com/products/search?q=${text}`);
        pr.then((res) => {
            res.json().then((data) => {
                setArr(data.products);
                console.log(data);
            });
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(getProductData, [text]);

    const search = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <Navbar />
            <div className="search-box">
                <input onChange={search} />
                <h1>{text}</h1>
            </div>
            <div>
                {arr.map((elem) => {
                    return (
                        <div>
                            <h4>{elem.title}</h4>
                            <p>{elem.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchPage3;
