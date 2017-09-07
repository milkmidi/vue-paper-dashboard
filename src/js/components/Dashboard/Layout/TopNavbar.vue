<style>
.top-nav-bar-root.navbar{
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 0;
}
.top-nav-bar-root .navbar-collapse{
  justify-content: flex-end;
}
</style>
<template>
  <nav class="navbar navbar-expand-lg navbar-light top-nav-bar-root">

    <div class="navbar-minimize"><button class="btn btn-fill btn-icon"><i class="ti-more-alt"></i></button></div>
    <a class="navbar-brand">{{routeName}}</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">{{routeName}}</a>
      </div> -->
        <ul class="navbar-nav">
          <li class="open">
            <a href="#" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <i class="ti-panel"></i>
              <p>Stats</p>
            </a>
          </li>
            <drop-down title="5 Notifications" icon="ti-bell">
              <a class="dropdown-item" href="#">Notification 1</a>
              <a class="dropdown-item" href="#">Notification 2</a>
              <a class="dropdown-item" href="#">Notification 3</a>
              <a class="dropdown-item" href="#">Notification 4</a>
              <a class="dropdown-item" href="#">Another notification</a>
            </drop-down>  
          <li>
            <a href="#" class="btn-rotate">
              <i class="ti-settings"></i>
              <p>
                Settings
              </p>
            </a>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
        </div>
      </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName() {
        const { name } = this.$route;
        return this.capitalizeFirstLetter(name);
      },
    },
    data() {
      return {
        activeNotifications: false,
      };
    },
    methods: {
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      toggleNotificationDropDown() {
        this.activeNotifications = !this.activeNotifications;
      },
      closeDropDown() {
        this.activeNotifications = false;
      },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
    },
  };
</script>
