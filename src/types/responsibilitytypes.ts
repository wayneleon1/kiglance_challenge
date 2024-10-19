export interface Responsibility {
  id: string;
  name: string;
}

export interface GetResponsibilitiesResponse {
  data: {
    getResponsibilities: {
      data: Responsibility[];
    };
  };
}

export interface ResponsibilitiesState {
  responsibilities: Responsibility[];
  loading: boolean;
  error: string | null;
}
