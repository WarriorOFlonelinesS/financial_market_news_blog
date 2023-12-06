'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import { getArticles } from "../../../getArticles"

type Props = {
    params: {
        id: number
    }
}


export default function Article({ params: { id } }: Props) {
    const [articles, setArticles] = useState([])
    useEffect(() => { getArticles().then(data => setArticles(data)) }, [])
    return (
        <>
            <div className="container">
                {articles.length &&
                    <div className="content">
                        <p className="content__title">
                            {articles[id].title}
                        </p>
                        <Image className="content__img" src={articles[id].imageUrl} width={420} height={220} alt="Card image cap" />
                        <p className="content__description">
                            {articles[id].description}
                        </p>
                        <div className="content-comment">
                            <p className="comment__title">
                                Expert comment
                            </p>
                            <p className="comment__text">
                                {articles[id].expertComment}
                            </p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}