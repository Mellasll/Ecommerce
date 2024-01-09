import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AutoLogout = () => {
  //useNavigate hook'unu kullanarak navigasyon işlemleri için bir navigate fonksiyonu alıyoruz
  const navigate = useNavigate();

  // Son işlem zamanını saklamak için bir state tanımlıyoruz, başlangıçta mevcut zamanı kullanıyoruz
  const [lastActionTime, setLastActionTime] = useState();

  // Refresh tokenı yenileme ve yerine yazdırmak için 
  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh_token");
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/refresh-token",
        { refreshToken }
      );

      document.addEventListener("click", () => {
        setLastActionTime(Date.now());
        console.log('zaman',Date.now());

      });
      if (response.status === 200 || response.status === 201) {
        // Yeni access_token ve refresh_token ile local storage'ı güncelle
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
      } else {
        console.error("Refresh token request failed");
      }
    } catch (error) {
      console.error("Error while refreshing token:", error);
    }
  };


  const checkTokenValidity = () => {
      // Local storage'dan refresh token'ı alıyoruz
      const token = localStorage.getItem("refresh_token");
      if (token) {
        try {
          // JWT'yi decode ederek token'ın süresini kontrol ediyoruz
          const decodedToken = jwtDecode(token);
          if (decodedToken && decodedToken.exp) {
            const expiryTimestamp = decodedToken.exp;
            const currentTime = Math.floor(Date.now() / 1000);

            // Token süresi dolmuşsa veya son işlem süresi 10 dakikadan fazla geçmişse çıkış yapıyoruz
            if (
              expiryTimestamp < currentTime ||
              currentTime - lastActionTime > 600
            ) {
              alert("Token expired or session timed out");
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              navigate("/login"); // '/login' sayfasına yönlendirme yapılıyor
            } else if (expiryTimestamp - currentTime < 35400) {
              refreshToken();
              console.log("Token refreshed");
            }
          } else {
            console.error("Invalid token or expiry date not found");
          }
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    };

  useEffect(() => {
    // İlk render olduğunda token geçerliliğini kontrol ediyoruz
    checkTokenValidity();
  // Her 9 dakikada bir son işlem süresini güncellemek için bir interval oluşturuyoruz
    const intervalId = setInterval(() => {
      setLastActionTime(Date.now());
    }, 54000); // 540000 ms = 9 dakika
    console.log("kontrol edildi");

    // Tıklamaları dinlemek için event listener ekle
    // Komponent unmount olduğunda interval'i temizliyoruz
    return () => clearInterval(intervalId); 
  }, [lastActionTime]); // useEffect bağımlılıkları: navigate ve lastActionTime
};

export default AutoLogout;
