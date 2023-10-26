import { useState } from "react";
export const useSelect = () => {
  // 1- State to hold the selected media type
  const [selectedMediaType, setSelectedMediaType] = useState("");
  const handleSelect = (value) => {
    setSelectedMediaType(value);
  };
  return { selectedMediaType, handleSelect };
};
