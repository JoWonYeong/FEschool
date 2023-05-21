import React from 'react';
import ImageItem from './ImageItem';

export default function ImageList({ images }) {
  return (
    <ul>
      {images.map((item, i) => (
        <li key={item.id}>
          <ImageItem image={item} />
        </li>
      ))}
    </ul>
  );
}
