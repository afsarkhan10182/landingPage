import PropTypes from "prop-types";

const sizes = {
  sm: "h-8 w-8 rounded-lg",
  lg: "h-20 w-20 rounded-2xl",
};

const LogoMark = ({ size = "sm" }) => (
  <div
    className={`relative flex-shrink-0 overflow-hidden bg-[#0F172A] ${sizes[size]}`}
    aria-hidden="true"
  >
    <div className="absolute left-[24%] top-[18%] h-[64%] w-[18%] rounded-l-lg bg-white"></div>
    <div className="absolute left-[34%] top-[24%] h-[52%] w-[44%] rounded-r-full bg-[#38BDF8]"></div>
    <div className="absolute left-[43%] top-[34%] h-[32%] w-[32%] rounded-r-full bg-[#0F172A]"></div>
    <div className="absolute right-[15%] top-[12%] h-[18%] w-[18%] rounded-md bg-[#0369A1]"></div>
  </div>
);

LogoMark.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export default LogoMark;
