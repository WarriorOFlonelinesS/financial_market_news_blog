'use client'
import { useState, useEffect } from "react"
import { getArticles } from "../getArticles";
import { Cards } from "./Cards";

export const Main = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getArticles().then((data: any): void => setArticles(data))
    }, [])
    console.log()
    return (
        <div className="container container-content">
            <div className="row-wrapper">
                <div className="row">
                    {articles.map((item, index) => {
                        return (
                            <Cards key={index} item={item} id={index} articles={articles} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}