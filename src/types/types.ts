export interface Artwork {
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscription: string;
  date_start: number;
  date_end: number;

  // Add more fields as needed
}

export interface ArtworksResponse {
  pagination: {
    total: number;
    total_pages: number;
    current_page: number;
    limit: number;
  };
  data: Artwork[];
}
