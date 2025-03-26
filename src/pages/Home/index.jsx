import CategoryBar from "@/components/CategoryBar";
import ListContainer from "@/components/ListContainer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <CategoryBar />
      <ListContainer />
    </div>
  );
}
export default Home;
