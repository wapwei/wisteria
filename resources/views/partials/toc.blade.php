<div class="hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
    <div class="top-4 flex flex-col justify-between overflow-y-auto sticky top-16 max-h-(screen-16) pt-6 pb-4 -mt-12">
        @include('wisteria::ads.before-toc')
        <div id="toc" class="w-full text-sm border-l pl-4 my-6">
            <div class="flex items-center text-gray-500 uppercase">
                <svg height="1em" width="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" class="icon-7f6730be--text-3f89f380">
                    <g>
                        <line x1="21" y1="10" x2="7" y2="10"></line>
                        <line x1="21" y1="6" x2="3" y2="6"></line>
                        <line x1="21" y1="14" x2="3" y2="14"></line>
                        <line x1="21" y1="18" x2="7" y2="18"></line>
                    </g>
                </svg>
                <span class="ml-1">Contents</span></div>
            <div class="anchors mt-4"></div>
        </div>
        @include('wisteria::ads.after-toc')
    </div>
</div>