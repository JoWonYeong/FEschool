import React from 'react';

export default function ShowFeel({ feel }) {
  return <div>기분이 {feel || '어때요'}</div>;
}
