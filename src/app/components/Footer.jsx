import {FaFacebook, FaInstagram, FaSpotify, FaYoutube} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="flex justify-center p-5 m-10">
            <div className="flex flex-col items-center justify-evenly w-screen">
                <p className="text-3xl">Honey Marmalade</p>
                <div className="flex gap-4 justify-center mt-6">
                    <a href="https://instagram.com/honeymarmalade_/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-pink-500" />
                    </a>
                    <a href="https://facebook.com/honeymarmalade1" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl hover:text-blue-600" />
                    </a>
                    <a href="https://open.spotify.com/artist/2U1hJ0yGc6Xf5QMrvhWwdH?si=ociVqB48RaW_gka6j-slSA" target="_blank" rel="noopener noreferrer">
                        <FaSpotify className="text-2xl hover:text-green-500" />
                    </a>
                    <a href="https://youtube.com/channel/UCNm0WN8m82cD3cdLe-yJqJg" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-2xl hover:text-green-500" />
                    </a>
                </div>
                <p className="text-xl mt-5">honeymarmalade@gmail.com</p>
            </div>
        </footer>
    );
}