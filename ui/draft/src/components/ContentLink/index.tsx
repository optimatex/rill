import { React } from '_employee/view';

const DraftLink = (props) => (
  <a href={props.attrs.href} target="_blank" rel="noreferrer noopener">
    {props.attrs['data-i'] && <i />}

    <span>{props.children}</span>
  </a>
);

export default DraftLink;
