import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function UserHome() {
  const authentication_user = useSelector(state => state.authentication_user)

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card border-0 shadow-lg rounded-3">
            <img src='https://cdn.pixabay.com/photo/2024/04/02/04/40/ai-generated-8670017_1280.jpg' className="card-img-top" alt="Tree" />
            <div className="card-body text-center">
              <h5 className="card-title mb-3">Welcome Back, {authentication_user.isAuthenticated ? authentication_user.name : 'Guest'}</h5>
              <p className="card-text">
                We're delighted to have you here! Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <Link to={authentication_user.isAuthenticated ? '/profile' : '/login'} className="btn btn-custom">{authentication_user.isAuthenticated ? 'Go To Profile' : 'Login'}</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-lg rounded-3">
            <div className="card-body">
              <h5 className="card-title mb-3">Latest Updates</h5>
              <p className="card-text">
                Stay updated with the latest news and developments in our community. Don't miss out! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
    
  )
}

export default UserHome
