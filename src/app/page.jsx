import UserContext from "./contexts/UserContext";

export default function Home() {
  const user = {
    name: "Antônio",
    lastName: "André",
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <main>
          <h1>Olá, mundo!</h1>
          <p>Usando o Contexto no Nextjs 13.4</p>
        </main>
      </UserContext.Provider>
      <section>{/* ESSA SEÇÃO NÃO TERIA ACESSO AO CONTEXTO! */}</section>
    </>
  );
}
