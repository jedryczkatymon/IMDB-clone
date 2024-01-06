import '../styles/SearchBar/SearchBar.css'
import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'all', label: 'All' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function SearchBar() {

    return (
        <>
            <Select 
            options = {options}
            />
            <form id="searchbar">
                <input className="searchInput" type="text" placeholder="Search IMDb" name="search"></input>
                <button className="searchButton" type="submit"><i className="fa fa-search"></i></button>
            </form>
        </>
    );
}

//     return (
//         <>
//             <div className="searchBar">
//                 {/* <div className="dropdown">
//                     <div className='select'>
//                         <span className="selected">All</span>
//                         <div className="caret"></div>
//                     </div>
//                     <ul className="menu">
//                         <li className="active">All</li>
//                         <li>Titles</li>
//                         <li>TV Episodes</li>
//                         <li>Celebs</li>
//                         <li>Companies</li>
//                         <li>Keywords</li>
//                     </ul>
//                 </div> */}
//                 <Select options={options} onChange={(values) => this.setValues(values)} />
//                 <form id="searchbar">
//                     <input className="searchInput" type="text" placeholder="Search IMDb" name="search"></input>
//                     <button className="searchButton" type="submit"><i className="fa fa-search"></i></button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default SearchBar