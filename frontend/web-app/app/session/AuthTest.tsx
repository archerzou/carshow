'use client';

import {useState} from 'react';
import { Button, Spinner } from "flowbite-react";
import { updateAuctionTest } from "../actions/auctionActions";

const AuthTest = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ status: number, message: string } | null>(null);

    const handleUpdate = ()=> {
        setResult(null);
        setLoading(true);
        updateAuctionTest().then(res => setResult(res))
            .catch(err => setResult(err))
            .finally(() => setLoading(false))
    }

    return (
        <div className="flex items-center gap-4">
            <Button outline onClick={handleUpdate}>
                {loading && <Spinner size="sm" className="me-3" light />}
                Test auth
            </Button>
            <div>
                {JSON.stringify(result, null, 2)}
            </div>
        </div>
    );
};

export default AuthTest;