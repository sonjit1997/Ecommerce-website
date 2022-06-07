import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div class="card-group  ">
    <div class="card ">
      <div class="card-body bg-dark text-white text-center ">
        <h5 class="card-title text-black-50 text-center">About</h5>
        <ul class="list-group ">
          <li id='hover' class="list-group-item bg-dark text-white text-center ">
            Contact Us
          </li>
          <li id='hover' class="list-group-item bg-dark text-white text-center ">
            About Us
          </li>
          <li id='hover' class="list-group-item bg-dark text-white text-center">
            Our Stories
          </li>
        </ul>
        <hr />
        <i class="fa fa-address-card me-2" aria-hidden="true"></i>
        <i class="fa fa-user-circle me-2" aria-hidden="true"></i>
        <i class="fa fa-book" aria-hidden="true"></i>
      </div>
    </div>
    <div class="card">
      <div class="card-body bg-dark text-white text-center ">
        <h5 class="card-title text-black-50 text-center ">Help</h5>
        <ul class="list-group">
          <li id='hover' class="list-group-item bg-dark text-white text-center">
            Payment
          </li>
          <li id='hover' class="list-group-item bg-dark text-white text-center">
            Shipping
          </li>
          <li id='hover' class="list-group-item bg-dark text-white text-center">
            Cancellation & Return
          </li>
        </ul>
        <hr />
        <i class="fa fa-credit-card-alt me-2" aria-hidden="true"></i> 
        <i class="fa fa-truck me-2" aria-hidden="true"></i>
        <i class="fa fa-reply" aria-hidden="true"></i>
      </div>
    </div>
    <div class="card">
      <div class="card-body bg-dark text-white text-center">
        <h5 class="card-title text-black-50 text-center ">Social</h5>
        <ul class="list-group">
          <li id='hover' class="list-group-item bg-dark text-white text-center">
            Instagram
          </li>
          <li id='hover' class="list-group-item bg-dark text-white text-center">
            Twiter
          </li>
          <li id='hover' class="list-group-item bg-dark text-white text-center">
            Facebook
          </li>
        </ul>
        <hr />
        <i class="fa fa-instagram me-2" aria-hidden="true"></i>
        <i class="fa fa-twitter-square  me-2" aria-hidden="true"></i>
        <i class="fa fa-facebook-square" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  )
}

export default Footer;