import { useState, useEffect } from "react";


const useResturantMenu = (resId) => {
  const [resinfo, setResinfo] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const loadMockMenu = async () => {
      try {
        const data = await import(`../Mocks/useresmenu_${resId}.json`);
        setResinfo(data.default); // `import()` returns a module object
        setLoading(false);
      } catch (err) {
        console.error("Mock file not found for resId:", resId);
        setLoading(false);
      }
    };

    if (resId) {
      loadMockMenu();
    }
  }, [resId]);

  return { resinfo, loading };
};

export default useResturantMenu;
