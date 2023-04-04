import { useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Button from '@/components/ui/Button';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { useUser } from '@/utils/useUser';

import { Price, ProductWithPrice } from 'types';

interface Props {
  products?: ProductWithPrice[];
}

type BillingInterval = 'year' | 'month';

export default function Home({ products }: Props) {
  const router = useRouter();

  return (
    <section className="bg-black">
    <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:flex-col sm:align-center"></div>
      <p className="text-6xl font-extrabold text-white sm:text-center sm:text-6xl">
        This is home now
      </p>
    </div>
  </section>
  );
}
