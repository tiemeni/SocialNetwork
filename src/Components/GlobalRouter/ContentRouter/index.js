import { Route, Routes } from "react-router-dom";
import { ROOT_PATH } from "../../../Utils/urls/clientUrls";
import FackContainer from "../../Container";

const ContentRouter = () => {
    return (
        <Routes>
            <Route path={ROOT_PATH} element={<FackContainer />} />
        </Routes>
    )
}

export default ContentRouter;