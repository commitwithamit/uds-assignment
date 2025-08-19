import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';

type User = {
  name: string;
  email: string;
};

const columns: { key: string; title: string; dataIndex: keyof User; sortable: boolean }[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
];

const data: User[] = [
  { name: 'Amit Kumar', email: 'amit@example.com' },
  { name: 'John Doe', email: 'john@example.com' },
];

const meta: Meta<typeof DataTable<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
  args: {
    columns,
    data,
  },
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Selectable: Story = {
  args: {
    selectable: true,
    onRowSelect: (selected) => console.log('Selected rows:', selected),
  },
};
