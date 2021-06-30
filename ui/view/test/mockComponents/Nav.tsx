import * as React from 'react';

export function StyledLink(props) {
  return (
    <a
      className={`${props.isActive ? 'active' : 'notActive'}`}
      href={props.path}
      onClick={props.navigate}
    >
      {props.children}
    </a>
  );
}
