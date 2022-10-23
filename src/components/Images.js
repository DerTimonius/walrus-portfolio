/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ImageList, ImageListItem } from '@mui/material';

const imageListStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Images({ imageData }) {
  return (
    <div css={imageListStyles}>
      <ImageList
        sx={{ width: 500, height: 450 }}
        cols={3}
        rowHeight={164}
        variant="quilted"
      >
        {imageData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.alt}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Images;
