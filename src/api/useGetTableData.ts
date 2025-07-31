// api.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ArtworksResponse } from "../types/types";

const fetchArtworks = async (page: number): Promise<ArtworksResponse> => {
  const { data } = await axios.get(
    `https://api.artic.edu/api/v1/artworks?page=${page}`
  );
  return data;
};

export const useGetTableData = (page: number) =>
  useQuery<ArtworksResponse, Error>({
    queryKey: ["artworks", page],
    queryFn: () => fetchArtworks(page),
    staleTime: 0,
    gcTime: 0,
    refetchOnWindowFocus: "always",
  });
