export interface Product {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  badges: string[];
  mainImage: string;
  gallery: string[];
  video: string;
  sizes: Size[];
  features: Feature[];
  usage: string[];
  ingredients: string;
  additionalInfo: AdditionalInfo[];
  upsell: Upsell;
  relatedProducts: RelatedProduct[];
}

export interface Size {
  value: string;
  label: string;
  price: number;
  popular?: boolean;
}

export interface Feature {
  title: string;
  description: string;
}

export interface AdditionalInfo {
  label: string;
  value: string;
}

export interface Upsell {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}