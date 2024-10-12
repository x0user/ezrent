"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
}

export default function MessageCenter() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages from API
    const fetchMessages = async () => {
      // Replace with actual API call
      const response = await fetch('/api/messages');
      const data = await response.json();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    // Send message to API
    // Replace with actual API call
    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newMessage }),
    });

    if (response.ok) {
      const sentMessage = await response.json();
      setMessages([...messages, sentMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Message Center</h2>
      <ScrollArea className="h-[300px] mb-4">
        {messages.map((message) => (
          <div key={message.id} className="mb-2">
            <strong>{message.sender}:</strong> {message.content}
            <small className="block text-gray-500">{new Date(message.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </ScrollArea>
      <div className="flex space-x-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
}