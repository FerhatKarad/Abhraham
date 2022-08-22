import React from 'react'
import Travel from '../../assets/travel.jpg'
import Roman from '../../assets/roman.jpg'
import Fight from '../../assets/fight.jpg'
import Food from '../../assets/food.jpg'

function Home() {
    return (
        <>
        <div className="max-w-xl mx-auto text-center py-24 md:py-24">
                <div className="h-2 bg-yellow-400 mb-4 mx-auto"></div>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">This is Abraham Jackson TV</h2>
                <p className="font-light text-gray-600 leading-relaxed">An Entertainer based on Real estate Content.</p>
            </div>

            <div id='#' className="flex flex-col items-center overscroll-x-none justify-center bg-gray-100 sm:flex-row md:flex-col-2 mt-20">

                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                        <img className="h-56 rounded-t-lg" alt="article image"
                            src={Travel} />
                        <div className="px-6 pt-4 mb-2 text-red-300 text-xl font-bold text-center">
                            <span>Travel Boss</span>
                        </div>
                        <div className="px-6 pt-2">
                            <small>Abraham Jackson TV</small>
                            <div className="overflow-hidden h-16 ...">Traveling arround the World.</div>
                        </div>
                        <div className="px-6 pb-4">
                            <a href={Travel}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-red-300 rounded-full">#Culture</a>
                            <a href={Travel}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-red-300 rounded-full">#Journey</a>
                            <a href={Travel}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-red-300 rounded-full">#Trip</a>
                        </div>

                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                        <img className="h-56 rounded-t-lg" alt="article image"
                            src={Roman} />
                        <div className="px-6 pt-4 mb-2 text-center text-blue-300 text-xl font-bold">
                            <span>History Boss</span>
                        </div>
                        <div className="px-6 pt-2">
                            <small>Newest Update incomming!</small>
                            <div className="overflow-hidden h-16 ...">Tells you anything about History.</div>
                        </div>
                        <div className="px-6 pb-4">
                            <a href={Roman}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-blue-300 rounded-full">#Ancient Times</a>
                            <a href={Roman}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-blue-300 rounded-full">#Antiquity</a>
                            <a href={Roman}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-blue-300 rounded-full">#Good old Days</a>

                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                        <img className="h-56 rounded-t-lg" alt="article image"
                            src={Fight} />
                        <div className="px-6 pt-4 mb-2 text-center text-green-300 text-xl font-bold">
                            <span>Fight Master</span>
                        </div>
                        <div className="px-6 pt-2">
                            <small>Abraham Jackson TV</small>
                            <div className="overflow-hidden h-16 ...">Master of all Marterial Art Styles.</div>
                        </div>
                        <div className="px-6 pb-4">
                            <a href={Fight}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-green-300 rounded-full">#Taek Won Do</a>
                            <a href={Fight}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-green-300 rounded-full">#Jiu-Jutsu</a>
                            <a href={Fight}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-green-300 rounded-full">#Boxen</a>

                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                        <img className="h-56 rounded-t-lg" alt="article image"
                            src={Food} />
                        <div className="px-6 pt-4 mb-2 text-center text-yellow-500 text-xl font-bold">
                            <span>Food King</span>
                        </div>
                        <div className="px-6 pt-2">
                            <small>Newest Update incomming!</small>
                            <div className="overflow-hidden h-16 ...">The King of Kitchen</div>
                        </div>
                        <div className="px-6 pb-4">
                            <a href={Food}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-yellow-500 rounded-full">#Ancient Times</a>
                            <a href={Food}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-yellow-500 rounded-full">#Antiquity</a>
                            <a href={Food}
                                className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-yellow-500 rounded-full">#Good old Days</a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home