import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const questions = [
  {
    question: "How to get a new card?",
  },
  {
    question: "How to get a loan?",
  },
  {
    question: "How to get an auto loan?",
  },
  {
    question: "How to get an extension on a payment?",
  },
  {
    question: "How to get refunds for a fradulent claim?",
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : questions.filter(
        (lang) =>
          lang.question.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion: { question: string }) =>
  suggestion.question;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion: { question: string }) => (
  <div>{suggestion.question}</div>
);
const Header = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<typeof questions>([]);
  const onSuggestionsFetchRequested = (value: string) => {
    setSuggestions(getSuggestions(value));
  };
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  return (
    <>
      <div className="w-full flex flex-col items-end justify-between px-10 py-2 pt-6 md:flex-row bg-white ">
        <ul className="flex w-full gap-x-5 text-sm text-black">
          <li className="cursor-pointer font-bold">Business</li>
          <li className="cursor-pointer">Finance</li>
          <li className="cursor-pointer">Investment</li>
        </ul>

        <div
          tabIndex={0}
          className="flex items-center justify-center gap-x-2 border-b-2 border-b-black focus-within:border-b-blue-600"
        >
          {/* <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        
      /> */}
          {/* <input type="text" className="p-2 outline-none" /> */}
          <FaSearch size={20} />
        </div>
      </div>
      <div className="flex px-5 py-2 items-center justify-between w-full bg-blue-600 text-white">
        <ul className="hidden md:flex w-full gap-x-5 text-sm">
          <li>Products</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>About</li>
        </ul>

        <div className="w-full">
          <Link to="/">
            <h1 className="font-bold text-3xl">BFSI</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
