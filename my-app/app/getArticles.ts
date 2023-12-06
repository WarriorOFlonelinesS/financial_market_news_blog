export const getArticles = async () => {
  const url = "http://localhost:3001/posts";
  const response = await fetch(url);

  const articles = await response.json();

  return articles;
};
