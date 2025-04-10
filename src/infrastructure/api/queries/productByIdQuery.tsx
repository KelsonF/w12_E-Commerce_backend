import { axiosService } from "@/domain/services/AxiosService";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/domain/models/Product";

function useProductByIdQuery(id: string) {
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axiosService
        .getInstance()
        .get<Product>(`/products/${id}`);
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });
}



export { useProductByIdQuery };
