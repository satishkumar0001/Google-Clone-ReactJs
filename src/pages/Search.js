import React, { useState } from 'react'
import "./Search.js"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {useNavigate} from 'react-router-dom';
import "./Search.css"
import CameraIcon from '@material-ui/icons/Camera';
import { useStateValue } from '../StateProvider.js';
import { actionTypes } from '../reducer.js';

const Search = ({hidebuttons}) => {
const [{},dispatch] = useStateValue();

const [input, setInput] = useState("");

const Navigate = useNavigate();

const Search =(e)=> {
  e.preventDefault();
  dispatch({
    type:actionTypes.SET_SEARCH_TERM,
    term:input
  })
  Navigate("/search");
}

  return (
    <form className='search'>
    <div className='search__input'>
      <SearchIcon className='searchicon'/>
      <input value ={input} onChange={e=>setInput(e.target.value)}/>
      <MicIcon/>
      <CameraIcon/>
      
    </div>
    {
      !hidebuttons ? (<div className='search__buttons'>
      <button type='submit' onClick={Search} varient="outline"> Google Search</button>
      <button type='submit' varient="outline"> Feeling Happy</button>
    </div>) : ( 
  <div className='search__buttons' style={{display:'none'}}>
    <button type='submit' onClick={Search} varient="outline"> Google Search</button>
  </div>

    )
    }

    
    </form>
  )
}

export default Search
