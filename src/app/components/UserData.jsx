import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function UserData() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Dados do usuário</h1>
      <h3>Nome: {user.name}</h3>
      <h3>Sobrenome: {user.lastName}</h3>
      <h3>Nome + Sobrenome: {`${user.name}  ${user.lastName}`}</h3>
    </div>
  );
}
