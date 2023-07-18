import React, { useState } from 'react'
import Container from "./container";
import { Configuration, OpenAIApi } from "openai";

const SearchBar = () => {
  const [textInput, setTextInput] = useState('');
  const [resultInput, setResultInput] = useState('');
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  function handleChange(e) {
    setTextInput(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setResultInput('Editing...');
    setTimeout(() => {
      // delay for no reason
    }, 3000);
    try {
      const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
              {
              "role": "system",
              "content": "You will be provided with statements, and your task is to convert them to standard English."
              },
              {
              "role": "user",
              "content": textInput
              }
          ],
          temperature: 0,
          max_tokens: 64,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
      });
    const data = response.data.choices[0].message;
    setResultInput(data.content);
    console.log(data);
    } catch (error) {
        setResultInput("Error occured while processing the draft 😞");
        console.error("Error processing the POST request", error);
    } 
    setTextInput('');
  };
  return (
    <>
      <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap items-center justify-center">
        
        <form onSubmit={handleSubmit}>
          <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <textarea id="comment" rows="4" cols="97" 
                    className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
                    placeholder="Write your draft..." 
                    value={textInput} 
                    onChange={handleChange} 
                    required>
                  </textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 hover:bg-indigo-800">
                      Edit
                  </button>
              </div>
          </div>
        </form>

      </Container>
      {resultInput !== '' && 
        <SearchResult text={resultInput}/>
      }
    </>
  );
};


const SearchResult = (props) => {
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap items-center justify-center">
      <div className="max-w-mdc md:min-w-mnc sm:min-w-msc p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400">{props.text}</p>
      </div>
    </Container>
  );
};


export default SearchBar;
