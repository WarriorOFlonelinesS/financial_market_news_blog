// Страница с деталями
'use client'
import Image from "next/image"
import { Loading } from "../../../Loading"
import 'firebase/firestore'
import { useArticle } from "../../../customHooks/useArticle"
type Props = {
    params: {
        id: number
    }
}

export default function Article({ params: { id } }: Props) { 
    const article = useArticle(id)
    return (
        <div className="container">
            {useArticle(id).length > 0 ? (
                <div className="content">
                    <p className="content__title">{article[id].title}</p>
                    <Image className="content__img" src={article[id].imageUrl} width={420} height={220} alt="Card image cap" />
                    <p className="content__description">{article[id].description}</p>
                    <div className="content-comment">
                        <p className="comment__title">Expert comment</p>
                        <p className="comment__text">{article[id].expertComment}</p>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}