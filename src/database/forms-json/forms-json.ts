export const forms_json = {
    data: [
        {
            id: "a", field_name: '0', form_name: 'form_user', colspan: 12, label_required: true, field_title: 'Datos Personales',
            field_type: 'legend', field_id: null, field_class: "text-left", field_placeholder: null, autocomplete: null,
            required: null, text_len_min: null, text_len_max: null, field_x: 0, field_y: 0, ordinal: 0
        },
        {
            id: "b", field_name: 'hr1', form_name: 'form_user', colspan: 12, label_required: false, field_title: 'Hr',
            field_type: 'hr', field_id: null, field_class: null, field_placeholder: null, autocomplete: null,
            required: null, text_len_min: null, text_len_max: null, field_x: 0, field_y: 0, ordinal: 0
        },
        {
            id: "c", field_name: 'name', form_name: 'form_user', colspan: 5, label_required: true, field_title: 'Nombre',
            field_type: 'text', field_id: 'input_expedient_first_name', field_class: 'form-control', field_placeholder: 'Nombre', autocomplete: 'off',
            required: true, text_len_min: 6, text_len_max: 11, field_x: 0, field_y: 0, ordinal: 2
        },
        {
            id: "d", field_name: 'last_name', form_name: 'form_user', colspan: 5, label_required: true, field_title: 'Apellido',
            field_type: 'text', field_id: 'input_expedient_last_name', field_class: 'form-control', field_placeholder: 'Apellido', autocomplete: 'off',
            required: true, text_len_min: 4, text_len_max: 10, field_x: 0, field_y: 0, ordinal: 2
        },
        {
            id: "e", field_name: '3', form_name: 'form_user', colspan: 2, label_required: true, field_title: 'Edad',
            field_type: 'number', field_id: 'input_expedient_age', field_class: 'form-control', field_placeholder: 'Edad', autocomplete: 'off',
            required: true, text_len_min: 2, text_len_max: 10, field_x: 0, field_y: 0, ordinal: 2
        },
        {
            id: "f", field_name: '01', form_name: 'form_address', colspan: 12, label_required: true, field_title: 'Domicilio',
            field_type: 'legend', field_id: null, field_class: 'text-center', field_placeholder: null, autocomplete: null,
            required: null, text_len_min: null, text_len_max: null, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "g", field_name: 'hr2', form_name: 'form_address', colspan: 12, label_required: false, field_title: 'Hr',
            field_type: 'hr', field_id: null, field_class: null, field_placeholder: null, autocomplete: null,
            required: null, text_len_min: null, text_len_max: null, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "h", field_name: '5', form_name: 'form_address', colspan: 12, label_required: false, field_title: 'Dirección',
            field_type: 'textarea', field_id: 'input_expedient_address', field_class: 'form-control', field_placeholder: 'Dirección', autocomplete: 'off',
            required: true, text_len_min: 2, text_len_max: 10, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "i", field_name: '6', form_name: 'form_address', colspan: 12, label_required: true, field_title: 'Referencias',
            field_type: 'textarea', field_id: 'input_references', field_class: 'form-control', field_placeholder: 'Referencias', autocomplete: 'off',
            required: true, text_len_min: 0, text_len_max: 0, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "j", field_name: '7', form_name: 'form_others', colspan: 12, label_required: true, field_title: 'Otros',
            field_type: 'legend', field_id: null, field_class: 'text-right', field_placeholder: null, autocomplete: null,
            required: null, text_len_min: null, text_len_max: null, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "k", field_name: 'hr3', form_name: 'form_others', colspan: 12, label_required: false, field_title: 'Hr',
            field_type: 'hr', field_id: null, field_class: null, field_placeholder: null, autocomplete: null,
            required: null, text_len_min: null, text_len_max: null, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "l", field_name: '8', form_name: 'form_others', colspan: 2, label_required: true, field_title: 'Check 1',
            field_type: 'checkbox', field_id: 'input_expedient_checkbox', field_class: 'form-check-input', field_placeholder: null, autocomplete: 'off',
            required: true, text_len_min: 0, text_len_max: 0, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "m", field_name: 'group_1', form_name: 'form_others', colspan: 2, label_required: true, field_title: 'Hombre',
            field_type: 'radiobutton', field_id: 'input_expedient_radiobutton_1', field_class: 'form-check-input', field_placeholder: 'Hombre', autocomplete: 'off',
            required: false, text_len_min: 0, text_len_max: 0, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "n", field_name: 'group_1', form_name: 'form_others', colspan: 2, label_required: true, field_title: 'Mujer',
            field_type: 'radiobutton', field_id: 'input_expedient_radiobutton_2', field_class: 'form-check-input', field_placeholder: 'Mujer', autocomplete: 'off',
            required: false, text_len_min: 0, text_len_max: 0, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "o", field_name: 'group_2', form_name: 'form_others', colspan: 2, label_required: true, field_title: 'O+',
            field_type: 'radiobutton', field_id: 'input_expedient_radiobutton_3', field_class: 'form-check-input', field_placeholder: 'O+', autocomplete: 'off',
            required: false, text_len_min: 0, text_len_max: 0, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "p", field_name: 'group_2', form_name: 'form_others', colspan: 2, label_required: true, field_title: 'O-',
            field_type: 'radiobutton', field_id: 'input_expedient_radiobutton_4', field_class: 'form-check-input', field_placeholder: 'O-', autocomplete: 'off',
            required: false, text_len_min: 0, text_len_max: 0, field_x: 0, field_y: 0, ordinal: 5
        },
        {
            id: "q", field_name: '11', form_name: 'form_others', colspan: 2, label_required: true, field_title: 'Click me',
            field_type: 'button', field_id: 'input_expedient_button', field_class: 'btn btn-primary', field_placeholder: null, autocomplete: 'off',
            required: false, text_len_min: 0, text_len_max: 0, field_x: 0, field_y: 0, ordinal: 5
        },
    ]
}