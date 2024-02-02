import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AutoLogout = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [counter, setCounter] = useState(60);
 // console.log(counter)

  const refreshToken = async () => {
    try {
      if (localStorage.getItem("refresh_token")) {
        const refreshToken = localStorage.getItem("refresh_token");
        const response = await axios.post(
          "https://api.escuelajs.co/api/v1/auth/refresh-token",
          { refreshToken }
        );

        if (response.status === 200 || response.status === 201) {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("refresh_token", response.data.refresh_token);
          setToken(response.data.refresh_token);
          setCounter(60); // Sayaçı sıfırla
          
        } else {
          console.error("Refresh token request failed");
        }
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  useEffect(() => {
    const checkTokenValidity = () => {
      if (token) {
        const decodedToken = jwtDecode(token);

        if (decodedToken && decodedToken.exp) {
          const expiryTimestamp = decodedToken.exp * 1000;
          const currentTime = Date.now();

          if (expiryTimestamp < currentTime || counter <= 0) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            navigate("/login");
            alert("Token expired or session timed out");
          } else if (expiryTimestamp - currentTime < 35997000) {
            refreshToken();
          }
        } else {
          console.error("Invalid token or expiry date not found");
        }
      } else {
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
          setToken(refreshToken);
        }
      }
    };

    const handleClick = () => {
      if (localStorage.getItem("refresh_token")) {
        setCounter(60); // Sayaçı sıfırla
        checkTokenValidity();
      }
    };

    const interval = setInterval(() => {
      setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    }, 1000);

    document.addEventListener("click", handleClick);

    // Component unmounted olduğunda interval'i temizle
    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleClick);
    };
  }, [navigate, token, counter]);

  return null;
};

export default AutoLogout;