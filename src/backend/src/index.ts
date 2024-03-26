import { Canister, query, text } from "azle";

export default Canister({
  greet: query([text], text, (name) => {
    return `Hello, ${name}!`;
  }),
  greet2: query([text], text, (name) => {
    return `Hello2, ${name}!`;
  }),
});
