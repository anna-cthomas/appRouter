import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { fetchCustomersAllData } from '@/app/lib/data';
import { Suspense } from 'react';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {

    const customers = await fetchCustomersAllData();

    return (
        <div className="w-full">
            <div>
                <Suspense fallback={<CustomersTableSkeleton />}>
                    <CustomersTable customers={customers} />
                </Suspense>
            </div>
        </div>
    );
}