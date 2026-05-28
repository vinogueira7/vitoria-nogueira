export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'straighteners' | 'dryers' | 'curlers' | 'others';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  highlights: string[];
  specs: {
    tempMax: string;
    weight: string;
    technology: string;
    idealFor: string;
    cable: string;
    voltage: string;
  };
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  hairType: string;
  date: string;
  content: string;
  verified: boolean;
  avatar: string;
  productName: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    value: string;
    icon: string;
  }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
