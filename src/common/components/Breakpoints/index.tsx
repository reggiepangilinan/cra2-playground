import Responsive, { MediaQueryProps } from 'react-responsive';
import React from 'react';

export const minDesktopWidth = 992;
export const maxTabletWidth = 991;
export const minTabletWidth = 768;
export const maxPhoneWidth = 767;

export const Desktop = (props : MediaQueryProps) => <Responsive {...props} minWidth={minDesktopWidth} />;
export const Tablet = (props : MediaQueryProps) => <Responsive {...props} minWidth={minTabletWidth} maxWidth={maxTabletWidth} />;
export const Phone = (props : MediaQueryProps) => <Responsive {...props} maxWidth={maxPhoneWidth} />;

export const TabletAndSmaller = (props : MediaQueryProps) => <Responsive {...props} maxWidth={maxTabletWidth} />;
export const TabletAndBigger  = (props : MediaQueryProps) => <Responsive {...props} minWidth={minTabletWidth} />;

export const isDesktopSize = () => window.innerWidth >= minDesktopWidth;
