"use client";
import Chat from "./components/chat";
import Form from "./components/form";

export default function Home() {
  const handleSendMessage = (message: string) => {
    console.log(message);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chat />
      <Form handleMessage={handleSendMessage} />
    </main>
  );
}
