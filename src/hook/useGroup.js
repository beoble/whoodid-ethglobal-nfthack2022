import React, { useState, useEffect } from 'react'

const useGroup = () => {
    const [groups, setGroups] = useState([NFTGroup.Whoodid]);

    const addGroup = (group) => {
        if(!groups.includes(group))
            setGroups({...group, group})
    }

    const removeGroup = (group) => {
        if(groups.includes(group)) {
            setGroups(groups.filter((item) => item !== group))
        }
    }

    return {groups, addGroup, removeGroup, setGroups}
}

export const NFTGroup = {
    Whoodid: "Whoodid",
    BoredApeYachtClub: "BoredApeYachtClub",
    Cryptoadz: "Cryptoadz",
    CryptoPunk: "CryptoPunk",
    CoolCats: "CoolCats",
    Mekaverse: "Mekaverse"
}

export default useGroup;