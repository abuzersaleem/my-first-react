import React from 'react';

const User = (props) => {

    // const Users = ["ahmad","Ali","Bilal"]
    const User2 = [
        {name: "ali", age: 18, city: "karachi"},
        {name: "Ahmad", age: 18, city: "Multan"},
        {name: "Ania", age: 15, city: "Lahore"}
    ]
  return (
    <div>
      <h3>
        This is a Array object
        {User2[2].city}

      </h3>

      <h4>

        {props.country}
        {props.region}
      </h4>
    </div>
  );
}

export default User;
