import React from "react";



type PropsForBtn = {
    content: any
}

export const TabsContent = ({content}: PropsForBtn) => {
    return <div className="tab_content">

            <div>{content}</div> 

        </div>
}