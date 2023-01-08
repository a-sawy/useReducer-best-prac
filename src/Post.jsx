import { useReducer } from "react";
import { INITIAL_STATE, postReducer } from "./postReducer";

const Post = () => {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [post, setPost] = useState({});

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    // setLoading(true);
    dispatch({ type: "FETCH_STATE" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });

        // setPost(data);
        // setLoading(false);
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILD" });
        // setError(true);
        // setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  );
};

export default Post;
