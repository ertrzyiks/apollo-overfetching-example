import "./styles.css";

import { ApolloProvider, gql, useQuery } from "@apollo/client";

import client from "./client";
import List1 from "./List1";
import List2 from "./List2";
import { useEffect } from "react";

const query1 = gql`
  query DataForList1 {
    articles {
      id
      title
      tags {
        name
        color
      }
    }
  }
`;

const query2 = gql`
  query DataForList2 {
    articles {
      id
      title
      tags {
        name
        articlesCount
      }
    }
  }
`;

function Content() {
  const { data: data1 } = useQuery(query1);
  const { data: data2 } = useQuery(query2);

  return (
    <div className="App">
      <div className="AppColumn">
        <List1 data={data1} />
      </div>
      <div className="AppColumn">
        <List2 data={data2} />
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const el = document.getElementById("debug");
    if (el) {
      el.innerHTML = "List of performed queries:";
    }

    return () => {
      if (el) {
        el.innerHTML = "List of performed queries:";
      }
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <Content />
    </ApolloProvider>
  );
}
