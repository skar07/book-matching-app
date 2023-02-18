import React from "react";
import Link from 'next/link'

type NavigationProps = {
      type: string;
}

export const Navigation: React.FC<NavigationProps> = ({ type }) => {
      return (
            <ul className='flex flex-row w-screen justify-around md:justify-start align-middle bg-lapis-lazuli'>
                  <li className={
                        type === 'home' ?
                              `w-full md:w-auto py-5 text-lg text-center font-semibold bg-robin-egg-blue text-baby-powder hover:bg-palatinate` :
                              `w-full lg:w-auto bg-blue-700 text-center text-lg font-semibold  py-5 hover:bg-palatinate`
                  }>
                        <Link href='/' className="px-14 py-5 text-lg font-semibold">
                              Home
                        </Link>
                  </li>
                  <li className={
                        type === 'result' ?
                              `w-full lg:w-auto text-center bg-robin-egg-blue text-baby-powder py-5` :
                              `w-full lg:w-auto text-center text-baby-powder hover:bg-palatinate py-5`
                  }>
                        <Link href='/result' className="px-14 py-5 text-center text-lg font-semibold">
                              Result
                        </Link>
                  </li>
            </ul>
      )
}