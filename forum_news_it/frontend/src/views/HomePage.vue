<!-- This example requires Tailwind CSS v2.0+ -->
<template>


    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div class="container mx-auto px-6 py-8">
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
                        <path
                          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
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
          <div class="bg-white border shadow-sm px-4 py-3 rounded-lg max-w-lg mb-8">
            <div class="flex items-center">
              <img class="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              <div class="ml-2">
                <div class="text-sm ">
                  <span class="font-semibold">Dallin Baumbach</span>
                </div>
                
              </div>
            </div>
            <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">Lorem ipsum
              dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <div class="text-gray-500 text-xs flex items-center mt-3">
              <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
              <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
              <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" />
              <span class="ml-1">47 • 26 comments</span>
            </div>
          </div>
          <div class="bg-white border shadow-sm px-4 py-3 rounded-lg max-w-lg mb-8">
            <div class="flex items-center">
              <img class="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              <div class="ml-2">
                <div class="text-sm ">
                  <span class="font-semibold">Dallin Baumbach</span>
                  <span class="text-gray-500"> • 1st</span>
                </div>
                <div class="text-gray-500 text-xs ">Software Engineer at Tesla, Inc</div>
                <div class="text-gray-500 text-xs flex">
                  <span class="inline-block">3d • Edited • </span>
                  <svg class="inline-block ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                    data-supported-dps="16x16" fill="currentColor" :class="mercado-match" width="16" height="16"
                    focusable="false">
                    <path
                      d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">Lorem ipsum
              dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <div class="text-gray-500 text-xs flex items-center mt-3">
              <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
              <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
              <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" />
              <span class="ml-1">47 • 26 comments</span>
            </div>
          </div>
          <div class="bg-white border shadow-sm px-4 py-3 rounded-lg max-w-lg">
            <div class="flex items-center">
              <img class="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              <div class="ml-2">
                <div class="text-sm ">
                  <span class="font-semibold">Dallin Baumbach</span>
                  <span class="text-gray-500"> • 1st</span>
                </div>
                <div class="text-gray-500 text-xs ">Software Engineer at Tesla, Inc</div>
                <div class="text-gray-500 text-xs flex">
                  <span class="inline-block">3d • Edited • </span>
                  <svg class="inline-block ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                    data-supported-dps="16x16" fill="currentColor" :class="mercado-match" width="16" height="16"
                    focusable="false">
                    <path
                      d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">Lorem ipsum
              dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <div class="text-gray-500 text-xs flex items-center mt-3">
              <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
              <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
              <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" />
              <span class="ml-1">47 • 26 comments</span>
            </div>
          </div>
        </div>
        <div class="mt-8">
        </div>
      </div>
    </main>


</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'


export default {
  name: "Dashboard",


}
</script>