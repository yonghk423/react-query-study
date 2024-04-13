import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../api/api'


export default function QueryApp3() {
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
        <div
            style={{
                backgroundColor: "green"
            }}
        >
            {
                data?.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}
