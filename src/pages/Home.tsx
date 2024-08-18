import { Card } from "../components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Products {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const fetchProducts = (): Promise<Products[]> =>
  axios.get("https://fakestoreapi.com/products").then((res) => res.data);

const Home = () => {
  // tanstack query tidak perlu useEffect
  // otomatis handle fetch ketika di mount
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchProducts,
    select: (data) => data.slice(0, 10),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data {error.toString()}</div>;
  }

  return (
    <div className="grid m-0">
      {data?.map((product) => (
        <div className="col-6">
          <Card key={product.id} {...product} />
        </div>
      ))}
    </div>
  );
};

export default Home;
