// Страница с деталями

'use client'
import Image from "next/image"
import { Loading } from "../../../Loading"
import { db } from '../../../../firebase'
import { useQuery } from 'react-query'
import 'firebase/firestore'
import { useEffect, useState } from "react"
import { ArticlesService } from '../../../../services/DatabaseServices'
// Указание типа входящего индекса
type Props = {
    params: {
        id: number
    }
}

export default function Article({ params: { id } }: Props) {
// Проверка на статус и входящие данные
    const { data, status } = useQuery("articles", ArticlesService.getAll);
// Получение данных 
    const [articles, setArticles] = useState([])
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
// Проверка на ошибки и последующий рендеринг с использованием индекса 
    return (
        <div className="container">
            {status === 'error' && <p>Error loading articles</p>}
            {status === 'success' && articles.length > 0 ? (
                <div className="content">
                    <p className="content__title">{articles[id].title}</p>
                    <Image className="content__img" src={articles[id].imageUrl} width={420} height={220} alt="Card image cap" />
                    <p className="content__description">{articles[id].description}</p>
                    <div className="content-comment">
                        <p className="comment__title">Expert comment</p>
                        <p className="comment__text">{articles[id].expertComment}</p>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}