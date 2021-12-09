import React from 'react';
import './MovieProviders.css'
import { IMAGE_BASE_URL, ICON_SIZE } from '../../config';

const MovieProviders = ({ watchproviders }) => {
    console.log(watchproviders)
    let flatrate = []

    const Providers = () => {
        for (let key in watchproviders) {
            let obj = watchproviders[key].results.IN
            if (obj !== undefined) {
                if (obj.hasOwnProperty("flatrate")) {
                    flatrate.push(obj.flatrate)
                    console.log(flatrate)
                }
            }

        }
    }

    console.log(Providers())


    return (

        <div className="providers-img">{flatrate.map((item) => {
            return item.map((item) => {
                return (
                    <div key={item.provider_id}>
                        <img style={{ height: "30px" }} src={`${IMAGE_BASE_URL}${ICON_SIZE}/${item.logo_path}`} alt="actor" />
                    </div>
                )
            })

        })}
        </div>

    )
}

export default MovieProviders;