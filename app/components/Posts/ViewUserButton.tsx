"use client";
import React from "react";

interface ViewUserButtonProps{
    userId: number;
}

const ViewUserButton: React. FC<ViewUserButtonProps> = ({userId}) => {
    const handleClick = () => alert(userId);
    return(
        <>
            <button onClick={handleClick}>lihat user hehe</button>
        </>
    );
}

export default ViewUserButton