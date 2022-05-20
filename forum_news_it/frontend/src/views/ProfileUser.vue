<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- component -->



  <div class="bg-gray-100 bg-gray-100">
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

            <ul
              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li class="flex items-center py-3">
                <span>Status</span>
                <span class="ml-auto"><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
              </li>
              <li class="flex items-center py-3">
                <span>Member since</span>
                <span class="ml-auto">{{ user.created_at }}</span>
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
                  <input v-model="user.info.prenom" placeholder="prenom"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-3  py-2"
                    required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
                </div>
                <div class="grid grid-cols-2 mt-4">
                  <div class="px-4 py-2 font-semibold">Nom</div>
                  <input placeholder="Nom" v-model="user.info.nom"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-3  py-2"
                    required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
                </div>
                <div class="grid grid-cols-2 mt-4">
                  <div class="px-4 py-2 font-semibold">email</div>
                  <input placeholder="Email " v-model="user.info.email"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 py-2"
                    required="required" type="email" name="integration[shop_name]" id="integration_shop_name">
                </div>
                <div class="grid grid-cols-2 mt-4">
                  <div class="px-4 py-2 font-semibold"> date de naissance</div>
                  <input placeholder="date de naissance" v-model="user.info.date_naissance"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-3  py-2"
                    required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
                </div>
                <div class="grid grid-cols-2 mt-4">
                  <div class="px-4 py-2 font-semibold"> old password</div>
                  <input placeholder="old password" v-model="user.pass.old"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-3  py-2"
                    required="required" type="password" name="integration[shop_name]" id="integration_shop_name">
                </div>
                <div class="grid grid-cols-2 mt-4 ">
                  <div class="px-4 py-2 font-semibold">new password</div>
                  <input placeholder="new password" v-model="user.pass.new"
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

          <div class="my-4">
            <h1 class="text-gray-900 font-bold text-xl text-center leading-8 my-1">MY POSTS</h1>
          </div>

          <!-- post  -->
          <div class=" p-3 shadow-sm rounded-sm  bg-gray-100">
            <div class="border bg-gray-100    mx-auto max-w-screen-md bg-white mt-10 rounded-2xl p-4"
              v-for="elem in $store.state.post.data.posts" :key="elem.id">
              <div class="flex items-center	justify-between">
                <div class="gap-3.5	flex items-center ">
                  <img
                    src="https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    class="object-cover bg-yellow-500 rounded-full w-10 h-10" />
                  <div class="flex flex-col">
                    <b class="mb-2 capitalize"> {{ elem.utilisateur.prenom }} {{ elem.utilisateur.nom }}</b>
                    <time datetime={{elem.date_post}} class="text-gray-400 text-xs">{{ elem.date_post }}
                    </time>
                  </div>
                </div>
                <div class="bg-gray-100	rounded-full h-3.5 flex	items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="34px" fill="#92929D">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>

              <div class="whitespace-pre-wrap mt-7"> <input v-model="elem.sjt_post" placeholder="prenom"
                    class="bg-purple-white shadow rounded border-0 p-3 w-full"
                    required="required" type="text" name="integration[shop_name]" id="integration_shop_name"></div>

              <!-- <div class="whitespace-pre-wrap mt-7">{{ elem.sjt_post }}</div> -->
              <!-- <div class="mt-5 flex gap-2	 justify-center border-b pb-4 flex-wrap	">
        <img
          src="https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
          class="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto" alt="photo">
        <img
          src="https://images.unsplash.com/photo-1614914135224-925593607248?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
          class="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto" alt="photo">
      </div> -->
              <!-- reaction -->
              <div class=" h-16 border-b  flex items-center justify-around	">
                <div class="flex items-center	gap-3	">

                  <PencilAltIcon class="h-6 w-6" />


                  <div class="text-sm	"> {{ elem.comments.length }} Comments</div>
                </div>
                <div class="flex items-center	gap-3">
                  <!-- like² -->

                  <div id="likes" class="flex items-center	gap-3" @click="setLike(elem)">
                    <FIcons v-if="isLiked(elem)" :icon="['fas', 'heart']" class="h-5 w-5" />
                    <FIcons v-else :icon="['far', 'heart']" class="h-5 w-5" />
                    <div class="text-sm"> {{ elem.likes.length }} Likes</div>
                  </div>
                  <div>


                    <!-- <FIcons  v-if="isLiked(elem)" :icon ="['fas','heart']"/> -->
                    <!-- <p v-if="ele.utilisateur_id==comment.utilisateur_id ">  {{ele.utilisateur_id}}  //  {{comment.utilisateur_id}}</p>
              <p v-else>  teeeest</p> -->

                  </div>
                </div>
                <div id="dislike" class="flex items-center	gap-3" @click="setDislikeLike(elem)">

                  <FIcons v-if="isDisLiked(elem)" :icon="['fas', 'thumbs-down']" class="h-5 w-5" />
                  <FIcons v-else :icon="['far', 'thumbs-down']" class="h-5 w-5" />

                  <div class="text-sm">{{ elem.dislikes.length }} Dislikes</div>
                </div>

              </div>

              <!-- comment -->
              <!-- post a comment -->
              <div
                class="relative flex items-center self-center w-full max-w-xxl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                <img class='w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer' alt='User avatar'
                  src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'>
                <span class="absolute inset-y-0 right-0 flex items-center pr-6">

                </span>

                <input type="search"
                  class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                  style="border-radius: 25px" placeholder="Post a comment..." autocomplete="off"
                  v-model="comment.sjt_comments">
                <div class="-mr-1">
                  <input type='submit'
                    class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                    value='Post Comment' @click="setComment(elem)">
                </div>
              </div>

              <!-- comments recent -->
              <div class="flex  bg-white dark:bg-gray-800" v-for="ele in elem.comments" :key="ele.id">
                <div class="bg-white dark:bg-gray-800 text-black  dark:text-gray-200 p-4 antialiased flex max-w-lg">
                  
                  <img class="rounded-full h-8 w-8  mt-1 " src="https://picsum.photos/id/1027/200/200" />
                  <div>
                    <div class="bg-gray-100   dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                      <div class="font-semibold text-sm leading-relaxed">{{ ele.user.prenom }} {{ ele.user.nom }}</div>
                      <div class="text-normal leading-snug md:leading-normal"> {{ ele.sjt_comments }}</div>
                    </div>
                    <div class="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">14 w</div>

                  </div>
                </div>

              </div>

            </div>

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
import { BanIcon, HeartIcon, PencilAltIcon } from '@heroicons/vue/outline'

