import { Popover } from '@headlessui/react'
import React from 'react'

export default function VideoNavBar() {
    function removecam() {
        localStorage.removeItem("videoenable")
        window.location.href = '/drhome'
    }

    return (
        <div className="Zindex setfont">
            <Popover className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">
                            <button className="text-base font-medium text-gray-500 hover:text-gray-900 setfont" onClick={(e) => removecam(e)}>
                                Home
                            </button>
                        </Popover.Group>
                    </div>
                </div>
            </Popover>
        </div>
    )
}
