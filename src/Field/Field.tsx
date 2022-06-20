import { Column, Row } from '@Mishumo-Troy-Lumadi/react-base-components';
import { FC, HTMLInputTypeAttribute, ReactNode, useId, useState } from 'react';

interface props {
	type?: HTMLInputTypeAttribute;
	className?: string;
	onChange?: (e: any) => void;
	icon?: ReactNode;
	label?: string;
	placeholder?: string;
	height?: number;
}

const Field: FC<props> = ({
	type,
	label,
	placeholder,
	icon,
	className,
	onChange,
	height,
}) => {
	const id = useId();
	const [value, setValue] = useState('');

	return (
		<Column>
			<label htmlFor={id}>{label}</label>
			<Row
				className={`w-fit rounded overflow-hidden outline focus-within:ring-1 ${
					height ? height : 'h-fit'
				} ${className}`}>
				<span
					className={`flex justify-center items-center h-full stroke-1 text-inherit p-2 bg-inherit ${
						icon ? `space-x-2 p-2 h-full` : ''
					}`}>
					{icon}
				</span>
				<input
					className='w-full h-full text-inherit placeholder-inherit bottom-0 outline-none ring-0 ring-inherit focus:ring-0 focus:outline-none focus:border-0'
					{...{ id, type, placeholder, value }}
					onChange={(e) => {
						setValue(e.target.value);
						onChange?.(value);
					}}
				/>
			</Row>
		</Column>
	);
};

export default Field