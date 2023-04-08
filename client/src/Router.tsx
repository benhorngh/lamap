import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import StatsPage from "./pages/statsPage/StatsPage";
import Layout from "./common/Layout";
import AchievementsPage from "./pages/achievementsPage/AchievementsPage";

export enum AppRoutes {
  countriesList = "/",
  statistics = "stats",
  achievements = "achievements",
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListPage />} />
          <Route path={AppRoutes.countriesList} element={<ListPage />} />
          <Route path={AppRoutes.statistics} element={<StatsPage />} />
          <Route path={AppRoutes.achievements} element={<AchievementsPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
