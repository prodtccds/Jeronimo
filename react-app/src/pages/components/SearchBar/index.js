import React from "react";
import './style.css';
import JSONDATA from "./datas/DATAJSON.json";
import { useState } from "react";

export default function SearchBar() {
        const [searchTerm, setSearchTerm] = useState("");

        return (
                <div className="container">
                        <form>
                                <input type="search"
                                        placeholder="procure por um artigo..."
                                        onChange={(e) => {
                                                setSearchTerm(e.target.value);
                                        }} />
                        </form>
                        {JSONDATA.filter((val) => {
                                if (searchTerm == "") {
                                        return val
                                } else if (val.message.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                        return val
                                }
                        }).map((val, key) => {
                                return (
                                        <div className="search__results" key={key}>
                                                <ul>
                                                        <li><a href={val.url}>{val.message}</a></li>
                                                </ul>
                                        </div>)
                        })}
                </div>
        )
}
