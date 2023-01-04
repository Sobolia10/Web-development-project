import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import {useState} from "react";
import FooterTemplate from "./Templates/FooterTemplate";
import AuthPage from "./Pages/AuthPage";
import ErrorPage from "./Pages/ErrorPage";
import {Landing} from "./Components/Landing";
import {ProtectedRoute} from "./Components/ProtectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path={'auth'} element={<AuthPage setUser={setUser}/>}/>
                <Route path={'/'} element={<ProtectedRoute user={user}/>}>

                    <Route path={'/'} element={<Landing/>}/>

                    <Route path={'/home'} element={<Landing/>}/>
                    <Route path={'/about'} element={<Landing/>}/>
                    <Route path={'/servicing'} element={<Landing/>}/>
                    <Route path={'/pricing'} element={<Landing/>}/>
                    <Route path={'/team'} element={<Landing/>}/>
                    <Route path={'/blog'} element={<Landing/>}/>
                    <Route path={'/contactUs'} element={<Landing/>}/>
                </Route>
                <Route path="*" element={<ErrorPage/>}/>

            </Routes>
            <FooterTemplate/>
        </BrowserRouter>
    )
}


export default App;
