import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const url = 'api/products';

const Airtable = () => {
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setProduct(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className='section section-center'>
      <div className='title'>
        <h2>Aitable</h2>
        <div className='underline'></div>
        <div className='products'>
          {product.map((item) => {
            const { id, url, price, name } = item;
            return (
              <Link to={`/${id}`} className='product' key={id}>
                <img src={url} alt={name} />
                <div className='info'>
                  <h5>{name}</h5>
                  <h5 className='price'>${price}</h5>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Airtable;
