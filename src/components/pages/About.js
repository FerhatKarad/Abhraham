import React from 'react'
import Rechte from '../../assets/rechtearm.jpg'
import Terminator from '../../assets/terminator.jpg'

function About() {
    return (
        <div id='about'>
            <div className="max-w-xl mx-auto text-center py-24 md:py-32">
                <div className="h-2 bg-yellow-400 mb-4 mx-auto"></div>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">I Love To Entertain You</h2>
                <p className="font-light text-gray-600 mb-6 leading-relaxed">These are the most famous popular movies from me, enjoy Abraham Jackson TV!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
            
            <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
                <div className="max-w-md">
                    <div className="w-24 h-2 bg-yellow-500 mb-4 mt-9"></div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Abraham Jackson TV</h2>
                    <p className="font-light text-gray-500 text-sm md:text-base mb-6 leading-relaxed">Abraham Jackson und sein Freund, der Graf, finden nach schwierigen Nachforschungen endlich das berühmte "heilige Schwert", welches über Jahre im Besitz afrikanischer Eingeborener war. Trotz starker Gegenwehr der Eingeborenen gelingt es den kampfstarken Abraham Jackson mit dem Schwert zu entkommen und es dem Grafen zu übergeben. Von diesen Neuigkeiten erfährt auch eine Gruppe von Gangstern, die ebenfalls hinter dem wertvollen Schwert her ist. Kurzerhand kidnappen sie die Freundin von Abraham Jackson und fordern das Schwert als Lösegeld. Abraham Jackson und seine Freunde machen sich samt Schwert auf den Weg, um das Mädchen mit aller Gewalt aus den Händen der Gangster zu befreien.</p>
                    <a href='/#blog' className="inline-block border-4 border-yellow-500 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white">Read more</a>
                </div>
            </div>
            <div className="bg-gray-50 p-12 md:p-24 flex justify-center items-center">
                <img alt='' src={Rechte} className="w-full max-w-md" />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="bg-gray-50 p-12 md:p-24 flex justify-center items-center">
                <img alt='' src={Terminator} className="w-full max-w-md" />
            </div>
            
            <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
                <div className="max-w-md">
                    <div className="w-24 h-2 bg-yellow-500 mb-4 mt-9"></div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Abraham Jackson TV</h2>
                    <p className="font-light text-gray-500 text-sm md:text-base mb-6 leading-relaxed">A human soldier is sent from 2029 to 1984 to stop an almost indestructible Abraham Jackson a cyborg killing machine , sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.</p>
                    <a href='/#blog' className="inline-block border-4 border-yellow-500 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white">Read more</a>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default About