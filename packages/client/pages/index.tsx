import React from "react"
import { Page } from "@/components/Page"

export default function Home() {
      return (
            <Page title='Home' navigation='home'>
                  <div className='flex flex-col p-10'>
                        <h1 className="text-center text-3xl md:text-5xl font-bold underline">
                              Welcome! Find a book that matches your personality.
                        </h1>
                        <section className='flex justify-center flex-col p-5 md:p-10 text-center'>
                              <h2 className="text-2xl">Please enter the following details:</h2>
                              <form className="flex flex-col text-center justify-center mt-5 space-y-3 font-medium text-xl"
                                    action="/result"
                                    method="post"
                              >
                                    <label className="px-2">
                                          Age:
                                          <input type='number' name='age' className="mx-3 p-2 border-2 border-dark-purple rounded-md focus:outline-none"/>
                                    </label>
                                    <label>
                                          Gender:
                                          <select name='gender' className="p-2 mx-3 rounded-md border-2 border-claret hover:border-dark-purple hover:text-dark-purple">
                                                <option value='male'>Male</option>
                                                <option value='female'>Female</option>
                                                <option value='other'>Other</option>
                                          </select>
                                    </label>
                                    <input type='submit' name='submit' className="p-3 text-center bg-robin-egg-blue w-1/6"/>
                              </form>
                        </section>
                  </div>
            </Page>
      )
}