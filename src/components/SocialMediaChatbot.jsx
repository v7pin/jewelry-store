import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaCommentDots } from 'react-icons/fa';
import { IoShareSocial } from "react-icons/io5";

function SocialMediaChatbot() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen && (
                <div className="flex flex-col items-center mb-4">
                    <a href="https://facebook.com" className="mb-2 text-gray-800 hover:text-blue-600">
                        <FaFacebookF size={32} color='#FFD700' />
                    </a>
                    <a href="https://instagram.com" className="mb-2 text-gray-800 hover:text-pink-600">
                        <FaInstagram size={32} color='#FFD700' />
                    </a>
                    <a href="https://twitter.com" className="mb-2 text-gray-800 hover:text-blue-400">
                        <FaTwitter size={32} color='#FFD700' />
                    </a>
                </div>
            )}
            <button onClick={toggleOpen} className="p-3 bg-[#00A7FF] text-white rounded-full hover:bg-[#0028FF] focus:outline-none">
                <IoShareSocial   size={32} color='White ' />
            </button>
        </div>
    );
}

export default SocialMediaChatbot;
