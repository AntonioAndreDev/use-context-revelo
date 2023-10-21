"use client";
import UserName from "./components/UserName";
import UserData from "./components/userData";

export default function Home() {
  return (
    <>
      <main>
        <h1>Olá, mundo!</h1>
        <p>Usando o Contexto no Nextjs 13.4</p>
        <UserName />
        <hr />
        <UserData />
      </main>
    </>
  );
}
