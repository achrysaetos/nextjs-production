import { Product } from 'types';
import Landing from '@/pages/landing';

interface Props {
  products: Product[];
}

export default function PricingPage({ products }: Props) {
  return <Landing />
}
