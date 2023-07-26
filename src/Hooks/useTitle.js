import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - FrontendGyaan`;
  }, [title]);
  return null;
};

export default useTitle;
