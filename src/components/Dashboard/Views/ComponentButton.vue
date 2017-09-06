<template lang="pug">
.content.buttons-with-margin
  .container-fluid
    .row
      .col-md-12
        .card
          .row
            .col-md-6
              .card-header
                h4.card-title Colors
              .card-content
                button.btn.btn-default.btn-fill.btn-wd Default
                button.btn.btn-primary.btn-fill.btn-wd Primary
                button.btn.btn-info.btn-fill.btn-wd Info
                button.btn.btn-success.btn-fill.btn-wd Success
                button.btn.btn-warning.btn-fill.btn-wd Warning
                button.btn.btn-danger.btn-fill.btn-wd Danger
            .col-md-6
              .card-header
                h4.card-title Styles
              .card-content
                button.btn.btn-wd Default
                button.btn.btn-fill.btn-wd Fill
                button.btn.btn-simple.btn-wd Simple
          .row
            .col-md-6
              .card-header
                h4.card-title Buttons with Label and Animation
              .card-content
                button.btn.btn-wd.btn-success(type='button')
                  span.btn-label
                    i.fa.fa-check
                  |                     Success
                button.btn.btn-wd.btn-danger(type='button')
                  span.btn-label
                    i.fa.fa-times
                  |                     Danger
                button.btn.btn-wd.btn-info.btn-fill.btn-rotate(type='button')
                  span.btn-label
                    i.ti-settings
                  |                     Settings
                button.btn.btn-wd.btn-warning.btn-fill.btn-magnify(type='button')
                  span.btn-label
                    i.ti-search
                  |                     Search
                button.btn.btn-wd.btn-default.btn-fill.btn-move-left(type='button')
                  span.btn-label
                    i.ti-angle-left
                  |                     Back
                button.btn.btn-wd.btn-default.btn-fill.btn-move-right(type='button')
                  | Next
                  span.btn-label
                    i.ti-angle-right
            .col-md-6
              .card-header
                h4.card-title Sizes
              .card-content
                button.btn.btn-lg.btn-fill Large
                button.btn.btn-fill Default
                button.btn.btn-sm.btn-fill Small
                button.btn.btn-xs.btn-fill X-Small
          .row
            .col-md-6
              .card-header
                h4.card-title Button Group
              .card-content
                .btn-group
                  button.btn.btn-default(type='button') Left
                  button.btn.btn-default(type='button') Middle
                  button.btn.btn-default(type='button') Right
                br
                br
                .btn-group
                  button.btn.btn-default(type='button') 1
                  button.btn.btn-default(type='button') 2
                  button.btn.btn-default(type='button') 3
                  button.btn.btn-default(type='button') 4
                .btn-group
                  button.btn.btn-default(type='button') 5
                  button.btn.btn-default(type='button') 6
                  button.btn.btn-default(type='button') 7
                .btn-group
                  button.btn.btn-default(type='button') 8
            .col-md-6
              .card-header
                h4.card-title Pagination
              .card-content
                ul.pagination
                  li
                    a(href='#pdp')
                      i.fa.fa-angle-double-left(aria-hidden='true')
                  li.active
                    a(href='#pdp') 1
                  li
                    a(href='#pdp') 2
                  li
                    a(href='#pdp') 3
                  li
                    a(href='#pdp') 4
                  li
                    a(href='#pdp') 5
                  li
                    a(href='#pdp')
                      i.fa.fa-angle-double-right(aria-hidden='true')
                ul.pagination.pagination-info
                  li
                    a(href='#pdp')
                      i.fa.fa-angle-double-left(aria-hidden='true')
                  li.active
                    a(href='#pdp') 1
                  li
                    a(href='#pdp') 2
                  li
                    a(href='#pdp') 3
                  li
                    a(href='#pdp') 4
                  li
                    a(href='#pdp') 5
                  li
                    a(href='#pdp')
                      i.fa.fa-angle-double-right(aria-hidden='true')
          .card-header
            h4.card-title Social buttons
          .card-content
            .row
              .col-md-12
                h5 Default
                button.btn.btn-icon.btn-twitter
                  i.ti-twitter-alt
                button.btn.btn-icon.btn-facebook
                  i.ti-facebook  
                button.btn.btn-icon.btn-google
                  i.ti-google  
                button.btn.btn-icon.btn-linkedin
                  i.ti-linkedin
                button.btn.btn-icon.btn-pinterest
                  i.ti-pinterest
                button.btn.btn-icon.btn-youtube
                  i.ti-youtube  
                button.btn.btn-icon.btn-tumblr
                  i.ti-tumblr  
                button.btn.btn-icon.btn-github
                  i.ti-github
                button.btn.btn-icon.btn-dribbble
                  i.ti-dribbble
                button.btn.btn-icon.btn-reddit
                  i.ti-reddit
                button.btn.btn-icon.btn-instagram
                  i.ti-instagram
            .row
              .col-md-12
                h5 Filled
                button.btn.btn-icon.btn-fill.btn-twitter
                  i.ti-twitter-alt
                button.btn.btn-icon.btn-fill.btn-facebook
                  i.ti-facebook  
                button.btn.btn-icon.btn-fill.btn-google
                  i.ti-google  
                button.btn.btn-icon.btn-fill.btn-linkedin
                  i.ti-linkedin
                button.btn.btn-icon.btn-fill.btn-pinterest
                  i.ti-pinterest
                button.btn.btn-icon.btn-fill.btn-youtube
                  i.ti-youtube  
                button.btn.btn-icon.btn-fill.btn-tumblr
                  i.ti-tumblr  
                button.btn.btn-icon.btn-fill.btn-github
                  i.ti-github
                button.btn.btn-icon.btn-fill.btn-dribbble
                  i.ti-dribbble
                button.btn.btn-icon.btn-fill.btn-reddit
                  i.ti-reddit
                button.btn.btn-icon.btn-fill.btn-instagram
                  i.ti-instagram
            .row
              .col-md-12
                h5 Simple
                button.btn.btn-icon.btn-simple.btn-twitter
                  i.ti-twitter-alt
                button.btn.btn-icon.btn-simple.btn-facebook
                  i.ti-facebook  
                button.btn.btn-icon.btn-simple.btn-google
                  i.ti-google  
                button.btn.btn-icon.btn-simple.btn-linkedin
                  i.ti-linkedin
                button.btn.btn-icon.btn-simple.btn-pinterest
                  i.ti-pinterest
                button.btn.btn-icon.btn-simple.btn-youtube
                  i.ti-youtube  
                button.btn.btn-icon.btn-simple.btn-tumblr
                  i.ti-tumblr  
                button.btn.btn-icon.btn-simple.btn-github
                  i.ti-github
                button.btn.btn-icon.btn-simple.btn-dribbble
                  i.ti-dribbble
                button.btn.btn-icon.btn-simple.btn-reddit
                  i.ti-reddit
                button.btn.btn-icon.btn-simple.btn-instagram
                  i.ti-instagram
</template>
