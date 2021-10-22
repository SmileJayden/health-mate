import type { NextPage } from "next";
import { Profile } from "../api/profiles";

const Search: NextPage = () => {
  let src = Profile("userid007");

  return src;
};

export default Search;
