import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Ipost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = async () => {
  const response = await fetch(base_url);
  const posts: Ipost[] = await response.json();
  

  return (
    <>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId}/>
          </CardList>
        );
      })}
      <p>{posts[0].title}</p>
      <div className="bg-fuchsia-500"> ini post page</div>
    </>
  );
};
export default Post;
