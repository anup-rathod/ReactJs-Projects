import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import {useEffect, useContext} from "react";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
 
  useEffect(() => {
    fetchBlogPosts();
  }, [])

  return (
    <>
      <Header/>
      <Blogs/>
      <Pagination/>
    </>

    );
}
