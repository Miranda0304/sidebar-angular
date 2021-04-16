export const forms_json = {
    data: [
        {
            id:"a", field_name: '0', form_name: 'form_user', colspan: '12', label_require: true, field_title: 'Datos Personales', field_type: 'legend',
            field_id: null, field_class: "text-left", field_placeholder: null, autocomplete: null, required: null, text_len_min: null, text_len_max: null
        },
        {
            id:"b", field_name: 'hr1', form_name: 'form_user', colspan: '12', label_require: false, field_title: 'Hr', field_type: 'hr', field_id: null, field_class: null,
            field_placeholder: null, autocomplete: null, required: null, text_len_min: null, text_len_max: null
        },
        {
            id:"c", field_name: 'name', form_name: 'form_user', colspan: '5', label_require: true, field_title: 'Nombre', field_type: 'text', field_id: 'input_expedient_first_name', field_class: 'form-control',
            field_placeholder: 'Nombre', autocomplete: 'off', required: true, text_len_min: 5, text_len_max: 11
        },
        {
            id:"d", field_name: 'last_name', form_name: 'form_user', colspan: '5', label_require: true, field_title: 'Apellido', field_type: 'text', field_id: 'input_expedient_last_name', field_class: 'form-control',
            field_placeholder: 'Apellido', autocomplete: 'off', required: true, text_len_min: 4, text_len_max: 10
        },
        {
            id:"e", field_name: '3', form_name: 'form_user', colspan: '2', label_require: true, field_title: 'Edad', field_type: 'number', field_id: 'input_expedient_age', field_class: 'form-control',
            field_placeholder: 'Edad', autocomplete: 'off', required: true, text_len_min: 2, text_len_max: 10
        },
        {
            id:"f", field_name: '01', form_name: 'form_address', colspan: '12', label_require: true, field_title: 'Domicilio', field_type: 'legend', field_id: null, field_class: 'text-center',
            field_placeholder: null, autocomplete: null, required: null, text_len_min: null, text_len_max: null
        },
        {
            id:"g", field_name: 'hr2', form_name: 'form_address', colspan: '12', label_require: false, field_title: 'Hr', field_type: 'hr', field_id: null, field_class: null,
            field_placeholder: null, autocomplete: null, required: null, text_len_min: null, text_len_max: null
        },
        {
            id:"h", field_name: '5', form_name: 'form_address', colspan: '12', label_require: false, field_title: 'Dirección', field_type: 'textarea', field_id: 'input_expedient_address', field_class: 'form-control',
            field_placeholder: 'Dirección', autocomplete: 'off', required: false, text_len_min: 1, text_len_max: 10
        },
        {
            id:"i", field_name: '6', form_name: 'form_address', colspan: '12', label_require: true, field_title: 'Referencias', field_type: 'textarea', field_id: 'input_references', field_class: 'form-control',
            field_placeholder: 'Referencias', autocomplete: 'off', required: true, text_len_min: 0, text_len_max: 0
        },
        {
            id:"j", field_name: '7', form_name: 'form_others', colspan: '12', label_require: true, field_title: 'Otros', field_type: 'legend', field_id: null, field_class: 'text-right',
            field_placeholder: null, autocomplete: null, required: null, text_len_min: null, text_len_max: null
        },
        {
            id:"k", field_name: 'hr3', form_name: 'form_others', colspan: '12', label_require: false, field_title: 'Hr', field_type: 'hr', field_id: null, field_class: null,
            field_placeholder: null, autocomplete: null, required: null, text_len_min: null, text_len_max: null
        },
        {
            id:"l", field_name: '8', form_name: 'form_others', colspan: '2', label_require: true, field_title: 'Check 1', field_type: 'checkbox', field_id: 'input_expedient_checkbox', field_class: 'form-check-input',
            field_placeholder: null, autocomplete: 'off', required: true, text_len_min: 0, text_len_max: 0
        },
        {
            id:"m", field_name: '9', form_name: 'form_others', colspan: '2', label_require: true, field_title: 'Radio 1 - Grupo 1', field_type: 'radiobutton', field_id: 'input_expedient_radiobutton_1', field_class: 'form-check-input',
            field_placeholder: 'group1', autocomplete: 'off', required: false, text_len_min: 0, text_len_max: 0
        },
        {
            id:"n", field_name: '10', form_name: 'form_others', colspan: '2', label_require: true, field_title: 'Radio 2 - Grupo 1', field_type: 'radiobutton', field_id: 'input_expedient_radiobutton_2', field_class: 'form-check-input',
            field_placeholder: 'group1', autocomplete: 'off', required: false, text_len_min: 0, text_len_max: 0
        },

        {
            id:"o", field_name: '11', form_name: 'form_others', colspan: '2', label_require: true, field_title: 'Click me', field_type: 'button', field_id: 'input_expedient_button', field_class: 'btn btn-primary',
            field_placeholder: null, autocomplete: 'off', required: false, text_len_min: 0, text_len_max: 0
        },
    ]
}