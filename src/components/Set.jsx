import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Set = ({ sdata }) => {
    return (
        <>
            {
                sdata.map((elm, key) => {
                    return (
                        <>
                            <Stack spacing={1} style={{ width: "22rem" }} className='mb-4'>
                                {/* For variant="text", adjust the height via font-size */}
                                <Skeleton variant="rectangular" animation="wave" width={"21rem"} height={200} className='rounded' />
                                <div className="d-flex justify-content-between">
                                    <Skeleton variant="text" animation="wave" width={"12rem"} />
                                    <Skeleton variant="text" width={"5rem"} />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <Skeleton variant="text" animation="wave" width={"12rem"} />
                                    <Skeleton variant="text" width={"5rem"} />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Skeleton variant="circular" animation="wave" width={20} height={20} />
                                    <Skeleton variant="text" width={"18rem"} />
                                </div>

                            </Stack>
                        </>
                    )
                })
            }
        </>
    )
}

export default Set