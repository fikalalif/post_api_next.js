"use client";
import React from "react";

interface ViewUserButtonProps{
    userId: number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
    const handleClick = () => alert(`user id : ${userId}`);
    return(
        <>
            <button onClick={handleClick} className="bg-sky-500 hover:bg-sky-700">lihat user</button>
        </>
    );
}

export default ViewUserButton;