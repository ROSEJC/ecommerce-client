import FavoriteTitle from "./FavoriteColsTitle";
import FavoriteTableItem from "./FavoriteTableItem";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useState, useEffect } from "react";
import FavoriteEmpty from "./FavoriteEmpty";
import LoginWarning from "../Cart Cards/LoginWarning";

const FavoriteTable = () => {
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;
        const userId = decoded.userId;

        if (decoded.exp < now) {
          // Token expired
          localStorage.removeItem("token");
        } else {
          const getData = async () => {
            try {
              const response = await axios.get(
                `http://localhost:3000/favorite/${userId}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              setFavoriteProduct(response.data);
              console.log(response.data);
            } catch (err) {
              console.error("Error fetching favorites:", err);
            }
          };

          getData();
        }
      } catch (error) {
        console.error("Invalid token");
        localStorage.removeItem("token");
      }
    }
  }, [reload]);

  return (
    <>
      {favoriteProduct.length === 0 ? (
        <FavoriteEmpty />
      ) : (
        <div>
          <FavoriteTitle />
          {favoriteProduct.map((item, index) => (
            <FavoriteTableItem
              onDelete={() => {
                setReload((prev) => !prev);
                console.log("Check");
              }}
              key={index}
              productName={item.product.name}
              shape={item.shape}
              price={item.product.price}
              id={item.productId}
              brand={item.product.manufacturer}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default FavoriteTable;
