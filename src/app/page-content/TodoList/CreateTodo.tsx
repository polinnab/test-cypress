import { FormEvent, useState } from "react";

import { Button } from "@/app/components/Button";

export const CreateTodo = ({ cancel }: { cancel: () => void }) => {
  const [titleValue, setTitleValue] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(titleValue);
    setTitleValue("");
    cancel();
  };

  return (
    <div className="py-1 px-2 rounded-md border-2 border-solid border-white mb-2 w-80">
      <form onSubmit={submit}>
        <div className="flex flex-col">
          <div>
            <input
              type="text"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              style={{ width: "100%", color: "black" }}
            />
          </div>
          <div className="flex mt-2 justify-between">
            <div className="mr-1 ">
              <Button type="submit">Add TODO</Button>
            </div>
            <Button type="reset" onClick={cancel}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
