// Главная страница
'use client'
import { useState, useEffect } from "react"
import { db } from '../../../my-app/firebase'
import 'firebase/firestore'
import { Cards } from "./Cards";

export const Main = () => {
// Проверка на статус и входящие данные
// Получение данных 
    const [articles, setArticles] = useState([]);
    console.log(articles)
// Отправка запроса 
    useEffect(() => {
            const unsubscribe = db
                .collection("articles")
                .onSnapshot(snapshot => {
                    setArticles(snapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() })))
                });
            return () => unsubscribe()
    }, [])
// Проверка на ошибки и последующий рендеринг
    return (
        <div className="container container-content">
            <div className="row-wrapper">
                <div className="row">
                    {articles.map((item, index) => {
                        return (
                            <Cards key={index} item={item} id={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}