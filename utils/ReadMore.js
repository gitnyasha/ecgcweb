import React, { useState } from "react";

const CHARACTERS_LIMIT=120;

const ReadMore = ({description}) => {

    return (
        <p style={{textAlign: "justify"}}>
            {description.length > CHARACTERS_LIMIT ? (
                <>
                    {description.substring(0, CHARACTERS_LIMIT).concat("...")}
                </>

            ) : (
                description
            )}
        </p>
    );
};
export default ReadMore;