import { Column, Grid, Row } from '@Mishumo-Troy-Lumadi/react-base-components';
import { FC, ReactNode, Fragment } from 'react';

interface props {
	as?: 'row' | 'column' | 'grid' | 'div';
	className?: string;
	onClick?: (e: any) => void;
	children?: ReactNode;
}

const Layout: FC<props> = ({ as, className, onClick, children }) => {
	switch (as?.toLowerCase()) {
		case 'row':
			return <Row {...{ className, onClick }}>{children}</Row>;
		case 'column':
			return <Column {...{ className, onClick }}>{children}</Column>;
		case 'grid':
			return <Grid {...{ className, onClick }}>{children}</Grid>;
		case 'div':
			return <div {...{ className, onClick }}>{children}</div>;

		default:
			return <Fragment>{children}</Fragment>;
	}

};

export default Layout
