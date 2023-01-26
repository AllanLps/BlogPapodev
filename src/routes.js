import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio/index";
import Menu from "./components/Menu";
import SobreMim from "./pages/SobreMim";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "../src/pages/Post";
import NaoEncontrado from "pages/NaoEcontrado";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<PaginaPadrao></PaginaPadrao>}>
          <Route index element={<Inicio></Inicio>} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
          <Route path="posts/:id" element={<Post></Post>}></Route>

        <Route path="*" element={<NaoEncontrado/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
