<template lang="pug">
.card
  .header
    h4.title Notifications
    p.category Custom Vue notifications plugin
  .content
    .row
      .col-md-6
        h5 Notifications Style
        .alert.alert-info
          span This is a plain notification
        .alert.alert-info
          button.close(type='button', aria-hidden='true') ×
          span This is a notification with close button.
        .alert.alert-info.alert-with-icon(data-notify='container')
          button.close(type='button', aria-hidden='true') ×
          span.ti-bell(data-notify='icon')
          span(data-notify='message') This is a notification with close button and icon.
        .alert.alert-info.alert-with-icon(data-notify='container')
          button.close(type='button', aria-hidden='true') ×
          span.ti-pie-chart(data-notify='icon')
          span(data-notify='message')
            | This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.
      .col-md-6
        h5 Notification states
        .alert.alert-info
          button.close(type='button', aria-hidden='true') ×
          span
            b  Info - 
            |  This is a regular notification made with ".alert-info"
        .alert.alert-success
          button.close(type='button', aria-hidden='true') ×
          span
            b  Success - 
            |  This is a regular notification made with ".alert-success"
        .alert.alert-warning
          button.close(type='button', aria-hidden='true') ×
          span
            b  Warning - 
            |  This is a regular notification made with ".alert-warning"
        .alert.alert-danger
          button.close(type='button', aria-hidden='true') ×
          span
            b  Danger - 
            |  This is a regular notification made with ".alert-danger"
    br
    br
    .places-buttons
      .row
        .col-md-9
          h5
            | Notifications Places
            p.category Click to view notifications
      .row
        .col-md-3
          button.btn.btn-default.btn-block(@click="notifyVue('top', 'left')") Top Left
        .col-md-3
          button.btn.btn-default.btn-block(@click="notifyVue('top', 'center')") Top Center
        .col-md-3
          button.btn.btn-default.btn-block(@click="notifyVue('top', 'right')") Top Right
      .row
        .col-md-3
          button.btn.btn-default.btn-block(@click="notifyVue('bottom', 'left')") Bottom Left
        .col-md-3
          button.btn.btn-default.btn-block(@click="notifyVue('bottom', 'center')") Bottom Center
        .col-md-3
          button.btn.btn-default.btn-block(@click="notifyVue('bottom', 'right')") Bottom Right

</template>
<script>
  import PaperNotification from '@/components/UIComponents/NotificationPlugin/Notification.vue';

  export default {
    data() {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false,
        },
      };
    },
    components: {
      PaperNotification,
    },
    methods: {
      notifyVue(verticalAlign, horizontalAlign) {
        const color = Math.floor((Math.random() * 4) + 1);
        this.$notifications.notify(
          {
            message: 'Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer.',
            icon: 'ti-gift',
            horizontalAlign,
            verticalAlign,
            type: this.type[color],
          });
      },
    },
  };

</script>
<style>
  
</style>
