export const tables_json = {
    data: [
        ///////////////Table 1
        {
            table_name: 'tpersons',
            order: 1,
            title: 'Tabla de Usuarios',
            text_align: null,
            theme_table: 'table table-sm', //table table-dark, table-hover, table-sm
            theme_header: '',
            active: true,
            header: [
                {
                    field_name: 'id'
                },
                {
                    field_name: 'name'
                },
                {
                    field_name: 'last_name_father'
                },
                {
                    field_name: 'last_name_mother'
                },
            ],
            informations: [
                {id: 1, name: "Andrea", last_name_father: "Vargas", last_name_mother: "brito", middle_name: "del carmen"},
                {id: 2, name: "Andrea", last_name_father: "Vargas", last_name_mother: "brito", middle_name: "del carmen"}
            ]
        },
        ///////////////Table 2
        {
            table_name: 'tclients',
            order: 2,
            title: 'Tabla de Adjuntos',
            text_align: null,
            theme_table: 'table table-sm', //table table-dark, table-hover, table-sm
            theme_header: '',
            active: true,
            header: [
                {
                    field_name: 'File Name',
                    //width: null
                },
                {
                    field_name: 'Type',
                    //width: null
                },
                {
                    field_name: 'User upload',
                    //width: null
                }
            ],
            // informations: [
            //     {
            //         td: [
            //             {
            //                 information: 'Training'
            //             },
            //             {
            //                 information: 'PDF'
            //             },
            //             {
            //                 information: 'FLOWER'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Presentation 1'
            //             },
            //             {
            //                 information: 'PPT'
            //             },
            //             {
            //                 information: 'REMBERITO'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Nav JSON'
            //             },
            //             {
            //                 information: 'XSC'
            //             },
            //             {
            //                 information: 'LUISACS'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Training'
            //             },
            //             {
            //                 information: 'PDF'
            //             },
            //             {
            //                 information: 'FLOWER'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Presentation 1'
            //             },
            //             {
            //                 information: 'PPT'
            //             },
            //             {
            //                 information: 'REMBERITO'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Nav JSON'
            //             },
            //             {
            //                 information: 'XSC'
            //             },
            //             {
            //                 information: 'LUISACS'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Training'
            //             },
            //             {
            //                 information: 'PDF'
            //             },
            //             {
            //                 information: 'FLOWER'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Presentation 1'
            //             },
            //             {
            //                 information: 'PPT'
            //             },
            //             {
            //                 information: 'REMBERITO'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Nav JSON'
            //             },
            //             {
            //                 information: 'XSC'
            //             },
            //             {
            //                 information: 'LUISACS'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Training'
            //             },
            //             {
            //                 information: 'PDF'
            //             },
            //             {
            //                 information: 'FLOWER'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Presentation 1'
            //             },
            //             {
            //                 information: 'PPT'
            //             },
            //             {
            //                 information: 'REMBERITO'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Nav JSON'
            //             },
            //             {
            //                 information: 'XSC'
            //             },
            //             {
            //                 information: 'LUISACS'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Training'
            //             },
            //             {
            //                 information: 'PDF'
            //             },
            //             {
            //                 information: 'FLOWER'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Presentation 1'
            //             },
            //             {
            //                 information: 'PPT'
            //             },
            //             {
            //                 information: 'REMBERITO'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Nav JSON'
            //             },
            //             {
            //                 information: 'XSC'
            //             },
            //             {
            //                 information: 'LUISACS'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Training'
            //             },
            //             {
            //                 information: 'PDF'
            //             },
            //             {
            //                 information: 'FLOWER'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Presentation 1'
            //             },
            //             {
            //                 information: 'PPT'
            //             },
            //             {
            //                 information: 'REMBERITO'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Nav JSON'
            //             },
            //             {
            //                 information: 'XSC'
            //             },
            //             {
            //                 information: 'LUISACS'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Training'
            //             },
            //             {
            //                 information: 'PDF'
            //             },
            //             {
            //                 information: 'FLOWER'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Presentation 1'
            //             },
            //             {
            //                 information: 'PPT'
            //             },
            //             {
            //                 information: 'REMBERITO'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Nav JSON'
            //             },
            //             {
            //                 information: 'XSC'
            //             },
            //             {
            //                 information: 'LUISACS'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Training'
            //             },
            //             {
            //                 information: 'PDF'
            //             },
            //             {
            //                 information: 'FLOWER'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Presentation 1'
            //             },
            //             {
            //                 information: 'PPT'
            //             },
            //             {
            //                 information: 'REMBERITO'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Nav JSON'
            //             },
            //             {
            //                 information: 'XSC'
            //             },
            //             {
            //                 information: 'LUISACS'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Training'
            //             },
            //             {
            //                 information: 'PDF'
            //             },
            //             {
            //                 information: 'FLOWER'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Presentation 1'
            //             },
            //             {
            //                 information: 'PPT'
            //             },
            //             {
            //                 information: 'REMBERITO'
            //             }
            //         ]
            //     },
            //     {
            //         td: [
            //             {
            //                 information: 'Nav JSON'
            //             },
            //             {
            //                 information: 'XSC'
            //             },
            //             {
            //                 information: 'LUISACS'
            //             }
            //         ]
            //     },
            // ]
        },
    ]
}