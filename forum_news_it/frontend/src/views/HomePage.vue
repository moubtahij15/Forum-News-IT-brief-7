<!-- This example requires Tailwind CSS v2.0+ -->
<template>


  <main class=" overflow-x-hidden overflow-y-auto bg-gray-100">

    <!-- <button @click="getAllPosts"> teeeeeest</button> -->
    <!-- <div class="container mx-auto px-6 py-8"> -->
    <!-- <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3> -->
    <!-- {{ --addpost --}} -->

    <!-- posts -->

    <!--middle wall-->



    <div class="border-1   mt-6 bg-white rounded-2xl p-4  mx-auto   flex-1     max-w-screen-md ">
      <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
      <button v-for="elem in $store.state.categorie.data" :key="elem.id"
        class="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4"
        @click="getAllPostsByCategorie(elem.id)">{{ elem.nom_categorie }} </button>


    </div>


    <div class="flex  items-stretch	    ">

      <!-- add post -->
      <div class="border-1   mt-6 bg-white rounded-2xl p-4  mx-auto   flex-1     max-w-screen-md">

        <div class="flex">

          <div class="flex-1 m-2">
            <h2 class="px-4 py-2 text-xl font-semibold text-black">Home</h2>
          </div>
          <div class="flex-1 px-4 py-2 m-2">
          </div>
        </div>
        <hr class="border-gray-600">
        <!--middle creat tweet-->
        <!-- <form @click.prevent> -->
        <form @click.prevent>

          <div class="flex">
            <div class="m-2 w-10 py-1">
              <img class="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
            </div>



            <div class="flex-1 px-2 pt-2 mt-2">
              <textarea v-model="postData.sjt_post" class=" bg-transparent text-gray-400 font-medium text-lg w-full"
                rows="2" cols="50" placeholder="What's happening?" required></textarea>
            </div>
          </div>


          <!-- //categorie Post -->
          <div class=" flex-1 px-2 pt-2 mx-10 m-2">

            <select v-model="postData.categorie_id" required
              class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option selected>Choose a categorie</option>
              <option :value=elem.id v-for="elem in $store.state.categorie.data" :key="elem.id">{{ elem.nom_categorie }}
              </option>

            </select>
          </div>

          <!--middle creat tweet below icons-->
          <div class="flex">
            <div class="w-10"></div>
            <div class="w-64 px-2">
              <div class="flex items-center">
                <div class="flex-1 text-center px-1 py-1 m-2">
                  <a href="#"
                    class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>
                    </svg>
                  </a>
                </div>
                <div class="flex-1 text-center py-2 m-2">
                  <a href="#"
                    class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                      </path>
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </a>
                </div>
                <div class="flex-1 text-center py-2 m-2">
                  <a href="#"
                    class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>
                    </svg>
                  </a>
                </div>
                <div class="flex-1 text-center py-2 m-2">
                  <a href="#"
                    class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            <div class="flex-1">
              <button type="submit"
                class="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right" @click="addPost">
                post
              </button>
            </div>
          </div>
        </form>

      </div>


    </div>






    <!-- </div>  -->
    <!-- post -->
    <div class="border     mx-auto max-w-screen-md bg-white mt-10 rounded-2xl p-4"
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
      <div class="whitespace-pre-wrap mt-7">{{ elem.sjt_post }}</div>
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
          style="border-radius: 25px" placeholder="Post a comment..." autocomplete="off" v-model="comment.sjt_comments">
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

  </main>

  <!-- component -->

</template>

<script>
import { computed } from '@vue/reactivity'
import { BanIcon, HeartIcon, PencilAltIcon } from '@heroicons/vue/outline'
// import { BanIcon, HeartIcon, PencilAltIcon } from '@heroicons/vue/solid'

import { useRouter } from 'vue-router';
import store from "../store";
export default {
  name: "Dashboard",
  data() {
    return {
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
    };
  },


  components: {
    BanIcon,
    HeartIcon,
    PencilAltIcon
  },
  post: {},
  methods: {
    // get all posts
    getAllPosts() {
      store
        .dispatch('getAllPosts')
        .then((response) => {
          // store
          //   .dispatch('getAllComments')
          // console.log(response);

          // console.log(store.state.post.data);

        })


    },
    // get all gategorie

    setCategories() {
      store
        .dispatch('getAllCategories')
        .then((response) => {
          // store
          //   .dispatch('getAllComments')
          // console.log(response);

          // console.log(store.state.post.data);

        })

    },
    // set comment
    setComment(elem) {
      // console.log(store.state.user.data);  
      this.comment.utilisateur_id = sessionStorage.getItem("idUser");
      this.comment.post_id = elem.id;
      //  console.log(this.comment);
      store
        .dispatch('comments', this.comment)
        .then((response) => {
          // console.log(response)

          // store
          //   .dispatch('getAllComments')
          // console.log(response);
          this.comment.sjt_comments = "";

          this.getAllPosts();


          // console.log(store.state.post.data);

        })

      // console.log(elem);  
    },
    // for like

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


    getAllPostsByCategorie(elem) {
      this.testCate = false;
      // console.log(elem);
      store
        .dispatch('getAllPostsByCategorie', elem)
        .then((response) => {
          // console.log(response)

        })
    },
    addPost() {
      store
        .dispatch('addPost', this.postData)
        .then((response) => {
          // console.log(response)

          // store
          //   .dispatch('getAllComments')
          console.log(response);
        this.postData.sjt_post="";
          this.getAllPosts();


          // console.log(store.state.post.data);

        })
    }

  },

  mounted() {
    // this.post = store.state.post.data;
    if (this.testCate) {
      this.getAllPosts();

    }
    this.setCategories();
  },

}
</script>

<style>
#likes {
  cursor: pointer;

}

#dislike {
  cursor: pointer;

}
</style>