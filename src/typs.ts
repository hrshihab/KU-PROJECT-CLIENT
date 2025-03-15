export interface INews {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  // Add any additional fields your API provides
}

// You might also want to define the API response structure
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ICareer {
    id: string;
    title: string;
    date: string;
    documentsUrl: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
} 