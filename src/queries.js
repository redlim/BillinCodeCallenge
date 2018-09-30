export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const GET_ARTICLE_BY_ID = id => `{
  articles(id:"${id}") {
    author
    excerpt
    id
    title
  }
}`;
