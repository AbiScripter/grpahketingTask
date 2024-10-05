import React from "react";

const StatusIndicator = ({ status }) => {
  const statusColors = {
    active: "bg-green-500",
    inactive: "bg-yellow-500",
    suspended: "bg-orange-500",
    blocked: "bg-red-700",
  };

  const indicatorColor = statusColors[status.toLowerCase()];

  return (
    <div className="flex items-center">
      {/* Dot indicator */}
      <span className={`h-2 w-2 rounded-full ${indicatorColor} mr-2`}></span>
    </div>
  );
};

export default StatusIndicator;
