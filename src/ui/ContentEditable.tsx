import './ContentEditable.css';

import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import * as React from 'react';

const LexicalContentEditable = ({
  className,
}: {
  className?: string;
}) => (
  <ContentEditable className={className || 'ContentEditable__root'} />
);

export default LexicalContentEditable;
