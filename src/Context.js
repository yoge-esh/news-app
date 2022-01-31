import React, { useEffect } from 'react';
import './Context.css';


function Context() {
  const [news, setNews] = React.useState([]);

  const getUsers = async () => {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    setNews(await response.json());
    // return data;
    // console.log(data);
  };


  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1>List of API's Data </h1>
      <div className='container-fluid mt-5'>
        <div className='row text-center' >

          {
            news.map((item, index) => {
              return (
                <div className='col-10 col-md-4 mt-5'>
                  <div className='card p-2'>
                    <div className='d-flex align-items-center'>
                      <div className='image'> <img src={item.image} alt='image' className='rounded' width={'155'} /> </div>
                      <div className='ml-3 w-100'>
                        <h5 className='mb-0 mt-0 text-left'>{item.title}</h5><span className='textleft'>{item.rt_score }</span>
                        <div className='p-2 m-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                          <div className='d-flex flex-column'><span className='articles'>{item.director}</span><span className='number1'>{item.producer}</span></div>
                          <div className='d-flex flex-column'><span className='followers'>{item.original_title_romanised}</span><span className='number2'>{item.id}</span></div>
                          <div className='d-flex flex-column'><span className='rating'>{item.release_date}</span><span className='number3'>{item.running_time}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  );
}

export default Context;
