import { GetStaticPropsResult } from 'next';

import Home from '@/components/Home';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import { Product } from 'types';

// interface Props {
//   products: Product[];
// }

export default function PricingPage() {
  return <Home />;
}

export async function getStaticProps() {
  //const products = await getActiveProductsWithPrices();

  return {
    props: {
      products: null,
    },
    revalidate: 60
  };
}
