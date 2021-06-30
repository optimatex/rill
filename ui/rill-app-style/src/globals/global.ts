import { createGlobalStyle, css } from '_employee/view';
import { htmlCss, bodyCss } from '_employee/style-kit';

import fonts from './fonts';
import icons from './icons';
import iconsClasses from './icons-classes';

const globalCss = css`
  html {
    ${htmlCss}
  }

  body {
    ${bodyCss}
  }

  #app {
    ${bodyCss}
  }
`;

export default createGlobalStyle`
${icons}
${iconsClasses}
${fonts}
${globalCss}
`;
