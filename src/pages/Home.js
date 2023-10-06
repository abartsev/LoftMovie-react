import { Example } from "src/components/Example";

export const Home = () => {
  return (
    <div className="wrapper">
      <h1>LoftMovie</h1>
      <h2>Настало время взять всё в свои руки!</h2>
      <Example data={1} />
    </div>
  );
};
