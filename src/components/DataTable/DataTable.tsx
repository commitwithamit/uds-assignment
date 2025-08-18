import type { DataTableProps } from "./DataTable.types";
import type { Column } from "./DataTable.types";
import { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";

const DataTable = <T,>({
    columns,
    data,
    loading,
    selectable,
    onRowSelect,
}: DataTableProps<T>) => {

    const renderCell = (col: Column<T>, row: T, index: number) => {
        if (col.key === 'serial') return index + 1;
        return String(row[col.dataIndex]);
    };

    // row selection
    const [selectedRows, setSelectedRows] = useState<T[]>([]);

    const handleRowSelect = (row: T) => {
        const isSelected = selectedRows.includes(row);
        const updated = isSelected
            ? selectedRows.filter((r) => r !== row)
            : [...selectedRows, row];

        setSelectedRows(updated);
        onRowSelect?.(updated);
    };

    const allSelected = data.length > 0 && selectedRows.length === data.length;

    const handleSelectAll = () => {
        const newSelected = allSelected ? [] : [...data];
        setSelectedRows(newSelected);
        onRowSelect?.(newSelected);
    };

    // row sorting
    const [sortConfig, setSortConfig] = useState<{
        key: keyof T | null;
        direction: 'asc' | 'desc';
    }>({ key: null, direction: 'asc' });

    const handleSort = (key: keyof T) => {
        setSortConfig((prev) => {
            if (prev.key === key) {
                // Toggle direction
                return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
            }
            return { key, direction: 'asc' };
        });
    };

    const sortedData = [...data];
    if (sortConfig.key) {
        sortedData.sort((a, b) => {
            const aVal = a[sortConfig.key!];
            const bVal = b[sortConfig.key!];

            if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }


    return (
        <div className="flex flex-col w-[90%]">
            <h1 className="mb-5 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl mdz:text-5xl">Data Table</h1>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b bg-white font-medium">
                                <tr>
                                    {selectable && (
                                        <th className="px-6 py-4">
                                            <input
                                                type="checkbox"
                                                onChange={handleSelectAll}
                                                checked={allSelected}
                                            />
                                        </th>
                                    )}

                                    {columns.map((col) => (
                                        <th
                                            key={col.key}
                                            className={`px-6 py-4 ${col.sortable ? 'cursor-pointer select-none' : ''}`}
                                            onClick={() => col.sortable && handleSort(col.dataIndex)}
                                        >
                                            <span className="flex items-center">
                                                {col.title}
                                                {col.sortable && (
                                                    <BiSortAlt2 className="mt-1 ms-1" />
                                                )}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center py-4 text-gray-500">
                                            Loading...
                                        </td>
                                    </tr>
                                ) : data.length === 0 ? (
                                    <tr>
                                        <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center py-4 text-gray-500">
                                            No data available.
                                        </td>
                                    </tr>
                                ) : (
                                    sortedData.map((row, i) => (
                                        <tr className="border-b bg-neutral-100" key={i}>
                                            {selectable && (
                                                <td className="px-6 py-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedRows.includes(row)}
                                                        onChange={() => handleRowSelect(row)}
                                                    />
                                                </td>
                                            )}
                                            {columns.map((col) => (
                                                <td
                                                    key={col.key}
                                                    className={`whitespace-nowrap px-6 py-4 ${col.dataIndex === 'serial' ? 'font-medium' : ''
                                                        }`}
                                                >
                                                    {renderCell(col, row, i)}
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                )}

                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DataTable;
