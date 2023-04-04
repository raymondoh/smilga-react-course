import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { About, Home, Error, ProtectedRoute, SingleCocktail } from "./pages";
import RootLayout from "./layouts/RootLayout";

// outlet in the layout component
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="cocktail/:id" element={<SingleCocktail />} />
      <Route path="*" element={<Error />} />
      {/** closing route */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
