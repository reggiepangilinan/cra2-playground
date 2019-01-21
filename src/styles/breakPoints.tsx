import Responsive, { MediaQueryProps } from 'react-responsive';
import React from 'react';
export const Desktop = (props : MediaQueryProps) => <Responsive {...props} minWidth={992} />;
export const Tablet = (props : MediaQueryProps) => <Responsive {...props} minWidth={768} maxWidth={991} />;
export const Phone = (props : MediaQueryProps) => <Responsive {...props} maxWidth={767} />;