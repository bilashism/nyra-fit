import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} - Nyra Fit`;
  }, [title]);
};

export default useTitle;
