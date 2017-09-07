<template lang="pug">
.row
  .col-md-6
    .card
      form(method='#', action='#')
        .card-header
          h4.card-title
            | Stacked Form
        .card-body
          .form-group
            label Email address
            input.form-control(type='email', placeholder='Enter email')
          .form-group
            label Password
            input.form-control(type='password', placeholder='Password')
          .checkbox
            input#1bddf19321ef5(type='checkbox')
            label(for='1bddf19321ef5') Subscribe to newsletter
          button.btn.btn-fill.btn-info(type='submit') Submit
  .col-md-6
    .card
      form.form-horizontal
        .card-header
          h4.card-title
            | Horizontal Form
        .card-body
          .form-group.row
            label.col-md-3.col-form-label Email
            .col-md-9
              input.form-control(type='email', placeholder='Email')
          .form-group.row
            label.col-md-3.col-form-label Password
            .col-md-9
              input.form-control(type='password', placeholder='Password')
          .form-group.row
            label.col-md-3
            .checkbox.col-md-9
              input#9d9e8d6431958(type='checkbox')
              label(for='9d9e8d6431958') Remember me
        .card-footer
          .form-group
            label.col-md-3
            .col-md-9
              button.btn.btn-fill.btn-info(type='submit')
                | Sign in
  .col-md-12
    .card
      .card-header
        h4.card-title Form Elements
      .card-body
        form.form-horizontal(method='get', action='/')
          fieldset
            .form-group.row
              label.col-sm-2.col-form-label With help
              .col-sm-10
                input.form-control(type='text')
                span.help-block A block of help text that breaks onto a new line.
          fieldset
            .form-group.row
              label.col-sm-2.col-form-label Password
              .col-sm-10
                input.form-control(type='password', name='password')
          fieldset
            .form-group.row
              label.col-sm-2.col-form-label Placeholder
              .col-sm-10
                input.form-control(type='text', placeholder='placeholder')
          fieldset
            .form-group.row
              label.col-sm-2.col-form-label Disabled
              .col-sm-10
                input.form-control(type='text', placeholder='Disabled input here...', disabled='disabled')
          fieldset
            .form-group.row
              label.col-sm-2.col-form-label Static control
              .col-sm-10
                p.form-control-static hello@creative-tim.com
          fieldset
            .form-group.row
              label.col-sm-2.col-form-label Checkboxes and radios
              .col-sm-10
                .checkbox
                  input#0626e90500656(type='checkbox')
                  label(for='0626e90500656') First checkbox
                .checkbox
                  input#fd7bccb5645d9(type='checkbox')
                  label(for='fd7bccb5645d9') Second checkbox
                .n-radio.radio.radio-neutral
                  input#331623789a2e2(type='radio', value='1')
                  label(for='331623789a2e2') First Radio
                .n-radio.radio.radio-neutral
                  input#dcf1fec33713a(type='radio', value='2')
                  label(for='dcf1fec33713a') Second Radio
          fieldset
            .form-group.row
              label.col-sm-2.col-form-label Inline checkboxes
              .col-sm-10
                .form-check.form-check-inline
                  .checkbox.checkbox-inline
                    input#d129c02808421(type='checkbox')
                    label(for='d129c02808421') a
                .form-check.form-check-inline
                  .checkbox.checkbox-inline
                    input#55606443da2e3(type='checkbox')
                    label(for='55606443da2e3') b
                .form-check.form-check-inline
                  .checkbox.checkbox-inline
                    input#7170af65cb683(type='checkbox')
                    label(for='7170af65cb683') c
          fieldset
            legend Input Variants
            .form-group.row
              label.col-sm-2.col-form-label Custom Checkboxes & radios
              .col-sm-4.col-sm-offset-1
                .checkbox
                  input#e0e4397f3102a(type='checkbox')
                  label(for='e0e4397f3102a') Unchecked
                .checkbox
                  input#98b9282aecb9a(type='checkbox')
                  label(for='98b9282aecb9a') Unchecked
                .checkbox
                  input#2432cda15ca62(type='checkbox', disabled='disabled')
                  label(for='2432cda15ca62') Disabled unchecked
                .checkbox
                  input#7f9223e10a54e(type='checkbox', disabled='disabled')
                  label(for='7f9223e10a54e') Disabled checked
              .col-sm-5
                .n-radio.radio.radio-neutral
                  input#69ccadd3a7a1f(type='radio', value='1')
                  label(for='69ccadd3a7a1f') Radio is off
                .n-radio.radio.radio-neutral
                  input#e00515e439eb8(type='radio', value='2')
                  label(for='e00515e439eb8') Radio is on
                .n-radio.radio.radio-neutral
                  input#6a3db21602edf(type='radio', disabled='disabled', value='1')
                  label(for='6a3db21602edf') Disabled radio is off
                .n-radio.radio.radio-neutral
                  input#2f293ac73b569(type='radio', disabled='disabled', value='2')
                  label(for='2f293ac73b569') Disabled radio is on
          fieldset
            .form-group.has-success.row
              label.col-sm-2.col-form-label Input with success
              .col-sm-10
                input.form-control(type='text', value='Success')
          fieldset
            .form-group.has-error.row
              label.col-sm-2.col-form-label Input with error
              .col-sm-10
                input.form-control(type='text', value='Error')
          fieldset
            .form-group.column-sizing.row
              label.col-sm-2.col-form-label Column sizing
              .col-sm-10
                .row
                  .col-md-3
                    input.form-control(type='text', placeholder='.col-md-3')
                  .col-md-4
                    input.form-control(type='text', placeholder='.col-md-4')
                  .col-md-5
                    input.form-control(type='text', placeholder='.col-md-5')
          fieldset
            .form-group.row
              label.col-sm-2.col-form-label Input groups
              .col-sm-3
                .input-group
                  span.input-group-addon @
                  input.form-control(type='text', placeholder='Username')
              .col-sm-3
                .input-group
                  input.form-control(type='text')
                  span.input-group-addon .00
              .col-sm-4
                .input-group
                  span.input-group-addon $
                  input.form-control(type='text')
                  span.input-group-addon .00
          fieldset
            .form-group.row
              label.col-sm-2.col-form-label Textarea
              .col-sm-10
                textarea.form-control(placeholder='Here can be your nice text', rows='3')
  
</template>
