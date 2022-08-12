import React from 'react'
import {fetchDataById} from "../fetch/fetchData";
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";



export default function ItemDescription() {

    const [itemDescription, setItemDescription] = useState({})

    const {id} = useParams()

    useEffect(() => {
        const fetch = async () => {
            console.log("EFFECT START")
            const res = await fetchDataById(id);
            console.log("EFFECT")

            console.log(res)
            setItemDescription(res)
        }
        fetch();

    }, [id])
    

  return (
    <div>
      <img className='center' src={itemDescription.image} alt="" />
      <div>
        <h2>{itemDescription.title}</h2>
        <div>{itemDescription.description}</div>
        <div>{itemDescription.category}</div>
        <div>{itemDescription.price}</div>        
        <div>{itemDescription.rating.rate}</div>
      </div>

    </div>
  )
}
