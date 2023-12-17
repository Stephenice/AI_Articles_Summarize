import React, { useState, useEffect } from "react";
import { useLazyGetSummaryQuery } from "../services/article";

import { copy, linkIcon, loader, tick } from "../assets";


function Demo() {
    const [article, setArticle] = useState({
        url: "",
        summary: "",
      });

    //   console.log('object', useLazyGetSummaryQuery)
      const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

      const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const {data} = await getSummary({articleUrl: article.url});
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            // const updatedAllArticles = [newArticle, ...allArticles];
      
            // update state and local storage
            setArticle(newArticle);
            // setAllArticles(updatedAllArticles);
            // localStorage.setItem("articles", JSON.stringify(updatedAllArticles));

            console.log('newArticle', newArticle);
          }
      }

      
  return (
    <section  className='mt-16 w-full max-w-xl'>

        {/* search */}
      <div className='flex flex-col w-full gap-2'>
        <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
        <img
            src={linkIcon}
            alt='link-icon'
            className='absolute left-0 my-2 ml-3 w-5'
          />

        <input
            type='url'
            placeholder='Paste the article link'
            value={article.url}
            onChange={(e) => setArticle( {...article, url: e.target.value}) }
            // onKeyDown={}
            required
            className='url_input peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
        />

        <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
        >
           <p>↵</p>
        </button>

        </form>

        {/* Browse URL History */}

      </div>

      {/* Display results */}
    </section>
  )
}

export default Demo
