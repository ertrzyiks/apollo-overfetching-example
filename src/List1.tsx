interface Data {
  articles: {
    id: number;
    title: string;
    tags: {
      name: string;
      color: string;
    }[];
  }[];
}

const List1 = ({ data }: { data: Data }) => {
  return (
    <div>
      <h2>List 1</h2>

      {data?.articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <ul>
            {article.tags.map((tag) => (
              <li key={tag.name}>
                {tag.name} ({tag.color})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default List1;
