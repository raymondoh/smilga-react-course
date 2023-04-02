import { useState, useEffect } from "react";

const useFetchPerson = url => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return { isLoading, isError, user };
};

export default useFetchPerson;
