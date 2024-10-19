import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProducts } from "@/services/fetchProducts";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";

export const useProducts = () => {
  const dispatch = useAppDispatch();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return { products, loading, error };
};
