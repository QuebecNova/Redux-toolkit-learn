// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "./hooks/redux";
// import { fetchUsers } from "./store/reducers/ActionCreators";
// import { userSlice } from "./store/reducers/UserSlice";

import PostContainer from "./components/PostContainer";

function App() {

  // const {users, isLoading, error} = useAppSelector(state => state.user)
  // const {} = userSlice.actions
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch])

  return (
    <div className="App">
      {/* {isLoading && <h1>Загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer/>
    </div>
  );
}

export default App;
