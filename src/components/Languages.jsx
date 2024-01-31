import "../styles/Languages/Languages.css"
import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const fullySupported = [
    { value: 'en', lang: 'English (United States)', label: "EN" },
];

const partiallySupported = [
    { value: 'frc', lang: 'Français (Canada)', label: "FR" },
    { value: 'frf', lang: 'Français (France)', label: "FR" },
    { value: 'de', lang: 'Deutsch (Deutschland)', label: "DE" },
    { value: 'hi', lang: 'हिन्दी (भारत)', label: "HI" },
    { value: 'it', lang: 'Italiano (Italia)', label: "IT" },
    { value: 'pt', lang: 'Português (Brasil)', label: "PT" },
    { value: 'ese', lang: 'Español (España)', label: "ES" },
    { value: 'esm', lang: 'Español (México)', label: "ES" },
]

const groupedOptions = [
    {
        label: "Fully Supported",
        options: fullySupported
    },
    {
        label: "Partially Supported",
        options: partiallySupported
    }
];

const styles = {
    control: (provided) => ({
        ...provided,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        borderRadius: "7px",
        height: "32px",
        border: "none",
        boxShadow: "none",
        marginLeft: "-0.8rem",
        '&:hover': {
            backgroundColor: '#252525'
        },
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "#1F1F1F",
        width: "15rem",
        height: "fit-content",
        zIndex: "2"
    }),
    menuList: (provided) => ({
        ...provided,
        minHeight: "35.3rem",
    }),
    group: (provided) => ({
        ...provided,

    }),
    groupHeading: (provided) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        fontSize: "13px",
        fontFamily: "'Roboto Bold', Helvetica, Arial, sans-serif",
        fontWeight: "700",
        letterSpacing: "1.2px",
        marginTop: "-0.8rem",
        color: "#FFFFFF",
        height: "3.5rem",
        borderTop: "1.5px solid #313131",
        borderBottom: "1.5px solid #313131",
    }),
    option: (provided, state) => ({
        ...provided,
        fontFamily: state.isSelected ? "'Roboto Bold', Helvetica, Arial, sans-serif" : "Roboto, Helvetica, Arial, sans-serif",
        fontWeight: state.isSelected ? "700" : "500",
        backgroundColor: state.isSelected ? "#1F1F1F" : "#1F1F1F",
        backgroundColor: state.isFocused ? "#313131" : "#1F1F1F",
        '&:active': {
            backgroundColor: '#676767',
        },
        cursor: "pointer",
        fontSize: "14px",
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "#FFFFFF",
        fontSize: "14px",
        fontFamily: "'Roboto Bold', Helvetica, Arial, sans-serif",
        fontWeight: 600,
        padding: "auto auto auto 0.1rem"
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        fontSize: "12px",
        transform: state.isFocused ? "rotate(180deg)" : "rotate(0deg)",
        color: '#FFFFFF',
        marginLeft: "-10px",
        '&:hover': {
            color: '#FFFFFF'
        },
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: "none"
    }),
};

const Languages = () => {
    const [selectedOption, setSelectedOption] = useState(fullySupported[0]);

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
            <label>
                <input type="radio"></input>
                {props.data.lang}
            </label>
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

    return (
        <div id="languages">
            <div id="select">
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={groupedOptions}
                    styles={styles}
                    isSearchable={false}
                    closeMenuOnSelect={false}
                    components={{
                        DropdownIndicator,
                        Option,
                        SingleValue
                    }}
                />
            </div>
        </div>
    );
};

export default Languages;