export const form_expedient1 = [
    {
        id: '1', size_col: 'col-md-5', have_label: true, label_title: 'Nombre', field_type: 'text', field_id: 'input_expedient_first_name', field_class: 'form-control',
        placeholder_name: 'Nombre', autocomplete: 'off', isRequire: true, minLength: 5, maxLength: 11, formControl: 'FirstName'
    },
    {
        id: '2', size_col: 'col-md-5', have_label: true, label_title: 'Apellido', field_type: 'text', field_id: 'input_expedient_last_name', field_class: 'form-control',
        placeholder_name: 'Apellido', autocomplete: 'off', isRequire: false, minLength: 4, maxLength: 10, formControl: 'LastName'
    },
    {
        id: '3', size_col: 'col-md-2', have_label: true, label_title: 'Edad', field_type: 'number', field_id: 'input_expedient_age', field_class: 'form-control',
        placeholder_name: 'Edad', autocomplete: 'off', isRequire: true, minLength: 1, maxLength: 10, formControl: 'Age'
    },
    {
        id: '4', size_col: 'col-md-12', have_label: false, label_title: 'Dirección', field_type: 'textarea', field_id: 'input_expedient_address', field_class: 'form-control',
        placeholder_name: 'Dirección', autocomplete: 'off', isRequire: false, minLength: 1, maxLength: 10, formControl: 'Description'
    },

    {
        id: '5', size_col: 'col-md-12', have_label: false, label_title: 'Hr', field_type: 'hr', field_id: 'line_hr_1', field_class: 'hr',
        placeholder_name: 'hr', autocomplete: 'off', isRequire: false, minLength: 0, maxLength: 0, formControl: ''
    },

    {
        id: '6', size_col: 'col-md-12', have_label: true, label_title: 'Referencias', field_type: 'textarea', field_id: 'input_references', field_class: 'form-control', 
        placeholder_name: 'Referencias', autocomplete: 'off', isRequire: true, minLength: 0, maxLength: 0, formControl: 'References'
    },

    // { id: '7', size_col: 'col-md-2', have_label: true, label_title: 'Check 1', field_type: 'checkbox', field_id: 'input_expedient_checkbox', field_class: 'form-check-input', placeholder_name: '' },

    // { id: '8', size_col: 'col-md-2', have_label: true, label_title: 'Radio 1 - Grupo 1', field_type: 'radiobutton', field_id: 'input_expedient_radiobutton_1', field_class: 'form-check-input', placeholder_name: 'group1' },
    // { id: '9', size_col: 'col-md-2', have_label: true, label_title: 'Radio 2 - Grupo 1', field_type: 'radiobutton', field_id: 'input_expedient_radiobutton_2', field_class: 'form-check-input', placeholder_name: 'group1' },

    // { id: '10', size_col: 'col-md-2', have_label: true, label_title: 'Click me', field_type: 'button', field_id: 'input_expedient_button', field_class: 'btn btn-primary', placeholder_name: '' },
]