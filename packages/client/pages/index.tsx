import React from "react"
import { Page } from "@/components/Page"

export default function Home() {
      return (
            <Page title='Home' navigation='home'>
                  <div className='flex flex-col p-10'>
                        <h1 className="text-center text-3xl md:text-5xl font-bold underline">
                              Welcome! Find a book that matches your personality.
                        </h1>
                        <section className='text-center p-5 md:p-10'>
                              <h2>Please enter the following details:</h2>
                              <form className="flex flex-col text-center mt-5 space-y-3">
                                    <label>
                                          Age:
                                          <input type='number' name='age' />
                                    </label>
                                    <label>
                                          Gender:
                                          <select name='gender'>
                                                <option value='male'>Male</option>
                                                <option value='female'>Female</option>
                                                <option value='other'>Other</option>
                                          </select>
                                    </label>
                                    <input type='submit' name='submit' />
                              </form>
                        </section>
                  </div>
            </Page>
      )
}