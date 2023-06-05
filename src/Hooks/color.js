import { useState, useEffect } from "react";


import { colorsFilter } from "../style/colors";

export default function color(){
    const [cor, setCor] = useState([])
    useEffect( () => {
        const retorno = colorsFilter
        setCor(retorno.list)
    })
    return [cor]
}