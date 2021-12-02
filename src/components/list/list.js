import {useContext, useState} from 'react'
import { ThemeContext } from '../../context/theme.js'
import { Button } from "@blueprintjs/core";


function List(props){
  let settings = useContext(ThemeContext);
  let [startIndex, setStartIndex] = useState(0)

  const handleNextClick = () => {
    setStartIndex(startIndex + (settings.nOfItem))
  }

  const handlePrevClick = () => {
    setStartIndex(startIndex - (settings.nOfItem))
  }

  const sortDisplay = (list) => {
    if(settings.sortList){
      switch(settings.sortList){
        case 'lowToHighDif':
          list.sort((a,z)=>{
            let lowDif = a.difficulty
            let highDif = z.difficulty
            return lowDif - highDif
          })
          break;
        case 'highToLowDif':
          list.sort((a,z)=>{
            let lowDif = a.difficulty
            let highDif = z.difficulty
            return highDif - lowDif
          })
          break;

        default:
          break;
      }
    }
  }

  const listDisplay = () => {

  }

  return (
    <div>
      <Button onclick={handlePrevClick}> Previous </Button>
      <Button onclick={handleNextClick}> Next </Button>
    </div>
  )
}

export default List;