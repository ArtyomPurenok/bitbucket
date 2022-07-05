import React from "react"
import './DocumentsTable.scss'

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
        <td></td>
        <td>Скачать <br/>({el.size})</td>
    </tr>
    })


    return <table className="documents_table">

        <thead>
            <tr>
                <td className="aa">Категория</td>
                <td className="ab">Наименование </td>
                <td className="ac">Дата</td>
                <td className="ad">Номер</td>
                <td></td>
                <td className="ae">Содержание</td>
            </tr>
        </thead>

        <tbody>
            {arrTableDocs}
        </tbody>

    </table>
}