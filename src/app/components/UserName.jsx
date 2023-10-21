import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function UserName() {
  const user = useContext(UserContext)
  return <h1>Nome: {user.name}</h1>
};
