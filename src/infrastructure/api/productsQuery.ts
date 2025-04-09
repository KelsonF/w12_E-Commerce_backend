import { axiosService } from "@/domain/services/AxiosService";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/domain/models/Product";

type ProductsResponse = {
  results: Product[];
};

function productsQuery() {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosService
        .getInstance()
        .get<ProductsResponse>("/products");
      return response.data.results;
    },
    staleTime: 1000 * 60 * 5,
  });
}

export { productsQuery };
