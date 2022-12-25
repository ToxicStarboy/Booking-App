import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./featured.css"

const Featured = () => {

    const { data, loading} = useFetch("/hotels/countByCity?cities=Mumbai,Varanasi,Kolkata");

  return (
    <div className="featured">
        {loading ? ("Loading please wait") :
        (<>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/12460246/pexels-photo-12460246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/12356320/pexels-photo-12356320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Varanasi</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/13612812/pexels-photo-13612812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Jaipur</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div>
        </>
        )}
        {/* <div className="featuredItem">
            <img src="https://images.pexels.com/photos/10440693/pexels-photo-10440693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Darjeeling</h1>
                <h2>246 properties</h2>
            </div>
        </div> */}
    </div>
  )
}

export default Featured