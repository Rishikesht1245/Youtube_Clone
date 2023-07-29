const LeftNavMenuItem = ({ text, icon, action, className }) => {
  //component for each category
  return (
    <div
      className={`text-white ${className} text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.5]`}
      onClick={action}
    >
      <span className="text-lg mr-5">{icon}</span>
      {text}
    </div>
  );
};
export default LeftNavMenuItem;
