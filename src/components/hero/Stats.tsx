import { useSelector } from "react-redux";
import { RootState } from "../../Store";

const Stats = () => {
  const total = useSelector((state: RootState) => state.total);
  const inactive = useSelector((state: RootState) => state.inactive);
  const pad = (n: number) =>
    n.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

  return (
    <div className="stats stats-vertical shadow w-fit select-none font-sans">
      <div className="stat">
        <div className="stat-title">All</div>
        <p className="stat-value proportional-nums">{pad(total)}</p>
      </div>

      <div className="stat">
        <div className="stat-title">Active</div>
        <p className="stat-value proportional-nums">{pad(total - inactive)}</p>
      </div>

      <div className="stat">
        <div className="stat-title">Inactive</div>
        <p className="stat-value proportional-nums">{pad(inactive)}</p>
      </div>
    </div>
  );
};

export default Stats;
