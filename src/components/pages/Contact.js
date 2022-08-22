import React from 'react'

function Contact() {
    return (
        <div id='contact' className="bg-gray-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left py-24">
                <div>
                    <div className="text-white opacity-50 text-4xl font-display"><span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                        <div className='m-1'>
                            <a href='/'>Abraham  Jackson TV</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">More info</div>
                    <a href="#" className="block mb-4">About</a>
                    <a href="#" className="block mb-4">Info</a>
                    <a href="#" className="block mb-4">FAQ</a>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">Helpful Links</div>
                    <a href="#" className="block mb-4">About</a>
                    <a href="#" className="block mb-4">Info</a>
                    <a href="#" className="block mb-4">FAQ</a>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">Find out more</div>
                    <a href="#" className="block mb-4">About</a>
                    <a href="#" className="block mb-4">Info</a>
                    <a href="#" className="block mb-4">FAQ</a>
                </div>
            </div>
            <div className="text-sm lg:text-base text-center font-heading font-light tracking-widest uppercase text-white opacity-75 pb-24">©2022 DESIGN BY FERAGAMO. IMAGES BY FERAGAMO</div>
        </div>
    )
}

export default Contact