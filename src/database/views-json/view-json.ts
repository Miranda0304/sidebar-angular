export const views_json = {
    data: [
        {
            path_view: "main/home",
            forms: [],
            tables: [],
            contextual_area: ''
        },
        {
            path_view: "main/contacts",
            forms: ['person',],
            tables: ['tpersons'],
            contextual_area: ''
        },
        {
            path_view: "main/dms",
            forms: [],
            tables: ['tpersons', 'tclients'],
            contextual_area: ''
        },
        {
            path_view: "main/epm",
            forms: [ 'form_user'],
            tables: ['tclients'],
            contextual_area: ''
        }
    ],
    message: 'ok'
}