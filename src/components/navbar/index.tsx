import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../reducers/filter";
import { toggleTheme } from "../../reducers/theme";
import { add } from "../../reducers/todo";
import { RootState } from "../../Store";
import { DeleteAll, Plus, SortOff, SortOn, ThemeOff, ThemeOn } from "./icons";

const Navbar = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const filter = useSelector((state: RootState) => state.filter);
  const [text, setText] = useState("");
  const dispatch = useDispatch() as any;

  return (
    <div className="navbar bg-accent text-accent-content h-fit">
      <div className="w-full flex gap-2">
        <button
          className="btn btn-square btn-accent"
          onClick={() => dispatch(toggleTheme())}
        >
          <label className={`swap ${theme && "swap-active"} swap-rotate`}>
            <ThemeOff />
            <ThemeOn />
          </label>
        </button>
        <div className="form-control flex-grow">
          <label className="input-group">
            <span className="bg-neutral text-neutral-content w-fill">TODO</span>
            <input
              type="text"
              placeholder="ie. Buy milk"
              value={text}
              className="input text-base-content w-full"
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  if (text.length == 0) return;
                  dispatch(add(text));
                  setText("");
                }
              }}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
          </label>
        </div>
        <div className="btn-group">
          <button
            className="btn btn-square btn-accent"
            onClick={() => {
              if (text.length == 0) return;
              dispatch(add(text));
              setText("");
            }}
          >
            <Plus />
          </button>
          <button
            className="btn btn-square btn-accent"
            onClick={() => dispatch(toggleFilter())}
          >
            <label className={`swap ${filter && "swap-active"} swap-flip`}>
              <SortOff />
              <SortOn />
            </label>
          </button>
          <button className="btn btn-square btn-accent">
            <label htmlFor="my-modal-1">
              <DeleteAll />
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
