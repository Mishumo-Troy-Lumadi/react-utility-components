import { FC, ReactNode } from 'react';
interface props {
    icon?: ReactNode;
    label?: string;
    className?: string;
    onClick?: (e: any) => void;
}
declare const Button: FC<props>;
export default Button;
