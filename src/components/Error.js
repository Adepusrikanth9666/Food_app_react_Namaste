import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log(error);
  return (
    <div>
      <h1>Oppss!!!</h1>
      <h1>{error?.error?.message}</h1>
      <h2>{`Staus : ${error?.status}`}</h2>
      <h3>{`StausText : ${error?.statusText}`}</h3>
    </div>
  );
};

export default Error;
