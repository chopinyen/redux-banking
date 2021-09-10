import React from 'react'
import {useSelector} from "react-redux";

export default function Balance() {
    const balance = useSelector(state=>state.banking.balance)

    const store = useSelector(state => state)

    return (
        <div>
            <h1>{balance}</h1>
        </div>
    )
}
