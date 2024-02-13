const Content = () => {
  const divCount = 6;

  const divs = Array.from({ length: divCount }, (_, index) => (
    <div key={index} className="child-div">
      <img
        src={`https://source.unsplash.com/300x300/?burger,fastfood,hamburger&sig=${index}`}
        alt={`Burger ${index + 1}`}
      />
      <p>Hamburger maison</p>
    </div>
  ));

  return (
    <div className="content-container">
      <h1 className="content-title">Nos burgers</h1>
      <div className="content-burger">{divs}</div>;
    </div>
  );
};

export default Content;
