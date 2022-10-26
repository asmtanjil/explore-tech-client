import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardTitle = () => {
  const [categories, setCategories] = useState([])

  //Data Load For Course Name in LeftSide Bar
  useEffect(() => {
    fetch('http://localhost:5000/course-title')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div>
      {
        categories.map(category => <p key={category.id}>
          <Link to={`/details/${category.id}`}>
            {category.name}
          </Link>
        </p>)
      }
    </div>
  );
};

export default CardTitle;