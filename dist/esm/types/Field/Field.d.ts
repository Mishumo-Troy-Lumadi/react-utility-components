import { FC, HTMLInputTypeAttribute, ReactNode } from 'react';
interface props {
    type?: HTMLInputTypeAttribute;
    className?: string;
    onChange?: (e: any) => void;
    icon?: ReactNode;
    label?: string;
    placeholder?: string;
    height?: number;
}
declare const Field: FC<props>;
export default Field;
