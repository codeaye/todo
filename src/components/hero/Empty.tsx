const Empty = () => {
  return (
    <div className="hero h-full w-full bg-base-200">
      <div className="hero-content text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-1/4 w-1/4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Empty;
