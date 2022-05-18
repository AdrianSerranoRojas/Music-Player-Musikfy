import "./NotFound.scss";

export const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info">
        <h2>We can't find that page</h2>
        <p>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
        <a href="http://localhost:3000/" target="_blank" rel="noreferrer noopener">
          Home
        </a>
      </div>
    </>
  );
};
