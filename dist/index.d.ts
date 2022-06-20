import { FC, ReactNode, HTMLInputTypeAttribute } from 'react';

interface props$4 {
    as?: 'row' | 'column' | 'grid' | 'div';
    className?: string;
    onClick?: (e: any) => void;
    children?: ReactNode;
}
declare const Layout: FC<props$4>;

interface props$3 {
    type?: HTMLInputTypeAttribute;
    className?: string;
    onChange?: (e: any) => void;
    icon?: ReactNode;
    label?: string;
    placeholder?: string;
    height?: number;
}
declare const Field: FC<props$3>;

interface props$2 {
    as?: 'row' | 'column' | 'grid' | 'div';
    className?: string;
    onClick?: (e: any) => void;
    children?: ReactNode;
}
declare const Card: FC<props$2>;

interface props$1 {
    icon?: ReactNode;
    label?: string;
    className?: string;
    onClick?: (e: any) => void;
}
declare const Button: FC<props$1>;

interface props {
    data: any[];
    onClick?: (e: any) => void;
    className?: string;
    children?: ReactNode;
    indexed?: boolean;
}
declare const Table: FC<props>;

/**
 * It takes an array of objects and returns an array of strings that are the keys of the objects.
 * @param data - Array<Object> - The data you want to convert to a table.
 * @returns An array of strings.
 */
declare function getColumns(data: Array<Object>): string[];
/**
 * Get the rows of the data by mapping the values of the pairs to the columns.
 * @param data - Array<Object> = [
 * @returns An array of arrays.
 */
declare function getRows(data: Array<Object>): any[][];
/**
 * It takes an array of objects and returns an array of two arrays, the first being the column names
 * and the second being the rows
 * @param data - Array<Object>
 * @returns An array of two elements. The first element is an array of column names. The second element
 * is an array of rows.
 */
declare function getTable(data: Array<Object>): [string[], any[][]];

declare const Generator_d_getTable: typeof getTable;
declare const Generator_d_getColumns: typeof getColumns;
declare const Generator_d_getRows: typeof getRows;
declare namespace Generator_d {
  export {
    Generator_d_getTable as getTable,
    Generator_d_getColumns as getColumns,
    Generator_d_getRows as getRows,
  };
}

declare namespace index_d {
  export {
    Table as default,
    Generator_d as Generator,
  };
}

export { Button, Card, Field, Layout, index_d as Table };
