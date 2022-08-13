import Default_Template from "./pages/default_teamplate";
import NewDetail from "./pages/news/new_detail/new_detail";
import "./global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/not_found/not_found";
import { lazy, Suspense, useEffect, useState } from "react";
import Loading from "./pages/loading_page/Loading";
import { PATHS } from "./constants/path";
import {useDispatch} from "react-redux";
import { getCategories, getListNews } from "./redux/slices/newsSlice";

function App() {
  const [listNews, setListNews] = useState([]);
  const dispatch = useDispatch();

  const Home = lazy(() =>
    import("./pages/home/home").then((module) => ({
      default: module.Home,
    }))
  );
  const News = lazy(() =>
    import("./pages/news/news").then((module) => ({
      default: module.News,
    }))
  );
  useEffect(  () =>  { 
    const initData = async () =>{
      await dispatch(getCategories());
      await dispatch(getListNews(PATHS.TRANGCHU));
    }
    initData();
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="" element={<Default_Template />}>
            <Route path="/" element={<Home  />} />
            <Route path="news" element={<News />} />
            <Route path="detail/:id" element={<NewDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
