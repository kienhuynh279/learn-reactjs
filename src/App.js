// import './App.css';
import { useEffect, useState } from "react";
import queryString from 'query-string'
import PostList from "./features/PostList";
import Pagination from './features/Pagination'

function App() {
  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 49
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  })

  useEffect(() => {
    async function fetchPostList () {
      try {
        const paramString = queryString.stringify(filters)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()

        const { data, pagination } = responseJSON
        setPostList(data)
        setPagination(pagination)
      }
      catch(error){
        console.log('Falied');
      }
    }

    fetchPostList()
  }, [filters])

  function handlePageChange(newPage) {
    console.log('New  Page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  return (
    <div className="App">
      <h1>
        React Hooks
      </h1>
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination>
      {/* <TodoFeature></TodoFeature> */}
      {/* <ColorBox></ColorBox> */}
    </div>
  );
}

export default App;
