import React from "react";
import './TabsContent.scss';



type PropsForBtn = {
    content: any
}

export const TabsContent = ({content}: PropsForBtn) => {
    return <div className="tab_content">

            <div>{content}</div> 

        </div>
}