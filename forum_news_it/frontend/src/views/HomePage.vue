<!-- This example requires Tailwind CSS v2.0+ -->
<template>


  <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
  
    <button @click="getAllPosts"> teeeeeest</button>
<!-- <div class="container mx-auto px-6 py-8"> -->
      <!-- <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3> -->
      <!-- {{ --addpost --}} -->

      <!-- posts -->
      <div class=" p-3 mb-2 flex flex-col items-center  justify-space ">
        <!--middle wall-->
        <div class="bg-white border shadow-sm px-4 py-3 rounded-lg max-w-lg mb-8">
          <div class="flex">
            <div class="flex-1 m-2">
              <h2 class="px-4 py-2 text-xl font-semibold text-black">Home</h2>
            </div>
            <div class="flex-1 px-4 py-2 m-2">
            </div>
          </div>
          <hr class="border-gray-600">
          <!--middle creat tweet-->
          <div class="flex">
            <div class="m-2 w-10 py-1">
              <img class="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
            </div>
            <div class="flex-1 px-2 pt-2 mt-2">
              <textarea class=" bg-transparent text-gray-400 font-medium text-lg w-full" rows="2" cols="50"
                placeholder="What's happening?"></textarea>
            </div>
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
              <button
                class="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                post
              </button>
            </div>
          </div>
        </div>
        <!-- card post -->
        <!-- <div v-for="elem in $store.state.post.data" :key="elem.id"
          class="bg-white border  shadow-sm px-4 py-3  rounded-lg  max-w-lg w-1/2 mb-8">
          <div class="flex items-center">
            <img class="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <div class="ml-2">
              <div class="text-sm ">
                <span class="font-semibold">{{ elem.nom }}</span>
              </div>
            </div>
          </div>
          <p class="text-gray-800 text-sm mt-2 leading-vo md:leading-relaxed">
            {{ elem.sjt_post }}

          </p>
          <div class="text-gray-500 text-xs flex items-center mt-3">
            <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
            <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
            <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" />

          </div> -->
          <!-- //reaction -->
          <!-- <div class=" h-16 border-b  flex items-center justify-around	">
            <div class="flex items-center	gap-3	">
              <HeartIcon class="h-6 w-6" />

              <div class="text-sm	"> {{ elem.downvote }} Likes</div>
            </div>
            <div class="flex items-center	gap-3	">
              <BanIcon class="h-6 w-6" />
              <div class="text-sm	"> {{ elem.upvote }} Dislike
              </div>
            </div>

            <div class="flex items-center	gap-3	">
              <PencilAltIcon class="h-6 w-6" /> -->
              <!-- <div class="text-sm	"> {{ elem.comments.length }} Comments</div> -->
              <!-- <div class="text-sm	">Comments</div> -->

            <!-- </div> -->
          <!-- </div> -->
          <!-- comment -->

          <!-- <div
          v-for="ele in elem.comments" :key="ele.id"
           class="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5 mt-4 flex">
             <img class="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200"/>

            <div class="font-semibold text-sm leading-relaxed">{{ele.nom}}</div>
            <div class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">{{ele.sjt_comments}}</div>
          <div class="text-sm  mt-0.5 text-gray-500 dark:text-gray-400">14 w</div>
         </div> -->
          <!-- component -->
          <!-- <div class="flex items-center justify-center">
            <div class="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex max-w-lg">
              <img class="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200" />
              <div>
                <div class="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                  <div class="font-semibold text-sm leading-relaxed">Jon Doe</div>
                  <div class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.</div>
                </div>
                <div class="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">14 w</div>
               
              </div>
            </div>
          </div>


        </div> -->



       </div>
      
    <!-- </div>  -->

    <div class="border mx-auto max-w-screen-md bg-white mt-6 rounded-2xl p-4"
    v-for="elem in $store.state.post.data" :key="elem.id">
      <div  
      class="flex items-center	justify-between">
        <div class="gap-3.5	flex items-center ">
          <img
            src="https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            class="object-cover bg-yellow-500 rounded-full w-10 h-10" />
          <div class="flex flex-col">
            <b class="mb-2 capitalize"> {{elem.prenom}} {{elem.nom}}</b>
            <time datetime="06-08-21" class="text-gray-400 text-xs">06 August at 09.15 PM
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
          <div class="text-sm	">{{ elem.comments.length }} Comments</div>
        </div>
        <div class="flex items-center	gap-3">
          <HeartIcon class="h-6 w-6" />
          <div class="text-sm"> {{ elem.upvote }} Likes</div>
        </div>
        <div class="flex items-center	gap-3">
              <BanIcon class="h-6 w-6" />
         
          <div class="text-sm">{{ elem.downvote }} Dislikes</div>
        </div>
        
      </div>
      
      <!-- comment -->
      <div class="flex  bg-white dark:bg-gray-800"
                      v-for="ele in elem.comments" :key="ele.id"

>
        <div 

        class="bg-white dark:bg-gray-800 text-black  dark:text-gray-200 p-4 antialiased flex max-w-lg">
          <img class="rounded-full h-8 w-8  mt-1 " src="https://picsum.photos/id/1027/200/200" />
          <div>
            <div class="bg-gray-100   dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
              <div class="font-semibold text-sm leading-relaxed">{{ele.prenom}} {{ele.nom}}</div>
              <div class="text-normal leading-snug md:leading-normal"> {{ele.sjt_comments}}</div>
            </div>
            <div class="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">14 w</div>
            
          </div>
        </div>
      </div>
    </div>
 
  </main>


</template>

<script>
import { computed } from '@vue/reactivity'
import { BanIcon, HeartIcon, PencilAltIcon } from '@heroicons/vue/outline'

import { useRouter } from 'vue-router';
import store from "../store";
export default {
  name: "Dashboard",
  components: {
    BanIcon,
    HeartIcon,
    PencilAltIcon
  },
  post: {},
  methods: {
    getAllPosts() {
      store
        .dispatch('getAllPosts')
        .then((response) => {
          store
            .dispatch('getAllComments')

          // console.log(response);
          // console.log();

          //  response.forEach(obj => {
          //             Object.entries(obj).forEach(([key, value]) => {
          //                if( key =="id"){
          //                console.log(value);


          //                }
          //             }); 
          //             console.log("-----------------")});
          console.log(store.state.post.data);
          // console.log(store.state);



        })


    }
  },

  mounted() {
    // this.post = store.state.post.data;
    this.getAllPosts();
  },
  
}
</script>