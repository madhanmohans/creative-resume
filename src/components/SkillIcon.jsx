import { useState } from "react";

const SkillIcon = ({ icon: Icon, name, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-transparent hover:border-resume-blue">
        <Icon
          className="text-2xl transition-colors duration-300"
          style={{ color: isHovered ? color : "#666" }}
        />
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="skill-tooltip">
          {name}
          <div className="skill-tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default SkillIcon;
