import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../api/api'


export default function QueryApp() {
    const { data, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,

    })
    console.log(data)

    return (
        <div>
            <h1>Query</h1>
        </div>
    )
}
