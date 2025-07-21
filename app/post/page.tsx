// import viewUserButton from "../components/viewUserButton";
"use client";

const Post = () => {
  const handleClick = () => alert('aku dipencet');
  return (
    <>
      <div className="bg-fuchsia-500"> ini post page</div>
      <button onClick={handleClick}>lihat user</button>
    </>
  );
};
export default Post;
