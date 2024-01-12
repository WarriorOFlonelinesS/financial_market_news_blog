// Главная страница
'use client'
import 'firebase/firestore'
import { Cards } from "./Cards";
import { useArticles } from "../customHooks/useArticles";

export const Main = () => {
    return (
        <div className="container container-content">
            <div className="row-wrapper">
                <div className="row">
                    {useArticles()
                        .map((item, index) => {
                            return (
                                <Cards key={index} item={item} id={index} />
                            )
                        })}
                </div>
            </div>
        </div>
    )
}