'use client'
import React, { useState, useEffect, useRef  } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {FiSearch, FiShoppingCart, FiHeart, FiDollarSign, FiUser, FiHelpCircle, FiSettings, FiLogOut} from '../assets/icons/vander'

export default function Navbar({navClass, navlight}){
 const [scrolling, setScrolling] = useState(false);
    const [isToggle, setToggle] = useState(false);
    const [manu , setManu] = useState('');
    const [subManu , setSubManu] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [cartManu, setCartManu] = useState(false);
    const [userManu, setUserManu] = useState(false);
    const dropdownRef = useRef(null);
    const cartRef = useRef(null);
    const userRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 50;
            setScrolling(isScrolling);
        };

        document.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('click', cartOutsideClick);
        document.addEventListener('click', userOutsideClick);
        
        const currentPath = window.location.pathname;
        setManu(currentPath);
        setSubManu(currentPath);
        window.scrollTo(0, 0);

        return () => {
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('click', cartOutsideClick);
            document.removeEventListener('click', userOutsideClick);
        };
    }, []);

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const cartOutsideClick = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setCartManu(false);
        }
    };

    const userOutsideClick = (event) => {
        if (userRef.current && !userRef.current.contains(event.target)) {
            setUserManu(false);
        }
    };

    const toggleMenu = () => {
        setToggle(!isToggle);
    };
    
    return(
        <nav id="topnav" className={`${navClass} ${scrolling ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                {navlight === true ? (
                    <Link className="logo" href="/">
                    <span className="inline-block dark:hidden">
                        <Image src='/images/logo-dark.png' width={114} height={22} className="l-dark" alt=""/>
                        <Image src='/images/logo-dark.png' width={114} height={22} className="l-light" alt=""/>
                    </span>
                    <Image src='/images/logo-light.png' width={114} height={22} className="hidden dark:inline-block" alt=""/>
                </Link>
                ) : (
                    <Link className="logo" href="/">
                        <div>
                            <Image src='/images/logo-dark.png' width={114} height={22} className="h-[22px] inline-block dark:hidden" alt=""/>
                            <Image src='/images/logo-dark.png' width={114} height={22} className="h-[22px] hidden dark:inline-block" alt=""/>
                        </div>
                    </Link>
                )}
                

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href='#' className={`navbar-toggle ${isToggle ? 'open' : ''}`} id="isToggle" onClick={() =>toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="buy-button list-none mb-0">
                    <li className="dropdown inline-block relative pe-1" ref={dropdownRef}>
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle align-middle inline-flex search-dropdown" type="button" onClick={()=>setIsOpen(!isOpen)}>
                            {navlight === true ? (
                                 <>
                                 <FiSearch className="size-5 dark-icon"></FiSearch>
                                 <FiSearch className="size-5 white-icon text-white"></FiSearch>
                                 </>
                            ) : (
                                <FiSearch className="size-5"></FiSearch>
                            )}
                        </button>
                        {isOpen && (
                            <div className={`dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800`}>
                                <div className="relative">
                                    <FiSearch className="absolute size-4 top-[9px] end-3"></FiSearch>
                                    <input type="text" className="h-9 px-3 pe-10 w-full border-gray-100 dark:border-gray-800 focus:ring-0 outline-none bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..."/>
                                </div>
                            </div>
                        )}
                    </li>

                    <li className="dropdown inline-block relative ps-0.5" ref={cartRef}>
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 border border-orange-500 text-white" type="button" onClick={()=>setCartManu(!cartManu)}>
                            <FiShoppingCart className="h-4 w-4"></FiShoppingCart>
                        </button>
                        {cartManu && (
                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                                <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                                    <li className='ms-0'>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/trendy-shirt.jpg' width={36} height={46} className="rounded shadow dark:shadow-gray-800 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">T-shirt (M)</span>
                                                    <span className="block text-sm text-slate-400">$320 X 2</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$640</span>
                                        </Link>
                                    </li>

                                    <li className='ms-0'>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/luxurious-bag2.jpg' width={36} height={46} className="rounded shadow dark:shadow-gray-800 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Bag</span>
                                                    <span className="block text-sm text-slate-400">$50 X 5</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$250</span>
                                        </Link>
                                    </li>

                                    <li className='ms-0'>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/apple-smart-watch.jpg' width={36} height={46} className="rounded shadow dark:shadow-gray-800 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Watch (Men)</span>
                                                    <span className="block text-sm text-slate-400">$800 X 1</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$800</span>
                                        </Link>
                                    </li>

                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2 ms-0"></li>

                                    <li className="flex items-center justify-between py-1.5 px-4 ms-0">
                                        <h6 className="font-semibold mb-0">Total($):</h6>
                                        <h6 className="font-semibold mb-0">$1690</h6>
                                    </li>

                                    <li className="py-1.5 px-4 ms-0">
                                        <span className="text-center block">
                                            <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white me-1">View Cart</Link>
                                            <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white">Checkout</Link>
                                        </span>
                                        <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li className="inline-block ps-0.5">
                        <Link href="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 text-white">
                            <FiHeart data-feather="heart" className="h-4 w-4"></FiHeart>
                        </Link>
                    </li>
            
                    <li className="dropdown inline-block relative ps-0.5" ref={userRef}>
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle items-center" type="button" onClick={()=>setUserManu(!userManu)}>
                            <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-orange-500 bg-orange-500 text-white"><Image src='/images/client/16.jpg' width={34} height={34} className="rounded-full" alt=""/></span>
                        </button>
                        {userManu && (
                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700">
                                <ul className="py-2 text-start">
                                    <li className='ms-0'>
                                        <p className="text-slate-400 pt-2 px-4">Welcome Jesus!</p>
                                    </li>
                                    <li className='ms-0'>
                                        <p className="flex items-center font-medium py-2 px-4"><FiDollarSign className="h-4 w-4 me-2"></FiDollarSign> Balance: <span className="text-blue-500 ms-2">$ 245.10</span></p>
                                    </li>
                                    <li className='ms-0'>
                                        <Link href="/user-account" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-blue-500 dark:hover:text-white"><FiUser className="h-4 w-4 me-2"></FiUser>Account</Link>
                                    </li>
                                    <li className='ms-0'>
                                        <Link href="/helpcenter" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-blue-500 dark:hover:text-white"><FiHelpCircle className="h-4 w-4 me-2"></FiHelpCircle>Helpcenter</Link>
                                    </li>
                                    <li className='ms-0'>
                                        <Link href="/user-setting" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-blue-500 dark:hover:text-white"><FiSettings className="h-4 w-4 me-2"></FiSettings>Settings</Link>
                                    </li>
                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                    <li className='ms-0'>
                                        <Link href="/login" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-blue-500 dark:hover:text-white"><FiLogOut className="h-4 w-4 me-2"></FiLogOut>Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>

                <div id="navigation" style={{display: isToggle === true ? 'block' : 'none'}}>
                    <ul className={`navigation-menu ${navlight === true ? 'nav-light' : ''}`}>
             

                            <li className={`has-submenu parent-parent-menu-item ${['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar','/shop-list','/shop-list-left-sidebar','/shop-list-right-sidebar','/product-detail-one','/product-detail-two','/product-detail-three','/shop-cart','/shop-checkout','/our-store','/brands','/compare-product','/recently-viewed-product','/shop-item','/list-item','/detail-item','/grid-item'].includes(manu) ? 'active' : '' }`}>
                                <Link href="#" onClick={() => setSubManu(subManu === '/shop-item' ? '' : '/shop-item')}> Mens </Link><span className="menu-arrow"></span>
                                <ul className={`submenu ${['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar','/shop-list','/shop-list-left-sidebar','/shop-list-right-sidebar','/product-detail-one','/product-detail-two','/product-detail-three','/shop-cart','/shop-checkout','/our-store','/brands','/compare-product','/recently-viewed-product','/shop-item','/list-item','/detail-item','/grid-item'].includes(subManu) ? 'open' : ''}`}>
                                    <li className={`has-submenu parent-menu-item ms-0 ${['/shop-grid','/shop-grid-left-sidebar','/shop-grid-right-sidebar','/grid-item'].includes(manu) ? 'active' : ''}`}>
                                       <Link href="#" onClick={() => setSubManu(setManu === '/grid-item' ? '' : '/grid-item')}> Tops </Link>
                                         <Link href="#" onClick={() => setSubManu(setManu === '/grid-item' ? '' : '/grid-item')}> Jeans </Link>
                                         <Link href="#" onClick={() => setSubManu(setManu === '/grid-item' ? '' : '/grid-item')}> Pants </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className={`has-submenu parent-parent-menu-item ${['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar','/shop-list','/shop-list-left-sidebar','/shop-list-right-sidebar','/product-detail-one','/product-detail-two','/product-detail-three','/shop-cart','/shop-checkout','/our-store','/brands','/compare-product','/recently-viewed-product','/shop-item','/list-item','/detail-item','/grid-item'].includes(manu) ? 'active' : '' }`}>
                                <Link href="#" onClick={() => setSubManu(subManu === '/shop-item' ? '' : '/shop-item')}> Womens </Link><span className="menu-arrow"></span>
                                <ul className={`submenu ${['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar','/shop-list','/shop-list-left-sidebar','/shop-list-right-sidebar','/product-detail-one','/product-detail-two','/product-detail-three','/shop-cart','/shop-checkout','/our-store','/brands','/compare-product','/recently-viewed-product','/shop-item','/list-item','/detail-item','/grid-item'].includes(subManu) ? 'open' : ''}`}>
                                    <li className={`has-submenu parent-menu-item ms-0 ${['/shop-grid','/shop-grid-left-sidebar','/shop-grid-right-sidebar','/grid-item'].includes(manu) ? 'active' : ''}`}>
                                       <Link href="#" onClick={() => setSubManu(setManu === '/grid-item' ? '' : '/grid-item')}> Tops </Link>
                                        <Link href="#" onClick={() => setSubManu(setManu === '/grid-item' ? '' : '/grid-item')}> Tops </Link>
                                         <Link href="#" onClick={() => setSubManu(setManu === '/grid-item' ? '' : '/grid-item')}> Jeans </Link>
                                         <Link href="#" onClick={() => setSubManu(setManu === '/grid-item' ? '' : '/grid-item')}> Pants </Link>
                                    </li>
                                </ul>
                            </li>

                        <li className={`has-submenu parent-parent-menu-item ${['/aboutus','/user-account','/user-billing','/user-payment','/user-invoice','/user-social','/user-notification','/user-setting','/page-item','/user-item','/email-item','/email-confirmation','/email-cart','/email-offers','/email-order-success','/email-gift-voucher','/email-reset-password','/email-item-review','/blog-item','/blogs','/blog-detail','/help-item','/helpcenter','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support','/auth-item','/login','/signup','/forgot-password','/lock-screen','/utility-item','/terms','/privacy','/comingsoon','/maintenance','/error','/special-item','/multi-item','/multi-item2','/multi-item3','/career'].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setSubManu(setManu === '/page-item' ? '' : '/page-item' )}>Account</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/aboutus','/user-account','/user-billing','/user-payment','/user-invoice','/user-social','/user-notification','/user-setting','/page-item','/user-item','/email-item','/email-confirmation','/email-cart','/email-offers','/email-order-success','/email-gift-voucher','/email-reset-password','/email-item-review','/blog-item','/blogs','/blog-detail','/help-item','/helpcenter','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support','/auth-item','/login','/signup','/forgot-password','/lock-screen','/utility-item','/terms','/privacy','/comingsoon','/maintenance','/error','/special-item','/multi-item','/multi-item2','/multi-item3','/career'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`ms-0 ${manu === '/aboutus' ? 'active' : ''}`}><Link href="/aboutus" className="sub-menu-item">About Us</Link></li>

                            <li className={`has-submenu parent-menu-item ms-0 ${['/user-account','/user-billing','/user-payment','/user-invoice','/user-social','/user-notification','/user-setting','/user-item',].includes(manu) ? 'active' : ''}`}>
                                <Link href="#" onClick={()=>setSubManu(setManu === '/user-item' ? '' : '/user-item' )}> My Account</Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/user-account','/user-billing','/user-payment','/user-invoice','/user-social','/user-notification','/user-setting','/user-item',].includes(subManu) ? 'open' : ''}`}>
                                    <li className={`ms-0 ${manu === '/user-account' ? 'active' : ''}`}><Link href="/pages/user-account" className="sub-menu-item">User Account</Link></li>
                                    <li className={`ms-0 ${manu === '/user-billing' ? 'active' : ''}`}><Link href="/pages/user-billing" className="sub-menu-item">Billing</Link></li>
                                    <li className={`ms-0 ${manu === '/user-payment' ? 'active' : ''}`}><Link href="/pages/user-payment" className="sub-menu-item">Payment</Link></li>
                                    <li className={`ms-0 ${manu === '/user-invoice' ? 'active' : ''}`}><Link href="/pages/user-invoice" className="sub-menu-item">Invoice</Link></li>
                                    <li className={`ms-0 ${manu === '/user-social' ? 'active' : ''}`}><Link href="/pages/user-social" className="sub-menu-item">Social</Link></li>
                                    <li className={`ms-0 ${manu === '/user-notification' ? 'active' : ''}`}><Link href="/pages/user-notification" className="sub-menu-item">Notification</Link></li>
                                    <li className={`ms-0 ${manu === '/user-setting' ? 'active' : ''}`}><Link href="/pages/user-setting" className="sub-menu-item">Setting</Link></li>
                                </ul> 
                            </li>

                            <li className={`has-submenu parent-menu-item ms-0 ${['/email-confirmation','/email-cart','/email-offers','/email-order-success','/email-gift-voucher','/email-reset-password','/email-item-review','/email-item',].includes(manu) ? 'active' : ''}`}>
                                <Link href="#" onClick={() => setSubManu(subManu === '/email-item' ? '' : '/email-item')}>
                                    Email Template
                                </Link>
                                <span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/email-confirmation','/email-cart','/email-offers','/email-order-success','/email-gift-voucher','/email-reset-password','/email-item-review','/email-item',].includes(subManu) ? 'open' : ''}`}>
                                    <li className='ms-0'><Link href="/pages/email-confirmation" className="sub-menu-item">Confirmation</Link></li>
                                    <li className='ms-0'><Link href="/pages/email-cart" className="sub-menu-item">Cart</Link></li>
                                    <li className='ms-0'><Link href="/pages/email-offers" className="sub-menu-item">Offers</Link></li>
                                    <li className='ms-0'><Link href="/pages/email-order-success" className="sub-menu-item">Order Success</Link></li>
                                    <li className='ms-0'><Link href="/pages/email-gift-voucher" className="sub-menu-item">Gift Voucher</Link></li>
                                    <li className='ms-0'><Link href="/pages/email-reset-password" className="sub-menu-item">Reset Password</Link></li>
                                    <li className='ms-0'><Link href="/pages/email-item-review" className="sub-menu-item">Item Review</Link></li>
                                </ul> 
                            </li>
                        
                            {/* <li className={`has-submenu parent-menu-item ms-0 ${['/blogs','/blog-detail','/blog-item', '/pages'].includes(manu) ? 'active' : '' }`}>
                                <Link to="#" onClick={() => setSubManu(subManu === '/blog-item' ? '' : '/blog-item')}>
                                    Blog
                                </Link>
                                <span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/blogs','/blog-detail','/blog-item', '/pages'].includes(subManu) ? 'open' : '' }`}>
                                    <li className={`ms-0 ${manu === '/blogs' ? 'active' : ''}`}>
                                        <Link to="/blogs" className="sub-menu-item">Blogs</Link>  
                                    </li>
                                    <li className={`ms-0 ${manu === '/blog-detail' ? 'active' : ''}`}>
                                        <Link to="/blog-detail" className="sub-menu-item">Blog Detail</Link>  
                                    </li>
                                </ul> 
                            </li> */}



                               <li className={`ms-0 ${manu === '/career' ? 'active' : ''}`}><Link href="pages/career" className="sub-menu-item">Career </Link></li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/helpcenter','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support','/help-item'].includes(manu) ? 'active' : '' }`}>
                                    <Link href="#" onClick={()=>setSubManu(setManu === '/help-item' ? '' : '/help-item' )}> Helpcenter </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/helpcenter','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support','/help-item'].includes(subManu) ? 'open' : '' }`}>
                                        <li className={`ms-0 ${manu === '/helpcenter' ? 'active' : ''}`}><Link href="/pages/helpcenter" className="sub-menu-item">Overview</Link></li>
                                        <li className={`ms-0 ${manu === '/helpcenter-faqs' ? 'active' : ''}`}><Link href="/pages/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                        <li className={`ms-0 ${manu === '/helpcenter-guides' ? 'active' : ''}`}><Link href="/pages/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                        <li className={`ms-0 ${manu === '/helpcenter-support' ? 'active' : ''}`}><Link href="/pages/helpcenter-support" className="sub-menu-item">Support</Link></li>
                                    </ul>  
                                </li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/login','/signup','/forgot-password','/lock-screen','/auth-item'].includes(manu) ? 'active' : '' }`}>
                                    <Link href="#" onClick={()=>setSubManu(setManu === '/auth-item' ? '' : '/auth-item' )}> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/login','/signup','/forgot-password','/lock-screen','/auth-item'].includes(subManu) ? 'open' : '' }`}>
                                        <li className='ms-0'><Link href="/pages/login" className="sub-menu-item"> Login</Link></li>
                                        <li className='ms-0'><Link href="/pages/signup" className="sub-menu-item"> Signup</Link></li>
                                        <li className='ms-0'><Link href="/pages/forgot-password" className="sub-menu-item"> Forgot Password</Link></li>
                                        <li className='ms-0'><Link href="/pages/lock-screen" className="sub-menu-item"> Lock Screen</Link></li>
                                    </ul> 
                                </li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/terms','/privacy','/utility-item'].includes(manu) ? 'active' : '' }`}>
                                    <Link href="#" onClick={()=>setSubManu(setManu === '/utility-item' ? '' : '/utility-item' )}> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/terms','/privacy','/utility-item'].includes(subManu) ? 'open' : '' }`}>
                                        <li className={`ms-0 ${manu === '/terms' ? 'active' : ''}`}><Link href="/pages/terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li className={`ms-0 ${manu === '/privacy' ? 'active' : ''}`}><Link href="/pages/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>  
                                </li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/comingsoon','/maintenance','/error', '/special-item'].includes(manu) ? 'active' : '' }`}>
                                    <Link href="#" onClick={()=>setSubManu(setManu === '/special-item' ? '' : '/special-item' )}> Special </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/comingsoon','/maintenance','/error', '/special-item'].includes(subManu) ? 'open' : '' }`}>
                                        <li className='ms-0'><Link href="/pages/comingsoon" className="sub-menu-item"> Coming Soon</Link></li>
                                        <li className='ms-0'><Link href="/pages/maintenance" className="sub-menu-item"> Maintenance</Link></li>
                                        <li className='ms-0'><Link href="/error" className="sub-menu-item"> 404!</Link></li>
                                    </ul> 
                                </li> 
                            </ul>
                        </li>
                            {/* <li className={`${manu === '/sale' ? 'active' : ''}`}><Link href="/pages/sale" className="sub-menu-item">Sale</Link></li> */}

                            <li className={`${manu === '/contact' ? 'active' : ''}`}><Link href="/pages/contact" className="sub-menu-item">Contact</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}