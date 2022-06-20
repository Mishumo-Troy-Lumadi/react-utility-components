import { FC, ReactNode } from 'react';

interface props {
	icon?: ReactNode;
	label?: string;
	className?: string;
	onClick?: (e: any) => void;
}

const Button: FC<props> = ({ icon, label, className, onClick }) => {
	const padding =
		(icon && label) || label ? 'px-4 py-2' : icon ? 'p-2' : 'hidden';
	const spacing = icon && label ? 'space-x-2' : 'space-x-0';

	return (
		<button
			className={`flex items-center h-fit rounded transition-colors duration-300 ${spacing} ${padding} ${className}`}
			{...{ onClick }}>
			<span className={`stroke-2  ${icon && 'w-5 h-5'}`}>{icon}</span>
			<span>{label}</span>
		</button>
	);
};

export default Button;
