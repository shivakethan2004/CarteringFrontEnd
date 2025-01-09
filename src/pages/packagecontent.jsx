import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import "./packagecontent.css";
import add_icon from "../utility/packagecontent/add-icon.png";
import backgroundimg from "../utility/Register/background.png"
export default function PackageContent() {
  const { packagecontent } = useParams(); // Get dynamic route parameter
  const [packageData, setPackageData] = useState(null); // Store fetched package data
  const [onClick, setOnClick] = useState(false); // Track if a course is selected
  const [selectedCourse, setSelectedCourse] = useState(""); // Store selected course
  const [item, setItem] = useState([]); // Store fetched items for a course
  const [loadingItems, setLoadingItems] = useState(false); // Track item loading state

  // Fetch items for the selected course
  const fetchItems = async () => {
    if (!selectedCourse) return; // Prevent unnecessary API calls

    setLoadingItems(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/catering/course/items",
        {
          course: selectedCourse,
        }
      );
      const [key, value] = Object.entries(response.data)[0]
      setItem(value|| []); 
      
      // Set items or empty array if no data
    } catch (error) {
      console.error("Error fetching items:", error.response?.data || error.message);
      setItem([]); // Set empty array on error
    } finally {
      setLoadingItems(false); // Stop loading indicator
    }
  };

  // Fetch package data based on `packagecontent`
  const getPackage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/catering/${packagecontent}`
      );
      setPackageData(response.data || {}); // Set fetched package data
    } catch (error) {
      console.error("Error fetching package:", error.response?.data || error.message);
    }
  };

  // Fetch items when `selectedCourse` changes
  useEffect(() => {
    fetchItems();
  }, [selectedCourse]);

  // Fetch package data on component mount or when `packagecontent` changes
  useEffect(() => {
    getPackage();
  }, [packagecontent]);

  return (
    <PackageContainer>
      <MenuContainer>
        <img className='img_background'
        src={backgroundimg} alt="error" />
        <div className="menu_heading">
          
          <h1>{packagecontent}</h1>
        </div>

        <div className="menu_details">
          {packageData ? (
            Object.entries(packageData).map(([course, details], index) => (
              <div key={index} className="course-container">
                <h2>{course}</h2>
                {typeof details === "object" && !Array.isArray(details) ? (
                  <>
                    <p>Options: {details.options}</p>
                    <div className="add">
                      <button
                        className="add_button"
                        onClick={() => {
                          setOnClick(true);
                          setSelectedCourse(course); // Set selected course
                        }}
                      >
                        <img className="add_icon" src={add_icon} alt="Add"></img>
                      </button>
                    </div>
                  </>
                ) : Array.isArray(details) ? (
                  <p>Extras: {details.join(", ")}</p>
                ) : (
                  <p>{details}</p>
                )}
              </div>
            ))
          ) : (
            <p>Loading package data...</p>
          )}
        </div>
      </MenuContainer>

      <ItemContainer>
  {onClick && selectedCourse ? (
    <>
      <h1>{selectedCourse}</h1>
      {loadingItems ? (
        <p>Loading items...</p>
      ) : (
        <>
         {
    Object.entries(item).map(([id, itemname]) => {
      
      return (
        <div key={id} className="itemlist">
          {/* Render itemname or any other details */}
          <h2>{itemname.name}</h2>
          <div className="item-details">
            <img className="item_img"
            src={'https://imgs.search.brave.com/6qpEn9cf-whyVy961QEHi0i45dDRrrS7qLSIWdsB8pc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb29r/aWVhbmRrYXRlLmNv/bS9pbWFnZXMvMjAx/NS8xMC90aGFpLXJl/ZC1jdXJyeS13aXRo/LXZlZ2V0YWJsZXMt/MS5qcGc'} alt="laoading" />
                        <p>{itemname.description}</p>
                        {/* Add more item properties here */}
                      </div>
        </div>
      );
    })
  }
        </>
      )}
    </>
  ) : (
    <h1>Select a course to view items.</h1>
  )}
</ItemContainer>

    </PackageContainer>
  );
}

// Styled Components
const PackageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* background-color: #252836; */
  color: white;
  position: relative;
`;

const MenuContainer = styled.div`
  flex: 6;
  background-color: white;
  scroll-behavior:smooth;
  overflow-y: auto;
  padding: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
 
`;

const ItemContainer = styled.div`
 height: auto;
  flex: 4;
  background-color: #1f1d2b;
 border-radius: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  overflow-y: auto;
  margin: 10px;
  scroll-behavior: smooth;
  
`;
