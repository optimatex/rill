import { React, RC } from '_employee/view';

export const renderParagraph = (children: RC, index) => (
  <p key={index}>{children}</p>
);

export const renderLink = (url: string, children: RC) => (
  <a href={url}>{children}</a>
);

export const renderImages = (photos) => <img src={photos[0].ImageId} />;

export const renderYoutubes = (youtubes) => (
  <iframe src={youtubes[0].YoutubeId} />
);

export const mockCombinedRenderProps = {
  renderParagraph,
  renderLink,
  renderImages,
  renderYoutubes,
};
