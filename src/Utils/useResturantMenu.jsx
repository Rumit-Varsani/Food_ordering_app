import { useState, useEffect } from "react";


const useResturantMenu = (resId) => {
  const [resinfo, setResinfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const module = await import(`../Mocks/useresmenu_${resId}.json`);
        setResinfo(module.default);
      } catch (err) {
        console.error("Mock not found for resId:", resId);
        setResinfo(null);
      } finally {
        setLoading(false);
      }
    };

    if (resId) loadData();
  }, [resId]);

  return { resinfo, loading };
};


export default useResturantMenu;
