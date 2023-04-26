 

import './Placeholder.css';

import * as React from 'react';
import {ReactNode} from 'react';

export default function Placeholder({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className || 'Placeholder__root'}>{children}</div>;
}
