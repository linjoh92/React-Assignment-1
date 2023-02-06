import { useState } from 'react'
import Me from './assets/founder_linn.jpeg'
import Styling_Page from './assets/styling_page_friday.jpeg'
import Friday from './assets/friyay.jpeg'
import './App.css'

function getActiveClassName (activeArticle, currentArticle, showAllArticles) {
  if (activeArticle === currentArticle) {
    return 'show-article','pagination-active'
  } else if (activeArticle === showAllArticles) {
    return 'show-article','pagination-active'
  } else {
    return 'hide-article'
  } 
}

function App() {
  const [activeArticle, setActiveArticle] = useState('First Article')
  const [showAllArticles] = useState('all')
  const [showAllText, setShowAllText] = useState('Show all articles')
  const [pageTitle, setPageTitle] = useState('About me')

  const Article = (props) => {
    return (
      <article className={`article ${getActiveClassName(activeArticle, props.class , 'all')}`}>
        <h2 className="titel">{props.title}</h2>
        <p>{props.content1}</p>
        <p>{props.content2}</p>
        <div className="img-container"><img className="img" src={props.image} alt={props.title} /></div>
      </article>
    )
  }

  const Pagination = (props) => {
    return (
      <div className={`pagination-number ${getActiveClassName(activeArticle, props.class, 'all')}`}>{props.number}</div>
    )
  }

  function setArticleAndTitle(title,article) {
    setShowAllText('Show all articles')
    setPageTitle(title)
    return article + ' Article'
  }

  return (
    <>
    <div className='body-container'>

      <header>
        <h4>JavaScript Ramverk - Week 1 – Assignment 1</h4>
      </header>

      <div>
          <h1 className="titel-page">Assignment 1 - {pageTitle}</h1>
      </div>

      <div className='content-container'>  
        <div className='article-container'>
          <Article 
            class='First Article'
            title='About Me'
            content1='I’ve been freelancing as a creative consultant for the last five years. I have mostly done Art Director jobs and worked with graphic/product design and social media.'
            content2='Programming is a new chapter for me and I love it! For the first time in my working career, I´m satisfied. So far I have learned HTML, CSS, javascript Vanilla, and Jquery. I have also learned the basics of UX/UI - design. The styling part, CSS, comes naturally to me and I think it´s really funny, I believe my background as a graphic designer is a great asset to me. With that said I love all parts, solving problems and finding effective ways to do things is a trigger for me, I can´t stop when I start and I´m eager to learn more. I am very excited to learn React!'
            image={Me}
          />
          <Article 
            class='2nd Article'
            title='Idé Assignment 1'
            content1='Project - Friday is the best day! My page will show how many minuts, hours and days it is left until Friday'
            content2='I think this is a funny idea and I believe durin next week I will be able to work with dates and make a calc of this. As the assignment is given I will focus mostly on styling/CSS.'
            image={Friday}
          />
          <Article 
            class='3rd Article'
            title='Style idé'
            content1='Funny friday team! This page will give you super peppy styling that contributes to the counters.'
            content2='I look on dribble and found this. I think the colors and the playfulness is perfect for my page.'
            image={Styling_Page}
          />
        </div>
        
        <div className="pagination">
          <div className="previous" onClick={() => {
              setActiveArticle ((a) => {
                if (a === 'First Article'){
                  return setArticleAndTitle('Styling','3rd')
                } else if (a === '3rd Article'){
                  return setArticleAndTitle('Idé','2nd')
                } else {
                  return setArticleAndTitle('About me','First')
                }
              })
            }}>⬅</div>
            <div className="pagination-container">
              <Pagination class='First Article' number='1'/>
              <Pagination class='2nd Article' number='2'/>
              <Pagination class='3rd Article' number='3'/>
            </div>
          <div className="next" onClick={() => {
               setActiveArticle ((a) => {
                if (a === 'First Article'){
                  return setArticleAndTitle('Idé','2nd')
                } else if (a === '2nd Article'){
                  return setArticleAndTitle('Styling','3rd')
                } else {
                  return setArticleAndTitle('About me','First')
                }
              })
            }}>⮕</div>  
        </div>

        <div className='all-btn'>
          <p onClick={() => {
             setShowAllText((a) => {
              if (a === 'Show all articles') {
                setPageTitle('All articles')
                return 'Hide articles'
              } else {
                return 'Show all articles'
              }
             })
             setActiveArticle((a) => {
              if(a === 'all') {
                return setArticleAndTitle('About me','First')
              } else {
                return showAllArticles
              }
             })  
          }}>{showAllText}</p>
        </div>
      </div> 

      <footer>
        <p className="footer-text">Copyright 2023© Linn Johansson</p>
      </footer>

    </div>
    </>
  )
}

export default App
