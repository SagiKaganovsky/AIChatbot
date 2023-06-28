"use client";
import { useChat } from "ai/react";
import Chat from "./components/chat";
import Form from "./components/form";
export default function Home() {
  const { isLoading, messages, input, handleInputChange, handleSubmit } =
    useChat();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chat messages={messages} isLoading={isLoading} />
      <Form
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
