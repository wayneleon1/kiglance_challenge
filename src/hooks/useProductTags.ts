import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProductTags } from "@/services/fetchProductTags";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";

export const useProductTags = () => {
  const dispatch = useAppDispatch();

  const { tags, loading, error } = useSelector(
    (state: RootState) => state.productTags
  );

  useEffect(() => {
    dispatch(fetchProductTags());
  }, [dispatch]);

  return { tags, loading, error };
};
