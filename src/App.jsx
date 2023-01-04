import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import {useState} from "react";
import FooterTemplate from "./Templates/FooterTemplate";
import AuthPage from "./Pages/AuthPage";
import ErrorPage from "./Pages/ErrorPage";
import {Landing} from "./Components/Landing";
import {ProtectedRoute} from "./Components/ProtectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css';


const useMakeQuery = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);


    const fetchData = async () => {
        setIsLoading(true);

        try {
            setIsLoaded(true)
            const response = await fetch(url);
            await wait(1000)
            const data = await response.json();
            setData(data);

        } catch (error) {
            //Ignore
        }
        setIsLoading(false);
    };

    if (!isLoaded)
        fetchData();

    return [{data, isLoading, isLoaded}, setUrl];
}

function App() {
    const [{ isLoaded}, doFetch] = useMakeQuery(
        'https://jsonplaceholder.typicode.com/users', []);
    const [user, setUser] = useState(null);

    if (!isLoaded)
        doFetch('https://jsonplaceholder.typicode.com/users');

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
