import { FC, ReactNode, Fragment } from 'react';
import Layout from '../Layout';

interface props {
	as?: 'row' | 'column' | 'grid' | 'div';
	className?: string;
	onClick?: (e: any) => void;
	children?: ReactNode;
}

const Card: FC<props> = ({ as, className, onClick, children }) => {
    return <Layout {...{ as, onClick }} className={`relative rounded shadow overflow-auto ${className}`}>{children}</Layout>
};

export default Card
