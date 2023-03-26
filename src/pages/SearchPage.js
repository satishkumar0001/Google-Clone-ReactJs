import { Link } from '@material-ui/core'
import React from 'react'
import Search from './Search'
import './SearchPage.css'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

const SearchPage = () => {
const [{term}] = useStateValue();
const {data}= useGoogleSearch(term);
console.log(term);

  return (
    <div className='searchPage'>
      
      <div className='searchPage__header'>
        <Link to ="/"> 
          <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1679734394~exp=1679734994~hmac=0b6662e79c472455908e035f24cdbf426ed3961ceee063f504311a762995dd6d" className='sblogo' alt='logo'/>
        </Link>

        <div className='search__headerBody'>
            <Search hidebuttons/>
            
            <div className='searchPage__options'>
            <div className="searchPage__optionsLeft">
                
                <div className='searchPage__option'>
                    <SearchIcon/>
                    <Link to="/all">All</Link>
                </div>
                <div className='searchPage__option'>
                    <DescriptionIcon/>
                    <Link to="/all">Images</Link>
                </div>
                <div className='searchPage__option'>
                    <LocalOfferIcon/>
                    <Link to="/all">Shopping</Link>
                </div>
                <div className='searchPage__option'>
                    <RoomIcon/>
                    <Link to="/all">Maps</Link>
                </div>
                <div className='searchPage__option'>
                    <MoreVertIcon/>
                    <Link to="/all">More</Link>
                </div>
            </div>
            
            <div className='SearchPage__optionsRight'>
            <div className='searchPage__option'>
                    <Link to="/all">Settings</Link>
            </div>
            <div className='searchPage__option'>
                    <Link to="/tools">Tools</Link>
            </div>

            </div>
        </div>
        </div>
      </div>


{ term && (
      <div className='searchPage__results'>

        <p className='searchPage__resultCount'>
          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}
</p>
      
        
           {data?.items.map((item)=>(
            <div className='searchPage__result'>
            <a href={item.link} className='searchPage__resultLink'>

              
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img src={item.pagemap?.cse_image[0]?.src} className='searchPage__resultImage' alt="logo"/>

                )}
              {item.displayLink}
            </a>
            <a href={item.link} className="searchPage__resultTitle">
              <h2>{item.title}</h2>
            </a>
            <p className='searchPage__resultdescription'>{item.snippet}</p>
          </div>
          ))}
    </div>)
    }
    </div>
)};

export default SearchPage;

