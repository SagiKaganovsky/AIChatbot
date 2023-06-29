"use client";
import { useChat } from "ai/react";
import Chat from "./components/chat";
import Form from "./components/form";
import { useEffect, useRef } from "react";

export default function Home() {
  const chatRef = useRef<HTMLInputElement>();

  const { isLoading, messages, input, handleInputChange, handleSubmit } =
    useChat();

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop += chatRef.current.scrollHeight;
    }
  }, [messages, input, isLoading]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chat ref={chatRef} messages={messages} isLoading={isLoading} />
      <Form
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
