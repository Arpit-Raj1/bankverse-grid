
export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'investment';
  balance: number;
  currency: string;
  number: string;
  isMain?: boolean;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense' | 'transfer';
  category: string;
  accountId: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
