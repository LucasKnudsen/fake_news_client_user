import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import Articles from '../modules/Articles';
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

const Article = () => {
const {article} = useSelector((state) => state)



  return (
    <>
      <Navbar/>
      <h1>Boom</h1>
      <h2>{article.title}</h2>
      <Footer/>
    </>
  )
}

export default Article
