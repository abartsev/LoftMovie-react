import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Router from "./Router";
import "./styles.css";

export default function App() {
  const routes = [{ path: "/", component: <Home /> }];
  const defaultComponent = <NotFound />;

  return (
    <>
      <Router routes={routes} defaultComponent={defaultComponent} />
    </>
  );
}
