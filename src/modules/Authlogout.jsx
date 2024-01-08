import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AutoLogout = () => {
  //useNavigate hook'unu kullanarak navigasyon işlemleri için bir navigate fonksiyonu alıyoruz
  const navigate = useNavigate();

  // Son işlem zamanını saklamak için bir state tanımlıyoruz, başlangıçta mevcut zamanı kullanıyoruz
  const [lastActionTime, setLastActionTime] = useState();

  const refreshToken = async () => {
    try {
      const refreshResponse = await fetch(
        "https://api.escuelajs.co/api/v1/auth/refresh-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refreshToken: localStorage.getItem("refresh_token"),
          }),
        }
      );
      document.addEventListener("click", () => {
        setLastActionTime(Date.now());
      });
      if (refreshResponse.ok) {
        const refreshedTokens = await refreshResponse.json();
        // Yeni access_token ve refresh_token ile local storage'ı güncelle
        localStorage.setItem("access_token", refreshedTokens.access_token);
        localStorage.setItem("refresh_token", refreshedTokens.refresh_token);
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
              currentTime - lastActionTime > 60
            ) {
              alert("Token expired or session timed out");
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              navigate("/login"); // '/login' sayfasına yönlendirme yapılıyor
            } else if (expiryTimestamp - currentTime < 60) {
              refreshToken();
              console.log("Token refreshed");
            } else {
              console.log("noluyo");
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

/*     // Her 9 dakikada bir son işlem süresini güncellemek için bir interval oluşturuyoruz
    const intervalId = setInterval(() => {
      setLastActionTime(Date.now());
    }, 60000); // 540000 ms = 9 dakika
    console.log("kontrol edildi");

    // Tıklamaları dinlemek için event listener ekle
    // Komponent unmount olduğunda interval'i temizlsiyoruz
    return () => clearInterval(intervalId); */
  }, [lastActionTime, navigate]); // useEffect bağımlılıkları: navigate ve lastActionTime
};

export default AutoLogout;
