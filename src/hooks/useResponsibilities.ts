import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchResponsibilities } from "@/services/fetchResponsibilities";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
export const useResponsibilities = () => {
  const dispatch = useAppDispatch();

  const { responsibilities, loading, error } = useSelector(
    (state: RootState) => state.responsibilities
  );

  useEffect(() => {
    dispatch(fetchResponsibilities());
  }, [dispatch]);

  return { responsibilities, loading, error };
};
