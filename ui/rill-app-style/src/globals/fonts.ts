import { css } from '_employee/view';


const fontsCss = css`
  @font-face {
    font-family: 'open-sans-light';
    src: local('OpenSans-Light'),
      url('assets/fonts/OpenSans-Light.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: 'open-sans-regular';
    src: local('OpenSans-Regular'),
      url('assets/fonts/OpenSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: 'open-sans-bold';
    src: local('OpenSans-Bold'),
      url('assets/fonts/OpenSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
  }
`;

export default fontsCss;
