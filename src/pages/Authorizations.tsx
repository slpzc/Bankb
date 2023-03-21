import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import "../assets/styles/Authorizations.scss";

const Authorization = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const loadFunction = () => {
        setLoading(true);

        setTimeout(() => {
            navigate("/application/main");
        }, 2000);
    };

    return (
        <div className="authorize">
            <img src={Logo} alt="Logotype" />
            <h1>Чекунов Инвест</h1>
            <p>Войдите, чтобы стать нашим клиентом</p>
            <div className="authorize-buttons">
                <button onClick={loadFunction} className="authorize-buttons_apple">
                    {!loading ? (
                        "Продолжить как тестер"
                    ) : (
                        <div className="loader loader1">
                            <span></span>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Authorization;
