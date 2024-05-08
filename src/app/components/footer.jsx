import React from "react";
import Link from "next/link";
import { footerServices, footerShopping1, footerShopping2, footerShopping3, footerSocial, paymentCart, } from "../data/data";

import {FiMail} from '../assets/icons/vander'
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">    
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-3 md:col-span-12">
                                    <Link href="#" className="text-[22px] focus:outline-none">
                                     <h5 className="tracking-[1px] text-gray-100 font-semibold">Phiaspora</h5>
                                    </Link>
                                    <ul className="list-none mt-6 space-x-1">
                                        {footerSocial.map((item,index) =>{
                                            let Icon = item.icon
                                            return(
                                                <li className="inline" key={index}><Link href={item.link} target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-blue-500 dark:hover:text-blue-500 text-slate-300"><Icon className="h-4 w-4 align-middle" title="Buy Now"></Icon></Link></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                        
                                <div className="lg:col-span-6 md:col-span-12">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Shopping & Clothes</h5>

                                    <div className="grid md:grid-cols-12 grid-cols-1">
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                {footerShopping1.map((item,index) =>{
                                                    return(
                                                        <li className="ms-0 mt-[10px]" key={index}><Link href="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> {item}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                {footerShopping2.map((item,index) =>{
                                                    return(
                                                        <li className="ms-0 mt-[10px]" key={index}><Link href="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> {item} </Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                {footerShopping3.map((item,index)=>{
                                                    return(
                                                        <li className="mt-[10px] ms-0" key={index}><Link href="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> {item}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
    
                   
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <div className="py-[30px] px-0 border-t border-slate-800">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2">
                            {footerServices.map((item,index) =>{
                                return(
                                    <div className="flex items-center lg:justify-center" key={index}>
                                        <i className={`align-middle text-lg mb-0 me-2 ${item.icon}`}></i>
                                        <h6 className="mb-0 font-medium">{item.name}</h6>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="md:text-start text-center">
                            <p className="mb-0">© {new Date().getFullYear()} Phiaspora<i className="mdi mdi-heart text-red-600"></i></p>
                        </div>

                        <ul className="list-none md:text-end text-center mt-6 md:mt-0 space-x-1">
                            {paymentCart.map((item,index) =>{
                                return(
                                    <li className="inline" key={index}><Link href=""><Image src={item} width={38} height={24} className="max-h-6 rounded inline" title="American Express" alt=""/></Link></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}