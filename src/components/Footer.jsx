import React from "react";
import logo from "../assets/logos/logooooo-removebg-preview-removebg-preview.png";
import { FooterSection_one } from "../Textfiles/webiste-Content";
import { FooterLiks } from "../Textfiles/webiste-Content";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { phoneNumber } from "../Textfiles/webiste-Content";
import { email } from "../Textfiles/webiste-Content";
import { address } from "../Textfiles/webiste-Content";
import { IoMdSend } from "react-icons/io";
import './footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footerdiv grid md:grid-cols-3 grid-cols-1 gap-7 pb-10 pt-24 md:px-20 px-4 bg-black">
      <section className="footersection1 w-full space-y-4">
        <img src={logo} alt="" width={150} />
        <p className="text-white md:max-w-[400px] text-justify ">{FooterSection_one}</p>
        <ul className="iconmenu">
               <li className="iconmenu-item">
                       <a className="elementor-icon" href="https://facebook.com/"><i className="fab fa-facebook"></i></a>
               </li>
               <li className="iconmenu-item">
                       <a className="elementor-icon" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
               </li>
               <li className="iconmenu-item">
                       <a className="elementor-icon" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
               </li>
               <li className="iconmenu-item">
                       <a className="elementor-icon" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
               </li>     
        </ul>
      </section>

      <section className="w-full  md:px-32 ">
        <h1 className="text-white text-4xl md:text-2xl font-semibold mb-4">
          Quick Links
        </h1>
        <ul className="space-y-2">
          {FooterLiks.map((item, index) => (
            <li key={index} className=" py-2 text-white  hover:text-orange-500">
              <Link to={item.link}><i className="fa fa-arrow-right"></i> {item.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="w-full md:px-10 space-y-7">
        <h1 className="text-white text-4xl md:text-2xl font-semibold mb-4">
          Contact Details
        </h1>
        <div className="items-center gap-5">
            <div className="mb-2">
              <h3 className="text-white text-xl font-semibold">PHONE NUMBER</h3>
            </div>
            <div className="flex">
              <FaPhoneFlip className="text-orange-500 text-3xl border px-1 bg-white mr-2" />
              <p className="text-white text-lg font-semibold">{phoneNumber}</p>         
            </div>
        </div>

        <div className="items-center gap-5">
          <div className="mb-2">
              <h3 className="text-white text-xl font-semibold">Email</h3>
            </div>
            <div className="flex">
               <MdMarkEmailUnread className="text-orange-500 text-3xl  border px-1 bg-white mr-2" />
               <p className="text-white text-lg font-semibold">{email}</p>
            </div>
        </div>

        <div className="items-center gap-5">
          <div className="mb-2">
              <h3 className="text-white text-xl font-semibold">ADDRESS</h3>
            </div>
            <div className="flex">
               <FaLocationDot className="text-orange-500 text-3xl py-1  border  bg-white mr-2" />
               <p className="text-white text-lg font-semibold">{address}</p>
            </div>
        </div>

        {/* <div className="w-full flex relative md:gap-0 gap-4">
          <input
            type="text"
            className="w-full text-sm bg-transparent outline-none border border-white p-4 rounded-full"
            placeholder="Enter your email we will reach out to you "
          />
          <button>
            <IoMdSend className=" text-red-500 absolute  md:right-4 right-8 md:bottom-5 top-5 text-xl " />
          </button>
        </div> */}
      </section>
    </div>
  );
}


// import React from "react";
// import './footer.css';
// export default function Footer (){
// return(
//   <>
//   <section className="elementor-section elementor-inner-section elementor-element elementor-element-78f444f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="78f444f" data-element_type="section">
// 						<div className="elementor-container elementor-column-gap-no">
// 					<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3e4aa35b footer-widget" data-id="3e4aa35b" data-element_type="column">
// 			<div className="elementor-widget-wrap elementor-element-populated">
// 								<div className="elementor-element elementor-element-4b19fd3b widget_title elementor-widget elementor-widget-heading" data-id="4b19fd3b" data-element_type="widget" data-widget_type="heading.default">
// 				<div className="elementor-widget-container">
// 			<h3 className="elementor-heading-title elementor-size-default">ABOUT COMPANY</h3>		</div>
// 				</div>
// 				<div className="elementor-element elementor-element-c7e3767 footer-text elementor-widget elementor-widget-text-editor" data-id="c7e3767" data-element_type="widget" data-widget_type="text-editor.default">
// 				<div className="elementor-widget-container">
// 							Centric aplications productize front end vortals visualize front end isite results and value added globally for simplify alternative systems without cross-platform models.						</div>
// 				</div>
// 				<div className="elementor-element elementor-element-a26a183 elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="a26a183" data-element_type="widget" data-widget_type="social-icons.default">
// 				<div className="elementor-widget-container">
			

// <div className="elementor-social-icons-wrapper elementor-grid">
// 							<span className="elementor-grid-item">
// 					<a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-4d4b740" href="https://facebook.com/">
// 						<span className="elementor-screen-only">Facebook</span>
// 						<i className="fab fa-facebook"></i>					
//             </a>
// 				</span>
// 							<span className="elementor-grid-item">
// 					<a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-f95e8fc" href="https://twitter.com/">
// 						<span className="elementor-screen-only">Twitter</span>
// 						<i className="fab fa-twitter"></i>					</a>
// 				</span>
// 							<span className="elementor-grid-item">
// 					<a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-f191268" href="https://instagram.com/">
// 						<span className="elementor-screen-only">Instagram</span>
// 						<i className="fab fa-instagram"></i>					</a>
// 				</span>
// 							<span className="elementor-grid-item">
// 					<a className="elementor-icon elementor-social-icon elementor-social-icon-linkedin-in elementor-repeater-item-9920370" href="https://linkedin.com/">
// 						<span className="elementor-screen-only">Linkedin-in</span>
// 						<i className="fab fa-linkedin-in"></i>					</a>
// 				</span>
// 					</div>
// 				</div>
// 				</div>
// 					</div>
// 		</div>
// 				<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5e9e324e footer-widget widget_nav_menu" data-id="5e9e324e" data-element_type="column">
// 			<div className="elementor-widget-wrap elementor-element-populated">
// 								<div className="elementor-element elementor-element-7aa431c7 widget_title elementor-widget elementor-widget-heading" data-id="7aa431c7" data-element_type="widget" data-widget_type="heading.default">
// 				<div className="elementor-widget-container">
// 			<h3 className="elementor-heading-title elementor-size-default">Quick link</h3>		</div>
// 				</div>
// 				<div className="elementor-element elementor-element-d8c9295 elementor-widget elementor-widget-taxiarmenuselect" data-id="d8c9295" data-element_type="widget" data-widget_type="taxiarmenuselect.default">
// 				<div className="elementor-widget-container">
// 			<ul id="menu-quick-link" className="taxiar-menu"><li id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"><a href="https://themeholy.com/wordpress/taxiar/about-v2/">About Us</a></li>
// <li id="menu-item-948" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-948"><a href="https://themeholy.com/wordpress/taxiar/taxi-v2/">Taxi Services</a></li>
// <li id="menu-item-92" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92"><a href="https://themeholy.com/wordpress/taxiar/booking/">Booking Taxi</a></li>
// <li id="menu-item-93" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"><a href="https://themeholy.com/wordpress/taxiar/team-v2/">Our Team</a></li>
// <li id="menu-item-94" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"><a href="https://themeholy.com/wordpress/taxiar/service-v2/">Our Services</a></li>
// <li id="menu-item-95" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95"><a href="https://themeholy.com/wordpress/taxiar/contact-v2/">Contact Us</a></li>
// </ul>		</div>
// 				</div>
// 					</div>
// 		</div>
// 				<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5b53d691 footer-widget" data-id="5b53d691" data-element_type="column">
// 			<div className="elementor-widget-wrap elementor-element-populated">
// 								<div className="elementor-element elementor-element-720250a6 widget_title elementor-widget elementor-widget-heading" data-id="720250a6" data-element_type="widget" data-widget_type="heading.default">
// 				<div className="elementor-widget-container">
// 			<h3 className="elementor-heading-title elementor-size-default">Recent Post</h3>		</div>
// 				</div>
// 				<div className="elementor-element elementor-element-11efe81 elementor-widget elementor-widget-taxiarblog" data-id="11efe81" data-element_type="widget" data-widget_type="taxiarblog.default">
// 				<div className="elementor-widget-container">
// 						<div className="recent-post-wrap">
// 						<div className="recent-post">
// 				<div className="media-img">
// 					<a href="https://themeholy.com/wordpress/taxiar/give-your-small-car-the-horn-it-deserves/">
// 						<img src="https://themeholy.com/wordpress/taxiar/wp-content/uploads/2023/09/blog-s-2-2-95x90.jpg" alt="blog s 2 2 95x90"/>					</a>
// 				</div>
// 				<div className="media-body">
// 					<div className="recent-post-meta">
// 						<a href="https://themeholy.com/wordpress/taxiar/2023/05/20/"><i className="far fa-calendar-days"></i>20 May, 2023</a>
// 					</div>
// 					<h4 className="post-title th-title"><a className="text-inherit" href="https://themeholy.com/wordpress/taxiar/give-your-small-car-the-horn-it-deserves/">Give Your Small Car the Horn</a></h4>
// 					<a href="https://themeholy.com/wordpress/taxiar/give-your-small-car-the-horn-it-deserves/" className="line-btn th_btn">Read More<i className="fa-regular fa-arrow-right"></i></a>
// 				</div>
// 			</div>
// 						<div className="recent-post">
// 				<div className="media-img">
// 					<a href="https://themeholy.com/wordpress/taxiar/car-with-private-and-discreet-for-a-service/">
// 						<img src="https://themeholy.com/wordpress/taxiar/wp-content/uploads/2023/06/blog-s-1-4-1-1-95x90.jpg" alt="blog s 1 4 1 1 95x90"/>					</a>
// 				</div>
// 				<div className="media-body">
// 					<div className="recent-post-meta">
// 						<a href="https://themeholy.com/wordpress/taxiar/2023/06/21/"><i className="far fa-calendar-days"></i>21 Jun, 2023</a>
// 					</div>
// 					<h4 className="post-title th-title"><a className="text-inherit" href="https://themeholy.com/wordpress/taxiar/car-with-private-and-discreet-for-a-service/">Car with private and discreet for</a></h4>
// 					<a href="https://themeholy.com/wordpress/taxiar/car-with-private-and-discreet-for-a-service/" className="line-btn th_btn">Read More<i className="fa-regular fa-arrow-right"></i></a>
// 				</div>
// 			</div>
// 					</div>
		
// 			</div>
// 				</div>
// 					</div>
// 		</div>
// 				<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-50e3e3b4 footer-widget" data-id="50e3e3b4" data-element_type="column">
// 			<div className="elementor-widget-wrap elementor-element-populated">
// 								<div className="elementor-element elementor-element-40495543 widget_title elementor-widget elementor-widget-heading" data-id="40495543" data-element_type="widget" data-widget_type="heading.default">
// 				<div className="elementor-widget-container">
// 			<h3 className="elementor-heading-title elementor-size-default">Contact Details</h3>		</div>
// 				</div>
// 				<div className="elementor-element elementor-element-2bb871e elementor-widget elementor-widget-taxsecocontactinfo" data-id="2bb871e" data-element_type="widget" data-widget_type="taxsecocontactinfo.default">
// 				<div className="elementor-widget-container">
// 			<div className="th-widget-about"><h4 className="footer-info-title">Phone Number</h4><p className="footer-info"><i className="fas fa-phone-alt"></i><a className="text-inherit" href="tel:+88123456987231">+88 12345 6987 231 </a></p><h4 className="footer-info-title">Email Address</h4><p className="footer-info"><i className="fas fa-envelope"></i><a className="text-inherit" href="mailto:info@Taxiar.com">info@Taxiar.com</a></p><h4 className="footer-info-title">Office Location</h4><p className="footer-info"><i className="fas fa-map-marker-alt"></i>2561 Helano Street, NY</p></div>		</div>
// 				</div>
// 					</div>
// 		</div>
// 							</div>
// 		</section>
//     </>
// )
// }