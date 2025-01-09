import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Package from '../../utils/Package'
import image from '../../utility/marriage_out.png'

const PackageContent2 = () => {
    const {packageName} = useParams()
    const [packageContent, setPackageContent] = useState('')
    const [error,setError] = useState('')
    const getPackage = async () =>{
        try {
            const response  = await axios.get(
                `http://localhost:5000/api/v1/catering/${packageName}`
            )   
            setPackageContent(response.data)
            // console.log(response.data)
        } catch (error) {
            setError(error)
        }
     
    };
    useEffect(()=>{
        getPackage()
    } ,[packageName])


    //temperory code:
   Object.keys(packageContent).forEach(key => {
    console.log(`${key}: ${packageContent[key]}`)
   })
   Object.entries(packageContent).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
   console.log(packageContent)
  return (
    <>
    <div>
      
    </div>
    </>
    
  )
}

export default PackageContent2