import React from 'react'
import {useSelector} from "react-redux";

export default function AccountStatus() {
    const isSavingsAccount = useSelector(state => state.banking.isSavingsAccount)
    return (
        <div>
            <h1>{isSavingsAccount === false ? "Checking Account" : "Savings Account"}</h1>
        </div>
    )
}
