<template lang="pug">
li.dropdown(:class='{open:isOpen}', @click='toggleDropDown')
  a.dropdown-toggle.btn-rotate(data-toggle='dropdown')
    slot(name='title')
      i(:class='icon')
      p.notification
        | {{title}}
        b.caret
  ul.dropdown-menu
    slot

</template>
<script>
  export default {
    props: {
      title: String,
      icon: String,
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleDropDown() {
        this.isOpen = !this.isOpen;
      },
      closeDropDown() {
        console.log(1);
        this.isOpen = false;
      },
    },
  };
</script>
