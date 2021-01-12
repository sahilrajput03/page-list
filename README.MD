Description: This is a react component, using react-router-dom component under the hood.

#### Example usage of `PageList` component.

```js
export default function App() {
  // const [show, _] = useWhat("showHide", true);
  const list = [
    ["/posts", <PostsApp />],
    ["/post/:postId", <Post />],
    ["/time", <Time />],
    ["/testing", <Testing />],
    ["/createPost", <CreatePostApp />],
    ["/paginated", <PaginatedPosts />],
    ["/infinitequeries", <InfiniteQueriesApp />],
    ["/setquerydata", <SetQueryData />],
    ["/optimisticUpdate", <OptimisticUpdate />],
    ["/optimisticFails", <OptimisticFails />],
    ["/number-app", <RandomNumberApp />],
    ["/", "Home"],
  ];

  return <PageList list={list} />;
}
```

Example soon to come here.