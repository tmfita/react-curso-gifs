import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category )
     
    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && ( <h2>Cargando...</h2> )
        }
        <div className="card-grid">
            { images.map( ( image )=>( 
                <GifItem 
                    key={ image.id }
                    { ...image } //envía todas las propiedades "esparcidas", sin tener que escribir cada una por separado
                />)) 
            }
        </div>
    </>
  )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}