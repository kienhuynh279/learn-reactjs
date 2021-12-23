import React from "react";
import { useEffect, useState } from "react";
import queryString from "query-string";
import Pagination from "./Components/Pagination";
import Post from "./Components/PostItem";
import PostFillterForm from "./Components/PostFillterForm";

function PostListFeature(props) {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 49,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Falied");
      }
    }

    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log("New  Page: ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFillterChange(newFillter) {
    console.log("Fillter", newFillter);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFillter.searchTerm,
    });
  }
  return (
    <div>
      <PostFillterForm onSubmit={handleFillterChange}></PostFillterForm>
      <Post posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination>
    </div>
  );
}

export default PostListFeature;
