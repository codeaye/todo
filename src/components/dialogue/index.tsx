import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeAll } from "../../reducers/todo";
import { RootState } from "../../Store";
import { X } from "./icons";

const Dialouge = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const total = useSelector((state: RootState) => state.total);
  const dispatch = useDispatch() as any;

  return (
    <div>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <label htmlFor="my-modal-1" className="modal cursor-pointer select-none">
        <label className="modal-box relative text-center max-w-md">
          <label
            htmlFor="my-modal-1"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            <X />
          </label>
          <h3 className="text-lg font-bold">
            Are you sure you want to delete all todos?
          </h3>
          <p className="py-4">
            If you accept, all of your TODOs will be deleted.
          </p>
          <label
            htmlFor="my-modal-1"
            className="btn btn-md btn-error w-full"
            onClick={() => {
              if (total > 0) {
                toast(`Deleted ${total}  TODO(s)`, {
                  closeButton: true,
                  position: "bottom-right",
                  theme: theme ? "light" : "dark",
                  autoClose: 2000,
                });
                dispatch(removeAll());
              }
            }}
          >
            Delete
          </label>
        </label>
      </label>
    </div>
  );
};

export default Dialouge;
