import { React, styled } from '_employee/view';
import {
  imagesListCss,
  imagesGridCss,
  imagesLayoutItemCss,
} from '_employee/style-kit';

import { IImage, LayoutTypes } from '@types';
import { Image } from './Image';

// let largeCount: number, lastSmallIndex: number;

//   if (layout === 'grid') {
//     // The algorithm that defines outside images which need to be bigger
//     largeCount = images.length % 3;
//     lastSmallIndex = images.length - largeCount - 1;
//   }

// const isBigger = index > lastSmallIndex;
//       const size = defineSize(isBigger, layout, largeCount);

interface ILayoutProps {
  images: IImage[];
  layout: LayoutTypes;
}
const defaultProps = {
  layout: 'list',
};

const List = styled.div`
  ${imagesListCss}
`;
const Grid = styled.div`
  ${imagesGridCss}
`;
const Item = styled.div`
  ${imagesLayoutItemCss}
`;

export const ImagesLayout = ({ layout, images }: ILayoutProps) => {
  const Layout = layout === 'grid' ? Grid : List;

  return (
    <Layout data-testid="images-layout">
      {images.map((item: IImage) => (
        <Item key={item.src}>
          <Image src={item.src} />
        </Item>
      ))}
    </Layout>
  );
};
ImagesLayout.defaultProps = defaultProps;
