import React, { useState, useEffect } from 'react';
import { UnsplashImage } from './components/UnsplashImage';
import Axios from 'axios';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 5) => {

    Axios
      .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }


  return (
    <div>
      <GlobalStyle />

        <WrapperImages>
          {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImages>
    </div>
  );
}

export default App;