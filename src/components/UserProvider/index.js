import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions as authActions } from "@/reducers/auth";

function UserProvider() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.getCurrentUser());
  }, [dispatch]);

  return null;
} 
export default UserProvider;
