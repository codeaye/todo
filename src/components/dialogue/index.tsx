import { useDispatch } from "react-redux";
import { removeAll } from "../../reducers/todo";
import { X } from "./icons";

const Dialouge = () => {
  const dispatch = useDispatch() as any;
  return (
    <div>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <label htmlFor="my-modal-1" className="modal cursor-pointer">
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
            onClick={() => dispatch(removeAll())}
          >
            Delete
          </label>
        </label>
      </label>
    </div>
  );
};

export default Dialouge;
