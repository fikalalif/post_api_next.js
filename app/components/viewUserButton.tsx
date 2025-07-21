"use client";

const viewUserButton = () => {
    const handleClick = () => alert('aku dipencet');
    return(
        <>
        <button onClick={handleClick} className="text-amber-50">lihat user</button>
        </>
    );
}

export default viewUserButton