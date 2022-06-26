import { Delete, DoneOff, DoneOn } from "./icons";

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
            <label className="swap swap-rotate w-fit px-4 hover:text-info">
              <input type="checkbox" onChange={() => onDoneChange()} />
              <DoneOff />
              <DoneOn />
            </label>
            <button className="hover:text-info" onClick={() => onDelete()}>
              <Delete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
