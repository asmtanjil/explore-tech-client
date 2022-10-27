import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardTitle = () => {
  const [categories, setCategories] = useState([])

  //Data Loaded For Course Name in LeftSide Bar
  useEffect(() => {
    fetch('https://explore-tech-server.vercel.app/course-title')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div>
      {
        categories.map(category => <p key={category.id}>
          <Link style={{ textDecoration: 'none' }} to={`/details/${category.id}`}>
            <span className='fs-4'>{category.name}</span>
          </Link>
        </p>)
      }
    </div>
  );
};

export default CardTitle;