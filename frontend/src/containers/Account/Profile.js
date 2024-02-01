import React from 'react';
import Shell from "./Shell";
import cat from "../../assets/images/cat.jpg"

class Profile extends React.Component {
    render() {
        return (
            <Shell>
            <section class="bg-blueGray-50">
                <div class="w-full lg:w-8/12 px-4 mx-auto">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full px-4 flex justify-center">
                                    <div class="w-24 relative">
                                        <img src={cat} class="shadow-xl rounded-full h-auto align-middle border-none max-w-50-px" />
                                    </div>
                                </div>
                                <div class="w-full px-4 text-center mt-5">
                                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div class="mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                22
                                            </span>
                                            <span class="text-sm text-blueGray-400">Friends</span>
                                        </div>
                                        <div class="mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                10
                                            </span>
                                            <span class="text-sm text-blueGray-400">Photos</span>
                                        </div>
                                        <div class="lg:mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                89
                                            </span>
                                            <span class="text-sm text-blueGray-400">Comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-5">
                                <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    John Stone
                                </h3>
                                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    Los Angeles, California
                                </div>
                                <div class="mb-2 text-blueGray-600 mt-5">
                                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                    Solution Manager - Creative Tim Officer
                                </div>
                            </div>
                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-9/12 px-4">
                                        <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            An artist of considerable range, John the name taken
                                            by Melbourne-raised, Brooklyn-based Nick Murphy
                                            writes, performs and records all of his own music,
                                            giving it a warm, intimate feel with a solid groove
                                            structure. An artist of considerable range.
                                        </p>
                                        <a class="font-normal text-gray-400 hover:text-black">
                                            Show more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Shell>
        )
    }
}


export default Profile;