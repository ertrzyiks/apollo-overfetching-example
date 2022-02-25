interface Data {
  articles: {
    id: number;
    title: string;
    tags: {
      name: string;
      articlesCount: number;
    }[];
  }[];
}

const List2 = ({ data }: { data: Data }) => {
  return (
    <div>
      <h2>List 2</h2>

      {data?.articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <ul>
            {article.tags.map((tag) => (
              <li key={tag.name}>
                {tag.name} ({tag.articlesCount})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default List2;
