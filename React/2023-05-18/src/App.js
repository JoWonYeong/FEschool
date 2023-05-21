import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';
import useScrollChecker from './hooks/useScrollChecker';
import Loading from './components/Loading';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const isBottom = useScrollChecker();
  console.log('로딩' + isLoading);

  useEffect(() => {
    fetchImage();
  }, [page]);

  useEffect(() => {
    if (isBottom) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isBottom]);

  async function fetchImage() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=5`
      );

      if (!response.ok) {
        throw new Error('네트워크에 문제가 있습니다.');
      }
      const data = await response.json();
      setImages((prevImg) => [...prevImg, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.error('데이터를 가져오는데 문제가 생겼습니다.' + error);
      setIsLoading(false);
    }
  }

  return (
    <>
      <ImageList images={images} />
      {isLoading && <Loading />}
    </>
  );
}
export default App;
