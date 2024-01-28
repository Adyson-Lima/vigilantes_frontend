import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vigilantes from './pages/Vigilantes';
import NewUpdate from './pages/NewUpdate';

export default function VigilantesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vigilantes/>} />
        <Route path="/newupdate/:vigilante_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}