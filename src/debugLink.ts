import { ApolloLink } from "@apollo/client";

const el = document.getElementById("debug");

const debugLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((result) => {
    const operationType = operation.query.definitions[0].operation;

    const log = document.createElement("div");
    log.innerText = ` - ${operationType} ${operation.operationName}`;
    el?.appendChild(log);
    return result;
  });
});

export default debugLink;
