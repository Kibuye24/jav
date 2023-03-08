import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, Home, About, Gallery, Join } from "./pages";
import { Blogs, BlogsShow, BlogsCreate } from "./pages/blogs/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function App() {
  const { _id } = useParams();

  const queryClient = new QueryClient();
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
      children: [
        {
          path: `/blogs/${_id}`,
          element: <BlogsShow />,
        },
        {
          path: "blogs/create",
          element: <BlogsCreate />,
        },
      ],
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/join",
      element: <Join />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
  );
}

export default App;
