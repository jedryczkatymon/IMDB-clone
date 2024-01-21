import '../styles/SearchBar/SearchBar.css'
import React, { useState, useEffect } from 'react';
import Select, { components } from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import magnifyingGlass from "../assets/magnifying-glass.svg";
import movies from "../assets/movies.svg";
import tvShows from "../assets/tv-shows.svg";
import celebs from "../assets/celebs.svg";
import companies from "../assets/companies.svg";
import keywords from "../assets/keywords.svg";
import advancedSearch from "../assets/advanced-search.svg";
import { ReactSVG } from 'react-svg';

const options = [
    { value: 'all', label: 'All', icon: magnifyingGlass },
    { value: 'titles', label: 'Titles', icon: movies },
    { value: 'tv-episodes', label: 'TV Episodes', icon: tvShows },
    { value: 'celebs', label: 'Celebs', icon: celebs },
    { value: 'companies', label: 'Companies', icon: companies },
    { value: 'keywords', label: 'Keywords', icon: keywords },
    { value: 'advanced-search', label: 'Advanced Search', icon: advancedSearch },
];

const styles = {
    control: (provided) => ({
        ...provided,
        width: "fit-content",
        backgroundColor: "#FFFFFF",
        borderRadius: "7px 0 0 7px",
        height: "30px",
        border: "none",
        borderRight: "1.5px solid #B2B2B2",
        boxShadow: "none",
        '&:hover': {
            backgroundColor: '#EDEDED'
        },
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "#1F1F1F",
        width: "15rem",
        height: "fit-content",
    }),
    menuList: (provided) => ({
        ...provided,
        minHeight: "22.6rem",
    }),
    option: (provided, state) => ({
        ...provided,
        fontFamily: "'Roboto-Bold', Helvetica, Arial, sans-serif",
        color: state.isSelected ? "#F4C519" : "#FFFFFF",
        backgroundColor: state.isSelected ? "#1F1F1F" : "#1F1F1F",
        backgroundColor: state.isFocused ? "#313131" : "#1F1F1F",
        '&:active': {
            backgroundColor: '#676767'
        },
        cursor: "pointer",
        fontSize: "20px",
    }),
    singleValue: (provided) => ({
        ...provided,
        fontSize: "15px",
        fontFamily: "'Roboto-Bold', Helvetica, Arial, sans-serif",
        fontWeight: 600,
        padding: "auto auto auto 0.1rem"
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        fontSize: "15px",
        transform: state.isFocused ? "rotate(180deg)" : "rotate(0deg)",
        color: '#121212',
        '&:hover': {
            color: '#121212'
        },
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: "none"
    }),
};

const SearchBar = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (value) => {
        setSelectedOption(value);
    };

    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
            {children}
        </components.SingleValue>
    );

    const Option = (props) => (
        <components.Option {...props} className="option">
            <ReactSVG src={props.data.icon} className={`icon ${props.isSelected ? 'iconYellow' : 'iconWhite'}`} />
            {props.data.label}
        </components.Option>
    );

    library.add(faCaretDown);

    const CaretDownIcon = () => {
        return <FontAwesomeIcon icon="caret-down" />;
    };

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <CaretDownIcon />
            </components.DropdownIndicator>
        );
    };

    useEffect(() => {
        function addBorder() {
            document.getElementById("container").style.border = "2px solid #F4C519";
        }

        function removeBorder() {
            document.getElementById("container").style.border = "none";
        }
        
        document.querySelector("#searchInput").addEventListener('focus', addBorder);
        document.querySelector("#searchInput").addEventListener('blur', removeBorder);

    }, []);

    return (
        <div id="container">
            <div id="select">
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    styles={styles}
                    isSearchable={false}
                    blurInputOnSelect
                    components={{
                        DropdownIndicator,
                        Option,
                        SingleValue
                    }}
                />
            </div>
            <form id="searchbar">
                <input id="searchInput" type="text" placeholder="Search IMDb" name="search"></input>
                <button id="searchButton" type="submit"></button>
            </form>
        </div>
    );
};

export default SearchBar;