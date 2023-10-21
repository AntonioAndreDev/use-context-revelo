"use client";
import UserContext from "../contexts/UserContext";

export default function UserProvider({ children }) {
  const user = {
    name: "Antônio",
    lastName: "André",
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
