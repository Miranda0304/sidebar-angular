export const views_json = {
    data: [
        {
            id_view: "/main/home",
            forms: [],
            tables: [],
            contextual_area: ''
        },
        {
            id_view: "/main/contacts",
            forms: ['person',],
            tables: ['tpersons'],
            contextual_area: ''
        },
        {
            id_view: "/main/dms",
            forms: [],
            tables: ['tpersons', 'tclients'],
            contextual_area: ''
        },
        {
            id_view: "/main/epm",
            forms: ['person', 'form_user'],
            tables: ['tclients'],
            contextual_area: ''
        }
    ],
    message: 'ok'
}