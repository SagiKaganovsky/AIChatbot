"use client";
import { useCompletion } from "ai/react";
const Completion = () => {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: "/api/completion",
  });

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      <form
        className="flex grid gap-4 grid-cols-1 items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="input input-ghost w-full"
          value={input}
          placeholder="Enter your prompt..."
          onChange={handleInputChange}
        />
        <div>
          <p>Completion result: {completion}</p>
        </div>
        <button
          className="btn btn-active btn-ghost"
          type="button"
          onClick={stop}
        >
          Stop
        </button>
        <button
          className="btn btn-active btn-accent"
          disabled={isLoading}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Completion;
