import CategoryBar from "@/components/CategoryBar";
import ListContainer from "@/components/ListContainer";
import useUser from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [url, setUrl] = useState();

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  return (
    <div>
      <CategoryBar />
      <ListContainer />
      <img src={url} alt="" />
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          setUrl(URL.createObjectURL(file));
          console.log(file);
        }}
      />
    </div>
  );
}
export default Home;
