"use client"

import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'


interface MenuList {
  name: string
  id: number
  description: string
  price: number
  type: string
}

interface ApiResponse {
  status: number
  data: {
    data: {
      Data: MenuList[]
    }
  }
}


const About = () => {

  const [data, setData] = useState<MenuList[]>([])
  
  const getDataMudo = async () => {
    try {
      const res = await axios.get<ApiResponse>('https://api.mudoapi.tech/menus')
      setData(res.data?.data?.data.Data)
    } catch (error) {
      const axiosErorr = error as AxiosError
      console.log(axiosErorr?.response);
    }
  }

  useEffect(() => {
    getDataMudo()
  }, [])


  return (
    <div>
      <h1 className='text-2xl font-medium'>About Page</h1>
      {
        data.map(data => (
          <div key={data.id}>
            <h1>{data?.name}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default About