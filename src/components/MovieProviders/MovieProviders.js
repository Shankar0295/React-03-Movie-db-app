import React from 'react';
import './MovieProviders.css'

const MovieProviders = ({ watchproviders }) => {
    console.log(watchproviders)


    const Providers = () => {
        let buyArray = []
        let rentArray = []
        let flatrate = []
        for (let key in watchproviders) {
            let obj = watchproviders[key].results.IN
            if (obj.hasOwnProperty("buy")) {
                buyArray.push(obj.buy)
                console.log(buyArray, "dafadsf")
            } if (obj.hasOwnProperty("rent")) {
                rentArray.push(obj.rent)
                console.log(rentArray, "dafadsf")
            } if (obj.hasOwnProperty("flatrate")) {
                flatrate.push(obj.flatrate)
                console.log(flatrate, "dafadsf")
            }

        }
    }

    console.log(Providers(), "arr")

    return (
        <div>
            <h2>OTT/Providers</h2>
            <div>
                <h2>Now Streaming</h2>
                {/* <ul>{Providers().map((item) => {
                    return item.flatrate.map((flat, index) => {
                        return (<li key={index}>{flat.provider_name}</li>)
                    })
                })}
                </ul> */}
            </div>
            <h2>Rent this Movie on</h2>
            <h2>Buy this Movie on</h2>
        </div>
    )
}

export default MovieProviders;