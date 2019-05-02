<template>
  <div id="app">

    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <router-link  to="./" class="navbar-brand col-sm-3 col-md-2 mr-0">2CPL</router-link>
          <input class="form-control form-control-dark w-100 height-100" type="text" v-bind:placeholder="$t('app_search')" v-bind:aria-label="$t('app_search')">
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link">Sign out</a>
            </li>
          </ul>
        </nav>

        <div class="container-fluid">
            <div class="row">
              <nav class="col-md-2 d-none d-md-block bg-dark sidebar">
                <div class="sidebar-sticky">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Home
                      </router-link>
                    </li>
                   
                     

                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/Profile">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather">
                         <circle cx="12" cy="12" r="10" />
                          </svg>
                        Profile
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/Configuration">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather">
                        <circle cx="12" cy="12" r="10" />
                  
                        </svg>
                      Feature Model Configuration
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/Previous config">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather">
                        <circle cx="12" cy="12" r="10" />
                       
                        </svg>
                       Previous Configurations
                      </router-link>
                    </li>
                
  
                  </ul>
                </div>
              </nav>

              <main role="main" class="top-main col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

                <div class="container">
                  <div id="mainview">
                    <router-view></router-view>
                  </div>
                </div>

                <!-- begin main modal -->
                <div>                 
                      <div class="modal" id="main_modal">
                      <div class="modal-wrapper">
                        <div class="modal-container">
                          <content select=".modal-header">
                            <div id="main_modal_header" class="modal-header">
                              <h3>
                                
                              </h3>
                            </div>
                          </content>
                          <div id="main_modal_body" class="modal-body">
                            
                          </div>
                          <div class="modal-footer">
                            <div id="main_modal_footer"></div>
                            <div><button @click="hide_modal()">Close</button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <!-- end main modal -->

              </main>
          </div>

        </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
    }
  },
  methods: {
    hide_modal(){
      document.getElementById('main_modal').style.display="none";
    }
  }
}
</script>

<style>
@media (min-width: 768px){
  .top-main{
      -ms-flex: 0 0 83%;
      flex: 0 0 83%;
      max-width: 83%;
  }
}

.height-100 {
    height: 100% !important;
}

.dropdown-item.active, .dropdown-item:active {
   background-color: gainsboro !important;
}

.submenu{
  padding-left: 25px !important;
}

#mainview {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 7px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  background: #fff;
  width: 650px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all .3s ease;
  margin: 0 auto;
  padding: 20px 30px;
}
.modal-footer {
  margin-top: 15px;
}
.modal-enter, .modal-leave {
  opacity: 0;
}
.modal-enter .modal-container, .modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
