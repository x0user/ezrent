"use client"

import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Payment {
  id: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
}

export default function PaymentHistory() {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    // Fetch payment history from API
    const fetchPayments = async () => {
      // Replace with actual API call
      const response = await fetch('/api/payments');
      const data = await response.json();
      setPayments(data);
    };

    fetchPayments();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Payment History</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
              <TableCell>${payment.amount.toFixed(2)}</TableCell>
              <TableCell>{payment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}