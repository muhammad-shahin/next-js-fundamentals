import React from 'react';

const ProductId = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h1 className='text-4xl'>This is dynamic product page : {params.id}</h1>
      <h1 className='text-4xl'>
        This is Search Params :{' '}
        {searchParams.category + '-' + searchParams.Price}
      </h1>
    </div>
  );
};

export default ProductId;
