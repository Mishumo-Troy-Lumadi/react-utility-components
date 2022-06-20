import { FC, ReactNode } from 'react';
interface props {
    as?: 'row' | 'column' | 'grid' | 'div';
    className?: string;
    onClick?: (e: any) => void;
    children?: ReactNode;
}
declare const Layout: FC<props>;
export default Layout;
