'use client'
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import {FiAirplay, FiEdit, FiCreditCard, FiFileText, FiShare2, FiBell, FiSettings, FiLogOut} from '../assets/icons/vander'

export default function Usertab(){
    const [file, setFile] = useState('/images/client/16.jpg');
    const [current, setCurrent] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
          setCurrent(window.location.pathname);
        }
      }, []);


    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return(
 <div className="border-t border-gray-100 dark:border-gray-700">
    <ul className="list-none sidebar-nav mb-0 pb-0" id="navmenu-nav">
        <li className={`navbar-item account-menu ms-0 ${current === '/user-account' ? 'active' : '' }`}>
            <Link href="/pages/user-account" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                <span className="me-2 mb-0"><FiAirplay className="size-4"></FiAirplay></span>
                <h6 className="mb-0 font-medium">Account</h6>
            </Link>
        </li>

        <li className={`navbar-item account-menu ms-0 ${current === '/user-billing' ? 'active' : '' }`}>
            <Link href="/pages/user-billing" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                <span className="me-2 mb-0"><FiEdit className="size-4"></FiEdit></span>
                <h6 className="mb-0 font-medium">Billing Info</h6>
            </Link>
        </li>

        <li className={`navbar-item account-menu ms-0 ${current === '/user-payment' ? 'active' : '' }`}>
            <Link href="/pages/user-payment" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                <span className="me-2 mb-0"><FiCreditCard className="size-4"></FiCreditCard></span>
                <h6 className="mb-0 font-medium">Payment</h6>
            </Link>
        </li>

        <li className={`navbar-item account-menu ms-0 ${current === '/user-invoice' ? 'active' : '' }`}>
            <Link href="/pages/user-invoice" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                <span className="me-2 mb-0"><FiFileText className="size-4"></FiFileText></span>
                <h6 className="mb-0 font-medium">Invoice</h6>
            </Link>
        </li>

        <li className={`navbar-item account-menu ms-0 ${current === '/user-social' ? 'active' : '' }`}>
            <Link href="/pages/user-social" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                <span className="me-2 mb-0"><FiShare2 className="size-4"></FiShare2></span>
                <h6 className="mb-0 font-medium">Social Profile</h6>
            </Link>
        </li>

        <li className={`navbar-item account-menu ms-0 ${current === '/user-notification' ? 'active' : '' }`}>
            <Link href="/pages/user-notification" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                <span className="me-2 mb-0"><FiBell className="size-4"></FiBell></span>
                <h6 className="mb-0 font-medium">Notifications</h6>
            </Link>
        </li>

        <li className={`navbar-item account-menu ms-0 ${current === '/user-setting' ? 'active' : '' }`}>
            <Link href="/pages/user-setting" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                <span className="me-2 mb-0"><FiSettings className="size-4"></FiSettings></span>
                <h6 className="mb-0 font-medium">Settings</h6>
            </Link>
        </li>

        <li className={`navbar-item account-menu ms-0 ${current === '/lock-screen' ? 'active' : '' }`}>
            <Link href="/pages/lock-screen" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                <span className="me-2 mb-0"><FiLogOut className="size-4"></FiLogOut></span>
                <h6 className="mb-0 font-medium">Sign Out</h6>
            </Link>
        </li>
    </ul>
</div>
        
    )
}