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
            forms: ['person','form_user', 'form_address', 'form_others'],
            tables: ['tclients'],
            contextual_area: ''
        },
        {
            id_view: "view_book_dates",
            forms: [],
            tables: ['tpersons', 'tclients'],
            contextual_area: ''
        },
        {
            id_view: "view_attached_0",
            forms: [],
            tables: ['tclients'],
            contextual_area: ''
        }
    ],
    message: 'ok'
}