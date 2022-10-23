import Images from './Images';

export default function Animals() {
  const imageList = [
    {
      src: '/img/1.jpg',
      height: 400,
      width: 400,
      alt: 'flower',
    },
    {
      src: '/img/2.jpg',
      height: 400,
      width: 400,
      alt: 'flower',
    },
    {
      src: '/img/3.jpg',
      height: 400,
      width: 400,
      alt: 'flower',
    },
    {
      src: '/img/4.jpg',
      height: 400,
      width: 400,
      alt: 'flower',
    },
    {
      src: '/img/5.jpg',
      height: 400,
      width: 400,
      alt: 'flower',
    },
    {
      src: '/img/6.jpg',
      height: 400,
      width: 400,
      alt: 'flower',
    },
    {
      src: '/img/7.jpg',
      height: 400,
      width: 400,
      alt: 'flower',
    },
    {
      src: '/img/8.jpg',
      height: 400,
      width: 400,
      alt: 'flower',
    },
  ];
  return (
    <>
      <h1>Animals</h1>
      <Images imageData={imageList} />
    </>
  );
}
