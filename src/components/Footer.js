import React from "react";
import "../styles/index.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <img
          // src={require("./images/logo.png")}
          alt="Logo"
          className="logo"
        /> */}
        <div className="footer-grid">
          {/* Shop Section */}
          <div>
            <h3>Shop</h3>
            <ul>
              <li>All</li>
              <li>Home & Living</li>
              <li>Accessories</li>
              <li>Stationery</li>
              <li>Sale</li>
              <li>Gift Card</li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3>Helpful Links</h3>
            <ul>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
              <li>Cookie Policy</li>
            </ul>
           

          {/* Contact Section */}
          
             
            <div className="social-icons">
              <a href="#">
                <img src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU7V53///8gRZUyUZrn6vKKl785VZxAW6Dh5O5yg7QmSZbR1uUxUJojR5Y2U5vx8vdbcKqyutSXosVidq3a3urM0uPCyd6ps9B7i7n09vrx9Pm4wNikrs1MZKRYbqp/j7tqfbGapsiPnMIAMY0VP5JdM9iBAAAD+UlEQVR4nO3dbVOjMBSG4fDSUEISXtRatta67v7/37hF7eiMs5iKyTmHee4Zx08i13RIhACq7K1mqCu1lqp6aC4w9fqtr5z1mnrHfiztrav6D8K2M+vRXdKmay/CsiiodydKRVG+ClvrqfclUt62L8JunZ/gVNFNwt5Q70fETH8WVusbZN7TVaYaR70XUXONGiz1TkTNDqpe60D6mq/Vqg/D6UCk3gOEEEIIIYQQQgghhMjz1hr3ofz8ZZwxxlpbFFr2NUJ9tvmbzf2u2ZbjmGXZOI6/2rLc3jZ3u0P/MGz2N0dtnZPJ9NYdN7sy+7p2q+QRtc0f70N0b0vY0tLGDuE8eUJtdH8NT5zQ2vsrfbKEOj+NVwMlCQvffO2RLDRP3/EJEubD94BihPm1Q6g0Yb77LlCIcAFQhtBdPwvKEprNAqAEoX9cAhQg1KZdudB9e54QIvTdMiB/Yb5dubA4LQSyF7qrzucFCpd/hNyFi49C7kK9dCBlLzSH1QuXA3kLi/3ahWbBaaEMoVv2Nzd/4cLTJgFC+3ydpd3eNp+65bz2dMVhOB5ORzstjX6OMVC50D9otntnJK74ahsIHHKhDw/qYxjwRuyzg0UdBKzlPncWNpQeBD86GLYaKvQQfCnoxOIg9iA8Z+4ChE+Sn410IUu+Vt4s+F7IhL8VPM6ECXeSD0OVB1xIvJc7Gaow4e/VC59XL9xInvAhhFBAEELIPwgh5B+EEPIPQgj5ByGE/INQhlD/vzChndnCy1aoq2YyIUI9t4UpWqMPW+VdUkl72T9wHXtJd6sX9rQXxRMIid+fm0C4p51OEggfaVfBEwiJl/njC0fiVfD4Qup1/vhC6nX++ELqdf74QupV8PhC6lum4guPxKdP8YXUd3lHF7bUN4VFF96uXkg9HcYXPlDfMhVdSH4pLrrwhvoO4uhC8v+uEls4Ug800YUl9WQRXdis/jOkfxgjtpD+HunYwj31ZBFd2FFPFtGF1L7oQvrpMLaQ+lJifCHxytqUfyq3MwUg5n6+JD93mohupj8Bq9ynvzMbYACcbx33YswFIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPmXUEj01rNUQl2pmuZlRKmEvlZE76ZPJbSDamjeZJNK6BpF9PrBREJdZSrrSV7Wk0ho+rMw6yimnTTCossmYWsJhtMkQm/bF2FW2vSfYgphYadfMgmztkv+auz4Qm26NrsIs6yvnPUplXGF2ltX9a9bUZfNNUNd/SThi+IKq3poLlv5B3kiS8fmdy97AAAAAElFTkSuQmCC" alt="Facebook" />
              </a>
              <a href="#">
                <img src= "data:image/png;base64,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" alt="Instagram" />
              </a>
              <a href="#">
                {/* <img src={require(". ")} alt="WhatsApp" /> */}
              </a>
            </div>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3>Subscribe</h3>
            <p>
              Subscribe to our newsletter and be among the first to hear about
              new arrivals, events, and special offers.
            </p>
            <form className="subscribe-form">
              <input type="email" placeholder="Email *" required />
              <label>
                <input type="checkbox" />
                Yes, subscribe me to your newsletter.
              </label>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 created by Shivam Srivastava
        </div>
      </div>
    </footer>
  );
};

export default Footer;