import store from "../store";


export default {
  name: "test",
  data() {
    return {

      user: {
        info: {
          "nom": "",
          "prenom": "",
          "date_naissance": "",
          "email": "",
          "pass": "",
        },
        id: sessionStorage.getItem("idUser"),
        pass: {
          "old": "",
          "new": "",

        }
      },
      //
      // post
      comment: {
        "post_id": "",
        "sjt_comments": "",
        "utilisateur_id": sessionStorage.getItem("idUser")

      },
      dataLikePost: {
        "post_id": "",
        "utilisateur_id": sessionStorage.getItem("idUser"),

      },
      postData: {
        "utilisateur_id": sessionStorage.getItem("idUser"),
        "categorie_id": "",
        "sjt_post": ""
      },
      likeId: "",
      dislikesId: "",
      testCate: true


    }
  },
  components: {
    BanIcon,
    HeartIcon,
    PencilAltIcon
  },
  methods: {
    isLiked(post) {
      // console.log(post);

      for (var elem in post.likes) {
        // console.log(post.likes[elem].utilisateur_id);
        if (post.likes[elem].utilisateur_id == this.comment.utilisateur_id) {
          // console.log();
          this.likeId = post.likes[elem].id
          return true

        }

      }

    },
    async setLike(post) {
      // console.log("ok");
      console.log(this.postData.categorie_id);
      console.log(this.postData.sjt_post);


      this.dataLikePost.post_id = post.id;
      //  console.log(this.comment);
      if (!this.isLiked(post)) {
        store
          .dispatch('like', this.dataLikePost)
          .then((response) => {
            // console.log(response)

            // store
            //   .dispatch('getAllComments')
            // this.comment.sjt_comments = "";
            if (this.isDisLiked(post)) {
              this.setDislikeLike(post)

            }

            this.getAllPosts();


            // console.log(store.state.post.data);

          })
      }
      else {
        store
          .dispatch('destroyLike', this.likeId)
          .then((response) => {

            // store
            //   .dispatch('getAllComments')
            // console.log(response);
            // this.comment.sjt_comments = "";
            this.getAllPosts();


            // console.log(store.state.post.data);

          })

      }
    },
    // for dislike
    isDisLiked(post) {

      for (var elem in post.dislikes) {
        // console.log(post.likes[elem].utilisateur_id);
        if (post.dislikes[elem].utilisateur_id == this.comment.utilisateur_id) {
          // console.log();
          this.dislikesId = post.dislikes[elem].id
          return true

        }

      }

    },

    async setDislikeLike(post) {
      // console.log("ok");

      this.dataLikePost.post_id = post.id;
      //  console.log(this.comment);
      if (!this.isDisLiked(post)) {
        store
          .dispatch('dislike', this.dataLikePost)
          .then((response) => {


            if (this.isLiked(post)) {
              this.setLike(post)

            }
            // this.setLike(post)
            this.getAllPosts();


            // console.log(store.state.post.data);

          })
      }
      else {
        store
          .dispatch('destroyDisLike', this.dislikesId)
          .then((response) => {

            // store
            //   .dispatch('getAllComments')
            // console.log(response);
            // this.comment.sjt_comments = "";

            this.getAllPosts();


            // console.log(store.state.post.data);

          })

      }
    },
    getAllPosts() {
      store
        .dispatch('postByUser',this.user.id)
        .then((response) => {
          // store
          //   .dispatch('getAllComments')
          // console.log(response);

          // console.log(store.state.post.data);

        })


    },
    getInfoUser() {
      console.log(this.user.id);
      // console.log(sessionStorage.getItem("userInfo").length);
      // console.log('retrievedObject: ' ,JSON.parse(store.state.user.data));
      // this.user.prenom = store.state.user.data.nom;
      // this.user.nom = store.state.user.data.nom;
      // this.user.email = store.state.user.data.email;
      // this.user.date_naissance = store.state.user.data.date_naissance;
      store
        .dispatch('getInfoUser', this.user.id)
        .then((response) => {
          // console.log(response)
          console.log(response);

          this.user.info = response.data;
          // this.user.pass = "";          // store
          //   .dispatch('getAllComments')
          // console.log(response);



        })
      // this.user.prenom=store.state.user.data.nom;
    },
    updateUser() {
      // console.log(this.user.pass.old)
      var test = "";
      if (this.user.pass.old != "" && this.user.pass.new != "") {
        // test if old password correct
        store
          .dispatch('testPass', this.user)
          .then((response) => {
            // console.log(response)
            if (response.message == "sucess") {
              this.user.info.pass = this.user.pass.new;
              store
                .dispatch('updateUser', this.user)
                .then((response) => {
                  console.log("Bien updated")
                  this.user.pass.new = "";
                  this.user.pass.old = "";
                })

            } else {
              console.log("ereur mdp")
            };

          })


      } else if (this.user.pass.old == "" && this.user.pass.new == "") {
        store
          .dispatch('updateUser', this.user)
          .then((response) => {
            console.log("Bien updated")

          })
      }

    },


    getAllposts() {

    }
  },
  mounted() {
    // 
    this.getInfoUser();
    this.getAllPosts();
    // console.log(this.user.info)
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