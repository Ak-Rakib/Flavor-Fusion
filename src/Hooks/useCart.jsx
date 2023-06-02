import { useContext } from "react";
import { AuthContext } from "../Layout/ContextProvider/ContextProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/cart?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });

  return [cart, refetch];
};
export default useCart;
