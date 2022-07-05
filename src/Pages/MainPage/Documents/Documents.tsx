import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import './Documents.scss'

import { documentsFetch } from "../../../thunkAction/documentsFetch"
import { DocumentsTable } from "./DocumentsTable/DocumentsTable";


export const Documents = () => {
    const documentsDataServer = useSelector((state: any) => state.documents);
    const dispatch = useDispatch();

    const [allDoc, setAllDoc] = useState(0)

    useEffect(() => {
        dispatch(documentsFetch())
    }, [])

    useEffect(() => {
        if (documentsDataServer.data) {
            setAllDoc(documentsDataServer.data.allDocuments)
        }
    }, [documentsDataServer])




    return <div className="documents">

        <div className="documents_title">
            <h1>Документы</h1>
            <p>Всего документов: <span>{allDoc}</span></p>
        </div>

        <div>
            <DocumentsTable docsData={documentsDataServer.data?.documents}/>
        </div>

    </div>
}