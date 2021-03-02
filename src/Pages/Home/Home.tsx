import useLocalStorage from "../../Hooks/useLocalStorage";

const Home = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleClick({ target }: any) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p style={{ margin: "1.5rem" }}> <strong>Escolha seu produto: {produto}</strong> </p> <br />
      <button onClick={handleClick} style={{ margin: "1.5rem" }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

export default Home;
