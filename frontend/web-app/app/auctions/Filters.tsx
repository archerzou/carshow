import React from 'react';
import { Button, ButtonGroup } from "flowbite-react";

const pageSizeButtons = [4, 8, 12];
// const orderButtons = [
//     { label: 'Alphabetical', icon: AiOutlineSortAscending, value: 'make' },
//     { label: 'End date', icon: AiOutlineClockCircle, value: 'endingSoon' },
//     { label: 'Recently added', icon: BsFillStopCircleFill, value: 'new' },
// ]
//
// const filterButtons = [
//     { label: 'Live auctions', icon: GiFlame, value: 'live' },
//     { label: 'Ending < 6 hours', icon: GiFinishLine, value: 'endingSoon' },
//     { label: 'Completed', icon: BsStopwatchFill, value: 'finished' },
// ]

type Props = {
    pageSize: number;
    setPageSize: (pageSize: number) => void;
}

const Filters = ({pageSize, setPageSize}: Props) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
                <ButtonGroup outline>
                    {pageSizeButtons.map((value, index) => (
                        <Button
                            key={index}
                            onClick={() => setPageSize(value)}
                            color={`${pageSize === value ? 'red' : 'gray'}`}
                            className="focus:ring-0"
                        >
                            {value}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Filters;