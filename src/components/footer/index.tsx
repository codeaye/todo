import { useState } from "react";

const Footer = () => {
  const [green, setGreen] = useState(false);

  return (
    <footer className="footer footer-center p-1 bg-base-300 text-base-content h-fit select-none">
      <div>
        <p>
          made with ❤️ by{" "}
          <a
            className={`link tooltip rounded-md px-1 ${
              green ? "bg-success" : "text-base-content"
            }`}
            data-tip={green ? "thanks" : "copy url"}
            onClick={() => {
              navigator.clipboard.writeText("https://github.com/codeaye/");
              setGreen(true);
              setTimeout(() => {
                setGreen(false);
              }, 1000);
            }}
          >
            codeaye
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
