import React from 'react';
// import { useParams } from 'react-router-dom'

const SearchResult = ({ searchResults }) => {
  return (
    <div
      style={{
        height: '100vh',
        marginTop: '120px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <h1>hello</h1>
      <div>
        {/* {searchResults.map((data, i) => (
          <div key={data._id}> {data.productName} </div>
        ))} */}
      </div>
    </div>
  );
};
export default SearchResult;
