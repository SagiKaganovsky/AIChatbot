import { useRef } from "react";
import Image from "next/image";
import styles from "@/app/assets/style/form.module.css";
type Props = {
  handleMessage: (message: string) => void;
};

const Form = ({ handleMessage }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const message = inputRef?.current?.value;
    if (message === "") {
      return;
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    message && handleMessage(message);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full ${styles["chatbot-form-container"]}`}
    >
      <div className="grid flex-grow card rounded-box place-items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type here"
          className="input input-ghost input-accent w-full"
        />
      </div>
      <button type="submit" className="btn input-accent">
        <Image
          priority
          src="./send.svg"
          height={32}
          width={32}
          alt="send button"
        />
      </button>
    </form>
  );
};
export default Form;
