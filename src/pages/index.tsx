import React from 'react';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import wokpaImage from "../../public/images/WokpaLogo Landscape 5 2.png";
import Link from 'next/link';
import { NextRouter } from 'next/router';


const DashboardPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-1/6 bg-gray-800 text-white p-4">
        <div>
          <Image src={wokpaImage} alt="Dashboard Image" width={100} height={100} />
          {/* Add navigation links or components here */}
        </div>
      </aside>
      <main className="w-5/6 p-4 h-24">
      <div className="relative md:w-40 h-24 flex items-center">
        <input
          type="text"
          className="text-base focus:outline-none active:outline-none border border-gray-300 w-full md:w-96 sm:w-96 h-20 pl-6 pr-12 rounded-lg"
          placeholder="Search by Podcast Name, Host name, Categories, Tags..."
          />
        <div className='pl-72 flex justify items-end space-x-6 right-0'>
        <Link href="/download" 
        className="bg-gray-800 text-white rounded-md whitespace-nowrap px-4 py-2">
          Download the App
        </Link>
        <Link href="/signUp"
        className="bg-cyan-600 text-white rounded-md px-4 py-2">
          SignUp          
        </Link>
        <Link href="/login" className="bg-gray-700 text-white rounded-md px-4 py-2">
          Login
        </Link>
        </div>
      </div>
    </main>
    </div>
  );
};

export default DashboardPage;
