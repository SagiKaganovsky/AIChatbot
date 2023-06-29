import { forwardRef } from "react";
import styles from "@/app/assets/style/chat.module.css";
import { Message } from "ai";
import Loader from "./loader";

type Props = {
  messages: Message[];
  isLoading: boolean;
};

const Chat = ({ messages, isLoading }: Props, ref: any) => {
  return (
    <div
      ref={ref}
      className={`artboard artboard-horizontal ${styles["chatbot-chat-container"]}`}
    >
      {messages.map((message: Message, i) => {
        if (i === messages.length - 1 && isLoading) {
          return <Loader key={message.id} />;
        }
        return (
          <div
            key={message.id}
            className={`chat ${
              message.role === "user" ? "chat-start" : "chat-end"
            }`}
          >
            <div
              className={`chat-bubble ${
                message.role === "user" ? "" : "chat-bubble-success"
              }`}
            >
              {message.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default forwardRef(Chat);
