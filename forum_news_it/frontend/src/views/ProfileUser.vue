<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- component -->



  <div class="bg-gray-100">
    <div class="w-full text-white bg-main-color">
      <div x-data="{ open: false }"
        class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">


      </div>
    </div>
    <!-- End of Navbar -->

    <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2 ">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img class="h-auto w-full mx-auto"
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="">
            </div>
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">Jane Doe</h1>
            <h3 class="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
            <ul
              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li class="flex items-center py-3">
                <span>Status</span>
                <span class="ml-auto"><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
              </li>
              <li class="flex items-center py-3">
                <span>Member since</span>
                <span class="ml-auto">Nov 07, 2016</span>
              </li>
            </ul>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
          <!-- Friends card -->

          <!-- End of friends card -->
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2  mt-4 ">
                  <div class="px-4 py-2 font-semibold">Prenom</div>
                  <input v-model="user.prenom" placeholder="prenom"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-3  py-2"
                    required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
                </div>
                <div class="grid grid-cols-2 mt-4">
                  <div class="px-4 py-2 font-semibold">Nom</div>
                  <input placeholder="Nom" v-model="user.nom"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-3  py-2"
                    required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
                </div>
                <div class="grid grid-cols-2 mt-4">
                  <div class="px-4 py-2 font-semibold">email</div>
                  <input placeholder="Email " v-model="user.email"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 py-2"
                    required="required" type="email" name="integration[shop_name]" id="integration_shop_name">
                </div>
                <div class="grid grid-cols-2 mt-4">
                  <div class="px-4 py-2 font-semibold"> date de naissance</div>
                  <input placeholder="date de naissance" v-model="user.date_naissance"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-3  py-2"
                    required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
                </div>
                <div class="grid grid-cols-2 mt-4">
                  <div class="px-4 py-2 font-semibold"> old password</div>
                  <input placeholder="old password"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-3  py-2"
                    required="required" type="password" name="integration[shop_name]" id="integration_shop_name">
                </div>
                <div class="grid grid-cols-2 mt-4 ">
                  <div class="px-4 py-2 font-semibold">new password</div>
                  <input placeholder="new password" v-model="user.pass"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-3  py-2"
                    required="required" type="password" name="integration[shop_name]" id="integration_shop_name">
                </div>

              </div>
            </div>
            <button @click="updateUser()"
              class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Update
            </button>
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>

          <!-- post  -->
          <div class="bg-white p-3 shadow-sm rounded-sm">


            <!-- End post -->
          </div>
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import store from "../store";


export default {
  name: "test",
  data() {
    return {
      test: "zeez",
      
      user: {
        "id": sessionStorage.getItem("idUser"),
        "nom": "",
        "prenom": "",
        "date_naissance": "",
        "email": "",
        "pass": "",
      }

    }
  },
  methods: {
    getInfoUser() {
      // console.log(store.state.user.data.id);
      // console.log(sessionStorage.getItem("userInfo").length);
      // console.log('retrievedObject: ' ,JSON.parse(store.state.user.data));
      this.user.prenom = store.state.user.data.nom;
      this.user.nom = store.state.user.data.nom;
      this.user.email = store.state.user.data.email;
      this.user.date_naissance = store.state.user.data.date_naissance;
      // this.user.prenom=store.state.user.data.nom;
    },
    updateUser() {
      // console.log(this.user)
      store
        .dispatch('updateUser', this.user)
        .then((response) => {
          // console.log(response)

          // store
          //   .dispatch('getAllComments')
          console.log(response);
          


          // console.log(store.state.post.data);

        })
      // sessionStorage.getItem("userInfo").clear();

    }


  },
  mounted() {

    this.getInfoUser();
  }
}
</script>
 <style>
:root {
  --main-color: #4a76a8;
}

.bg-main-color {
  background-color: var(--main-color);
}

.text-main-color {
  color: var(--main-color);
}

.border-main-color {
  border-color: var(--main-color);
}
</style>