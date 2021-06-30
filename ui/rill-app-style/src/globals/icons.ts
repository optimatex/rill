import { css } from '_employee/view';

const assetsPath = process.env.ASSETS_PATH;

const iconsCss = css`
  @font-face {
    font-family: 'icomoon';
    src: url('${assetsPath}/fonts/icomoon.woff') format('woff'),
      url('/assets/fonts/icomoon.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^='icon-'],
  [class*=' icon-'] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default iconsCss;
