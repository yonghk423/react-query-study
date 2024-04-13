import React, { useState, useEffect } from 'react'
import { Query, useQuery } from '@tanstack/react-query'
import { getPosts } from '../api/api'
import QueryApp2 from './QueryApp2'


export default function QueryApp1() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,

    })
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>An error has occurred: {error.message}</div>
    }
    return (
        <div>
            {
                data?.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
            <div>
                <QueryApp2 />
            </div>
        </div>
    )
}
