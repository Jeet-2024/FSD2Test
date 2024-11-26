import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const SearchPage = () => {
    const [arr, setArr] = useState([]);
    const getData = () => {
        const pr = fetch("https://dummyjson.com/users");
        pr.then((res) => {
            res.json().then((data) => {
                setArr(data.users);
                console.log(data.users);
            });
        }).catch(console.log);
    };

    useEffect(getData, []);

    return (
        <div>
            <Navbar />
            <div className="search-container">
                <h2>{arr[0]?.firstName}</h2>
                <h2>{arr[1]?.firstName}</h2>
                <hr />
                {arr.map((elem) => {
                    return <h1>{elem.firstName}</h1>;
                })}
            </div>
            <Footer />
        </div>
    );
};

export default SearchPage;
