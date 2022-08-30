import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CONTENT_PATH, ROOT_PATH } from "../../Utils/urls/clientUrls";
import AuthWrapper from "../AuthWrapper";
import ContentRouter from "./ContentRouter";


const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROOT_PATH} element={<AuthWrapper />} />
                <Route path={CONTENT_PATH} element={<ContentRouter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur;