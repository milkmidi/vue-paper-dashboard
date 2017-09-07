<template lang="pug">
div
  .card
    .card-content
      .row
        .col-md-4
          h4.card-title Datetime Picker
          .form-group
            .el-date-editor.el-input.el-date-editor--datetime
              i.el-input__icon.el-icon-time
              input.el-input__inner(autocomplete='off', placeholder='Select date and time', type='text', rows='2')
        .col-md-4
          h4.card-title Date Picker
          .form-group
            .el-date-editor.el-input.el-date-editor--date
              i.el-input__icon.el-icon-date
              input.el-input__inner(autocomplete='off', placeholder='Pick a day', type='text', rows='2')
        .col-md-4
          h4.card-title Time Picker
          .form-group
            .el-date-editor.el-input.el-date-editor--time
              // 
              i.el-input__icon.el-icon-time
              input.el-input__inner(autocomplete='off', placeholder='Select time', type='text', rows='2')
      br
      br
      .row
        .col-md-6
          h4.card-title Switches
          .col-md-4
            p.category Default  
            .bootstrap-switch.bootstrap-switch-wrapper.bootstrap-switch-animate.bootstrap-switch-on
              .bootstrap-switch-container
                span.bootstrap-switch-handle-on.bootstrap-switch-primary
                  | ON
                span.bootstrap-switch-label
                span.bootstrap-switch-handle-off.bootstrap-switch-default
                  | OFF
            .bootstrap-switch.bootstrap-switch-wrapper.bootstrap-switch-animate.bootstrap-switch-off
              .bootstrap-switch-container
                span.bootstrap-switch-handle-on.bootstrap-switch-primary
                  | ON
                span.bootstrap-switch-label
                span.bootstrap-switch-handle-off.bootstrap-switch-default
                  | OFF
          .col-md-4
            p.category Plain
            switch-component
          
            .bootstrap-switch.bootstrap-switch-wrapper.bootstrap-switch-animate.bootstrap-switch-off
              .bootstrap-switch-container
                span.bootstrap-switch-handle-on.bootstrap-switch-
                span.bootstrap-switch-label
                span.bootstrap-switch-handle-off.bootstrap-switch-default
          .col-md-4
            p.category With Icons
            .bootstrap-switch.bootstrap-switch-wrapper.bootstrap-switch-animate.bootstrap-switch-on
              .bootstrap-switch-container
                span.bootstrap-switch-handle-on.bootstrap-switch-
                  i.fa.fa-check
                span.bootstrap-switch-label
                span.bootstrap-switch-handle-off.bootstrap-switch-default
                  i.fa.fa-times
            .bootstrap-switch.bootstrap-switch-wrapper.bootstrap-switch-animate.bootstrap-switch-off
              .bootstrap-switch-container
                span.bootstrap-switch-handle-on.bootstrap-switch-
                  i.fa.fa-check
                span.bootstrap-switch-label
                span.bootstrap-switch-handle-off.bootstrap-switch-default
                  i.fa.fa-times
        .col-md-3
          h4.card-title Checkboxes
          .checkbox
            input#761f55439712d(type='checkbox')
            label(for='761f55439712d') Unchecked
          .checkbox
            input#874170fbdcb0d(type='checkbox')
            label(for='874170fbdcb0d') Checked
          .checkbox
            input#391dd7c3bec7a(type='checkbox', disabled='disabled')
            label(for='391dd7c3bec7a') Disabled unchecked
          .checkbox
            input#1599eac94e2c8(type='checkbox', disabled='disabled')
            label(for='1599eac94e2c8') Disabled checked
        .col-sm-3
          h4.card-title Radio
          .n-radio.radio.radio-neutral
            input#1bd63380b0919(type='radio', value='1')
            label(for='1bd63380b0919') Radio is off
          .n-radio.radio.radio-neutral
            input#f2e0dba5d12c2(type='radio', value='2')
            label(for='f2e0dba5d12c2') Radio is on
          .n-radio.radio.radio-neutral
            input#9b09a48e31026(type='radio', disabled='disabled', value='1')
            label(for='9b09a48e31026') Disabled radio is off
          .n-radio.radio.radio-neutral
            input#1fae890fc6467(type='radio', disabled='disabled', value='2')
            label(for='1fae890fc6467') Disabled radio is on
      br
      br
      .row
        .col-md-6
          h4.card-title Tags
          span.el-tag.el-tag--primary
            | Tag 1
            i.el-tag__close.el-icon-close
          span.el-tag.el-tag--primary
            | Tag 2
            i.el-tag__close.el-icon-close
          span.el-tag.el-tag--primary
            | Tag 3
            i.el-tag__close.el-icon-close
          input.form-control.input-new-tag(type='text', placeholder='Add new tag', size='mini')
          br
          h4.card-title Progress Bars
          .progress
            .progress-bar.progress-bar-default(role='progressbar', aria-valuenow='30', aria-valuemin='0', aria-valuemax='100', style='width: 30%;')
              span.sr-only
          .progress
            .progress-bar.progress-bar-info(role='progressbar', aria-valuenow='60', aria-valuemin='0', aria-valuemax='100', style='width: 60%;')
              span.sr-only
          .progress
            .progress-bar.progress-bar-success(style='width: 35%;')
              span.sr-only
            .progress-bar.progress-bar-warning(style='width: 20%;')
              span.sr-only
            .progress-bar.progress-bar-danger(style='width: 10%;')
              span.sr-only
          br
          h4.card-title Sliders
          .el-slider.slider-success
            .el-slider__runway
              .el-slider__bar(style='width: 30%; left: 0%;')
              .el-slider__button-wrapper(style='left: 30%;')
                .el-slider__button.el-tooltip              
          br
          .el-slider.slider-info
            .el-slider__runway
              .el-slider__bar(style='width: 30%; left: 20%;')
              .el-slider__button-wrapper(style='left: 20%;')
                .el-slider__button.el-tooltip
              .el-slider__button-wrapper(style='left: 50%;')
                .el-slider__button.el-tooltip
             
        .col-md-6
          h4.card-title Customisable Select
          .row
            .col-sm-6
              .el-select.select-danger
                .el-input.el-input--large
                  i.el-input__icon.el-icon-caret-top
                  input.el-input__inner(autocomplete='off', placeholder='Single Select', size='large', readonly='readonly', icon='caret-top', type='text', rows='2')
                .el-select-dropdown(style='display: none; min-width: 216px;')
                  .el-scrollbar(style='')
                    .el-select-dropdown__wrap.el-scrollbar__wrap(style='margin-bottom: -17px; margin-right: -17px;')
                      ul.el-scrollbar__view.el-select-dropdown__list(style='position: relative;')
                        li.el-select-dropdown__item.select-danger
                          span Bahasa Indonesia
                        li.el-select-dropdown__item.select-danger
                          span Bahasa Melayu
                        li.el-select-dropdown__item.select-danger
                          span Català
                        li.el-select-dropdown__item.select-danger
                          span Dansk
                        li.el-select-dropdown__item.select-danger
                          span Deutsch
                        li.el-select-dropdown__item.select-danger
                          span English
                        li.el-select-dropdown__item.select-danger
                          span Español
                        li.el-select-dropdown__item.select-danger
                          span Eλληνικά
                        li.el-select-dropdown__item.select-danger
                          span Français
                        li.el-select-dropdown__item.select-danger
                          span Italiano
                        li.el-select-dropdown__item.select-danger
                          span Magyar
                        li.el-select-dropdown__item.select-danger
                          span Nederlands
                        li.el-select-dropdown__item.select-danger
                          span Norsk
                        li.el-select-dropdown__item.select-danger
                          span Polski
                        li.el-select-dropdown__item.select-danger
                          span Português
                        li.el-select-dropdown__item.select-danger
                          span Suomi
                        li.el-select-dropdown__item.select-danger
                          span Svenska
                        li.el-select-dropdown__item.select-danger
                          span Türkçe
                        li.el-select-dropdown__item.select-danger
                          span Íslenska
                        li.el-select-dropdown__item.select-danger
                          span Čeština
                        li.el-select-dropdown__item.select-danger
                          span Русский
                        li.el-select-dropdown__item.select-danger
                          span ภาษาไทย
                        li.el-select-dropdown__item.select-danger
                          span 中文 (简体)
                        li.el-select-dropdown__item.select-danger
                          span W">中文 (繁體)
                        li.el-select-dropdown__item.select-danger
                          span 日本語
                        li.el-select-dropdown__item.select-danger
                          span 한국어
                        .resize-triggers
                          .expand-trigger
                            div(style='width: 1px; height: 1px;')
                          .contract-trigger
                    .el-scrollbar__bar.is-horizontal
                      .el-scrollbar__thumb(style='transform: translateX(0%);')
                    .el-scrollbar__bar.is-vertical
                      .el-scrollbar__thumb(style='transform: translateY(0%);')
                .resize-triggers
                  .expand-trigger
                    div(style='width: 217px; height: 43px;')
                  .contract-trigger
            .col-sm-6
              .el-select.select-primary
                .el-select__tags(style='max-width: 184px;')
                  span
                .el-input.el-input--large
                  i.el-input__icon.el-icon-caret-top
                  input.el-input__inner(autocomplete='off', placeholder='Multiple Select', size='large', readonly='readonly', icon='caret-top', type='text', rows='2', style='height: 42px;')
                .el-select-dropdown.is-multiple(style='display: none; min-width: 216px;')
                  .el-scrollbar(style='')
                    .el-select-dropdown__wrap.el-scrollbar__wrap(style='margin-bottom: -17px; margin-right: -17px;')
                      ul.el-scrollbar__view.el-select-dropdown__list(style='position: relative;')
                        li.el-select-dropdown__item.select-primary
                          span Bahasa Indonesia
                        li.el-select-dropdown__item.select-primary
                          span Bahasa Melayu
                        li.el-select-dropdown__item.select-primary
                          span Català
                        li.el-select-dropdown__item.select-primary
                          span Dansk
                        li.el-select-dropdown__item.select-primary
                          span Deutsch
                        li.el-select-dropdown__item.select-primary
                          span English
                        li.el-select-dropdown__item.select-primary
                          span Español
                        li.el-select-dropdown__item.select-primary
                          span Eλληνικά
                        li.el-select-dropdown__item.select-primary
                          span Français
                        li.el-select-dropdown__item.select-primary
                          span Italiano
                        li.el-select-dropdown__item.select-primary
                          span Magyar
                        li.el-select-dropdown__item.select-primary
                          span Nederlands
                        li.el-select-dropdown__item.select-primary
                          span Norsk
                        li.el-select-dropdown__item.select-primary
                          span Polski
                        li.el-select-dropdown__item.select-primary
                          span Português
                        li.el-select-dropdown__item.select-primary
                          span Suomi
                        li.el-select-dropdown__item.select-primary
                          span Svenska
                        li.el-select-dropdown__item.select-primary
                          span Türkçe
                        li.el-select-dropdown__item.select-primary
                          span Íslenska
                        li.el-select-dropdown__item.select-primary
                          span Čeština
                        li.el-select-dropdown__item.select-primary
                          span Русский
                        li.el-select-dropdown__item.select-primary
                          span ภาษาไทย
                        li.el-select-dropdown__item.select-primary
                          span 中文 (简体)
                        li.el-select-dropdown__item.select-primary
                          span W">中文 (繁體)
                        li.el-select-dropdown__item.select-primary
                          span 日本語
                        li.el-select-dropdown__item.select-primary
                          span 한국어
                        .resize-triggers
                          .expand-trigger
                            div(style='width: 1px; height: 1px;')
                          .contract-trigger
                    .el-scrollbar__bar.is-horizontal
                      .el-scrollbar__thumb(style='transform: translateX(0%);')
                    .el-scrollbar__bar.is-vertical
                      .el-scrollbar__thumb(style='transform: translateY(0%);')
                .resize-triggers
                  .expand-trigger
                    div(style='width: 217px; height: 43px;')
                  .contract-trigger
            .col-sm-6
              br
              h4.card-title Dropdown
              .dropdown
                button.btn.btn-block.dropdown-toggle(data-toggle='dropdown')
                  | Regular
                  b.caret
                ul.dropdown-menu
                  li
                    a(href='javascript:void(0)') Action
                  li
                    a(href='javascript:void(0)') Another action
                  li
                    a(href='javascript:void(0)') Something else here
                  li.divider
                  li
                    a(href='javascript:void(0)') Separated link
                  li.divider
                  li
                    a(href='javascript:void(0)') One more separated link
            .col-sm-6
              br
              h4.card-title Dropup
              .dropup
                button.btn.btn-block.dropdown-toggle(data-toggle='dropdown')
                  | Regular
                  b.caret
                
                drop-down(title="5 Notifications" icon="ti-bell")
                  a.dropdown-item(href='javascript:void(0)') Action
                  a.dropdown-item(href='javascript:void(0)') Another action
                  a.dropdown-item(href='javascript:void(0)') Something else here
                  a.dropdown-item(href='javascript:void(0)') Separated link
                  a.dropdown-item(href='javascript:void(0)') One more separated link
      br
      br

</template>

<script>
import Switch from '../../UIComponents/Inputs/Switch.vue';

export default {
  components: {
    'switch-component': Switch,
  },
};
</script>
