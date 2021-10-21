import type { NextPage } from "next";
import { Showmate } from "./api/showmate";

const Home: NextPage = () => {
  return Showmate();
};

export default Home;
