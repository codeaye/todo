import { useState } from "react";
import { Delete, DoneOff, DoneOn, Revert } from "./icons";

const Todo = ({
  text,
  done,
  onDelete,
  onDoneChange,
}: {
  text: string;
  done: boolean;
  onDelete: Function;
  onDoneChange: Function;
}) => {
  const [inConfirm, setInConfirm] = useState(false);

  return (
    <div className="p-3 select-none">
      <div
        className={`card w-full shadow-xl border max-w-2xl ${
          done ? "bg-base-200 border-secondary" : "bg-base-100 border-accent"
        }`}
      >
        <div className="card-body p-3">
          <div className="flex">
            <p
              className={`flex-grow text-1xl decoration-wavy decoration-from-font max-h-10 hover:overflow-scroll overflow-hidden ${
                done ? "line-through" : "font-medium"
              }`}
            >
              {text}
            </p>
            {inConfirm ? (
              <div className="flex flex-wrap gap-2">
                <button
                  className="btn btn-xs btn-error"
                  onClick={() => {
                    onDelete();
                    setInConfirm(false);
                  }}
                >
                  Delete
                </button>
                <button
                  className="hover:text-info"
                  onClick={() => setInConfirm(false)}
                >
                  <Revert />
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap">
                <button
                  className={`swap swap-rotate w-fit px-4 hover:text-info ${
                    done && "swap-active"
                  }`}
                  onClick={() => onDoneChange()}
                >
                  <DoneOff />
                  <DoneOn />
                </button>
                <button
                  className="hover:text-info"
                  onClick={() => setInConfirm(true)}
                >
                  <Delete />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
