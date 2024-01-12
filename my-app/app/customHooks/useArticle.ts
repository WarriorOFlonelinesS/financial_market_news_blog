import { useEffect, useState } from "react";
import { db } from "../../firebase";

// Описание типа документа 
interface ArticleWithDocId {
    docId: string;
    title: string;
    imageUrl: string;
    description: string;
    expertComment: string;
}

// Хук для получения определенное статьи
export const useArticle = (id: number): ArticleWithDocId[] => {
    const [article, setArticle] = useState<ArticleWithDocId[]>([]);

// Отправка запроса 
    useEffect(() => {
        const unsubscribe = db
            .collection("articles")
            .onSnapshot(snapshot => {
                setArticle(snapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() } as ArticleWithDocId)));
            });
        return () => unsubscribe();
    }, []);

    return article;
};