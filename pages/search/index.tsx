import type { NextPage } from "next";
import { Introduction } from "../api/introduction";

const Search: NextPage = () => {
  let src = Introduction("userid007");

  return src;
};

export default Search;
