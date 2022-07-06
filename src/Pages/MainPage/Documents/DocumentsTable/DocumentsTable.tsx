import React from "react"
import './DocumentsTable.scss'

import { ReactComponent as DownloadIcon } from '../../../../components/Icons/UserInterface/DownloadIcon.svg'
import { ReactComponent as FileIcon } from '../../../../components/Icons/UserInterface/FileIcon.svg'

type docsProps = {
    docsData: any
}

export const DocumentsTable = ({docsData}: docsProps) => {
    const arrTableDocs = docsData?.map((el: any, index: number) => {
        if (index >= 10) {
            return
        }
        return <tr>
        <td>{el.category}</td>
        <td>{el.name}</td>
        <td>{el.date}</td>
        <td>{el.documentsNumber}</td>
        <td className="documents_table--icon" style={{width: '30px'}}><DownloadIcon/></td>
        <td className="documents_table--save">Скачать <br/>({el.size})</td>
    </tr>
    })


    return <table className="documents_table">

        <thead className="documents_table_theab">
            <tr>
                <th className="documents_table--col-category">Категория</th>
                <th className="documents_table--col-name">Наименование </th>
                <th>Дата</th>
                <th>Номер</th>
                <th className="documents_table--icon"><FileIcon/></th>
                <th>Содержание</th>
            </tr>
        </thead>

        <tbody>
            {arrTableDocs}
        </tbody>

    </table>
}