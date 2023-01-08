import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimbap",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EEtt5M1WubdjotRK8Z_2X9z42hg_wBDEfA&usqp=CAU",
    rating: 5,
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhS04BEyqlhLqcTlxEBiqzgXi7m1rUhA8sw&usqp=CAU",
    rating: 4,
  },
  {
    id: 3,
    name: "mandu",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxKaEn5ztknmL9UtGfXh8YZ4kz2ii4Urv5RiA2Uk1kBxRP14r6zcSVxc9-iyxJMP1iXk&usqp=CAU",
    rating: 4.3,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt="food" />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
  // == return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
