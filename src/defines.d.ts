declare module '*.svg' {
    import type React from 'react';
    export const ReactComponent: React.FunctionComponent<React.PropsWithChildren<React.SVGProps<SVGSVGElement>>>;
}