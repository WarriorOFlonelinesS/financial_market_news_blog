import { useEffect, useState } from "react";
import { db} from "../../firebase";

interface ArticleWithDocId {
  docId: string,
  imageUrl: string;
  title: string;
}

// Хук для получения статей 
export const useArticles = (): ArticleWithDocId[] => {
  const [articles, setArticles] = useState<ArticleWithDocId[]>([]);

  useEffect(() => {
    const unsubscribe = db.collection("articles").onSnapshot((snapshot) => {
      setArticles(
        snapshot.docs.map((doc) => ({ docId: doc.id, ...doc.data() } as ArticleWithDocId)),
      );
    });

    return () => unsubscribe();
  }, []);

  return articles;
};
