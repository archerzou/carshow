import React from 'react';
import EmptyFilter from "@/app/components/EmptyFilter";

const Page = async ({searchParams}: {searchParams: Promise<{callbackUrl: string}>}) => {
    const {callbackUrl} = await searchParams;

    return (
        <EmptyFilter
            title='You need to be logged in to do that'
            subtitle="Please click below to login"
            showLogin
            callbackUrl={callbackUrl}
        />
    );
};

export default Page;