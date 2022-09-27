import Link from "next/link";

function PostList({ post }) {
  return (
    <>
      <h1>List of Posts 1</h1>
      {post?.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id}
                {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // console.log(data.slice());
  return {
    props: {
      post: data,
    },
  };
}
``;
