import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, Home, About, Gallery, Join, Faq, Contact } from "./pages";
import { Blogs, BlogsCreate, ShowBlog } from "./pages/blogs/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function App() {
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
    },

    {
      path: `/blogs/:id`,
      element: <ShowBlog />,
    },
    {
      path: "blogs/create",
      element: <BlogsCreate />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/join",
      element: <Join />,
    },
    {
      path: "/faqs",
      element: <Faq />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
  );
}

export default App;
