import { useState, useEffect } from "react";

import { requestCategory } from "../services/request";

export default function setCourses () {
    const [list, setList] = useState([])
    useEffect( () => {
        const retorno = requestCategory();
        setList(retorno.list)
    }) 
    return [list]
}