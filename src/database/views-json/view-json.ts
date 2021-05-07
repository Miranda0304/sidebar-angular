export const views_json = {
    data: [
        {
            id_view: "view_home",
            forms: [],
            tables: [],
            contextual_area: ''
        },
        {
            id_view: "view_contact",
            forms: ['person',],
            tables: ['tpersons'],
            contextual_area: ''
        },
        {
            id_view: "view_book_dates",
            forms: [],
            tables: ['tpersons', 'tclients'],
            contextual_area: ''
        },
        {
            id_view: "view_sales",
            forms: ['person','form_user'],
            tables: ['tclients'],
            contextual_area: ''
        }
    ],
    message: 'ok'
}