
import { useEffect, useState } from 'react';
import './App.scss';
import queryString from 'query-string';
// import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: 'Le Viet' },
  //   { id: 2, title: 'Le Van Viet' },
  //   { id: 3, title: 'Van Viet' }
  // ]);

  // function handleTodoClick(todo) {
  //   console.log(todo);
  //   const index = todoList.findIndex(item => item.id === todo.id);
  //   // nếu ko tìm thấy sẽ trả về giá trị là -1 
  //   if (index < 0) return;

  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // function handleTodoFormSubmit(formValues) {
  //   console.log("Form submit: ", formValues);
  //   // add new todo current todo list
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   }
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  // npm i --save query-string. chuyển object thành 1 chuỗi
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    // _q: ...,
  });
  useEffect(() => {
    // đi lấy data thì cần phải có async function
    async function FetchPostList() {
      try {
        //_limit10&_page=1
        const paramsString = queryString.stringify(filters);// biến từ object sang chuỗi

        // const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=2';


        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);// sử dụng thư viện fetch
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;// object destructuring
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }
    console.log('Post list effect');

    FetchPostList();
  }, [filters]);

  // useEffect(() => {
  //   console.log('ToDo list effect');
  // })

  function hadlePageChange(newPage) {
    console.log('New Page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  function handleFiltersChange(newFilters) {
    console.log('New filter: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  // 
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      {/* <h1>React Hooks - TodoList</h1> */}
      <h1>React Hooks - PostList</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}


      {/* <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={hadlePageChange}
      /> */}


      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide clock</button>

    </div>
  );
}

export default App;
