import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function App() {
    const navigate = useNavigate();
    const [loged, setLoged] = useState(false);
    const f = (evt) => {
        if (loged) {
            navigate("/main", { replace: true });
        } else {
            evt.preventDefault();
        }
    }

    return (
        <>
            <h2 className='text-center my-5'>Auth app</h2>
            <h3 className='text-center mb-5'>{loged ? 'Вы авторизованы' : 'Вы не авторизованы'}</h3>
            <div className='container d-flex justify-content-center'>
                <button className='btn btn-warning mx-4' onClick={f}>Go to main</button>
                <button
                    className='btn btn-primary px-4 mx-2'
                    onClick={() => { setLoged(true) }}
                >
                    Log in
                </button>
                <button
                    className='btn btn-secondary px-4 mx-2'
                    onClick={() => { setLoged(false) }}
                >
                    Log out
                </button>
            </div>
        </>
    )
}

export default App
