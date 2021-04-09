export const forms_json = {
    data: [
        {
            id: '0', form_id: 'form_user', size_col: 'col-md-12', have_label: true, label_title: 'Datos Personales', field_type: 'legend', field_id: null, field_class: "text-left",
            placeholder_name: null, autocomplete: null, is_require: null, min_length: null, max_length: null
        },
        {
            id: 'hr1', form_id: 'form_user', size_col: 'col-md-12', have_label: false, label_title: 'Hr', field_type: 'hr', field_id: null, field_class: null,
            placeholder_name: null, autocomplete: null, is_require: null, min_length: null, max_length: null
        },
        {
            id: '1', form_id: 'form_user', size_col: 'col-md-5', have_label: true, label_title: 'Nombre', field_type: 'text', field_id: 'input_expedient_first_name', field_class: 'form-control',
            placeholder_name: 'Nombre', autocomplete: 'off', is_require: true, min_length: 5, max_length: 11
        },
        {
            id: '2', form_id: 'form_user', size_col: 'col-md-5', have_label: true, label_title: 'Apellido', field_type: 'text', field_id: 'input_expedient_last_name', field_class: 'form-control',
            placeholder_name: 'Apellido', autocomplete: 'off', is_require: false, min_length: 4, max_length: 10
        },
        {
            id: '3', form_id: 'form_user', size_col: 'col-md-2', have_label: true, label_title: 'Edad', field_type: 'number', field_id: 'input_expedient_age', field_class: 'form-control',
            placeholder_name: 'Edad', autocomplete: 'off', is_require: true, min_length: 1, max_length: 10
        },
        {
            id: '01', form_id: 'form_address', size_col: 'col-md-12', have_label: true, label_title: 'Domicilio', field_type: 'legend', field_id: null, field_class: 'text-center',
            placeholder_name: null, autocomplete: null, is_require: null, min_length: null, max_length: null
        },
        {
            id: 'hr2', form_id: 'form_address', size_col: 'col-md-12', have_label: false, label_title: 'Hr', field_type: 'hr', field_id: null, field_class: null,
            placeholder_name: null, autocomplete: null, is_require: null, min_length: null, max_length: null
        },
        {
            id: '5', form_id: 'form_address', size_col: 'col-md-12', have_label: false, label_title: 'Dirección', field_type: 'textarea', field_id: 'input_expedient_address', field_class: 'form-control',
            placeholder_name: 'Dirección', autocomplete: 'off', is_require: false, min_length: 1, max_length: 10
        },
        {
            id: '6', form_id: 'form_address', size_col: 'col-md-12', have_label: true, label_title: 'Referencias', field_type: 'textarea', field_id: 'input_references', field_class: 'form-control',
            placeholder_name: 'Referencias', autocomplete: 'off', is_require: true, min_length: 0, max_length: 0
        },
        {
            id: '7', form_id: 'form_others', size_col: 'col-md-12', have_label: true, label_title: 'Otros', field_type: 'legend', field_id: null, field_class: 'text-right',
            placeholder_name: null, autocomplete: null, is_require: null, min_length: null, max_length: null
        },
        {
            id: 'hr3', form_id: 'form_others', size_col: 'col-md-12', have_label: false, label_title: 'Hr', field_type: 'hr', field_id: null, field_class: null,
            placeholder_name: null, autocomplete: null, is_require: null, min_length: null, max_length: null
        },
        {
            id: '8', form_id: 'form_others', size_col: 'col-md-2', have_label: true, label_title: 'Check 1', field_type: 'checkbox', field_id: 'input_expedient_checkbox', field_class: 'form-check-input',
            placeholder_name: null, autocomplete: 'off', is_require: true, min_length: 0, max_length: 0
        },
        {
            id: '9', form_id: 'form_others', size_col: 'col-md-2', have_label: true, label_title: 'Radio 1 - Grupo 1', field_type: 'radiobutton', field_id: 'input_expedient_radiobutton_1', field_class: 'form-check-input',
            placeholder_name: 'group1', autocomplete: 'off', is_require: false, min_length: 0, max_length: 0
        },
        {
            id: '10', form_id: 'form_others', size_col: 'col-md-2', have_label: true, label_title: 'Radio 2 - Grupo 1', field_type: 'radiobutton', field_id: 'input_expedient_radiobutton_2', field_class: 'form-check-input',
            placeholder_name: 'group1', autocomplete: 'off', is_require: false, min_length: 0, max_length: 0
        },

        {
            id: '11', form_id: 'form_others', size_col: 'col-md-2', have_label: true, label_title: 'Click me', field_type: 'button', field_id: 'input_expedient_button', field_class: 'btn btn-primary',
            placeholder_name: null, autocomplete: 'off', is_require: false, min_length: 0, max_length: 0
        },
    ]
}