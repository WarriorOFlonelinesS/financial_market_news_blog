// Главная страница
'use client'
import { useState, useEffect } from "react"
import { db } from '../../../my-app/firebase'
import { useQuery } from 'react-query'
import 'firebase/firestore'
import { Cards } from "./Cards";
import { ArticlesService } from '../../../my-app/services/DatabaseServices'

export const Main = () => {
// Проверка на статус и входящие данные
    const { data, status } = useQuery("articles", ArticlesService.getAll);
// Получение данных 
    const [articles, setArticles] = useState([]);
// Отправка запроса 
    useEffect(() => {
        if (status === 'success') {
            const unsubscribe = db
                .collection("articles")
                .onSnapshot(snapshot => {
                    setArticles(snapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() })))
                });
            return () => unsubscribe()
        }
    }, [data])
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