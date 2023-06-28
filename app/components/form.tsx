import Image from "next/image";
import styles from "@/app/assets/style/form.module.css";
import { ChangeEvent, FormEvent } from "react";

type Props = {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const Form = ({ input, handleSubmit, handleInputChange }: any) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full ${styles["chatbot-form-container"]}`}
    >
      <div className="grid flex-grow card rounded-box place-items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost input-accent w-full"
          onChange={handleInputChange}
          value={input}
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
