import React from 'react';
import fb from '../../assets/fb.png'
import linkdin from '../../assets/linkdin.png'
import twitter from '../../assets/twitter.png'
import { Link, } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer className=' text-white bg-black'>
                <div className='grid md:grid-cols-5 gap-20 p-16'>
                    <div>
                        <h1 className='text-3xl  pb-4'><span className='font-bold'>Job</span>Resources</h1>
                        <p className='text-p text-zinc-500'>
                            There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                        </p>
                        <br />
                        <div className='flex gap-5'>
                            <Link><img className='team-icon' src={fb} alt="" /></Link>
                            <Link><img className='team-icon' src={linkdin} alt="" /></Link>
                            <Link><img className='team-icon' src={twitter} alt="" /></Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold pb-4'>Company</h1>
                        <div className='mt-2 text-zinc-500'>
                            <div className='mb-3'>
                                <Link to="">About Us</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="/blog">Work</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="">Latest News</Link><br />
                            </div>
                            <div>
                                <Link to="">Careers</Link><br />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold pb-4'>Product</h1>
                        <div className='mt-2 text-zinc-500'>
                            <div className='mb-3'>
                                <Link to="">Prototype</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="">Plans & Pricing</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="">Customers</Link><br />
                            </div>
                            <div>
                                <Link to="">Integrations</Link><br />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold pb-4'>Support</h1>
                        <div className='mt-2 text-zinc-500'>
                            <div className='mb-3'>
                                <Link to="">Help Desk</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="">Sales</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="">Become a Partner</Link><br />
                            </div>
                            <div>
                                <Link to="">Developers</Link><br />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold pb-4'>Contact</h1>
                        <div className='text-zinc-500'>
                            <div className='mb-3'>
                                <Link to="">524 Broadway , NYC</Link><br />
                            </div>
                            <div>
                                <Link to="">+1 777 - 978 - 5570</Link><br />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='pb-5 mx-16'/>
                <div className='md:flex justify-between px-16 py-12 text-zinc-500'>
                    <div>
                        <h1 className='mb-3'>@2023 Job Resources. All Rights Reserved</h1>
                    </div>
                    <div>
                        <h1>Powered by Job Resources.</h1>
                    </div>
                </div>
                <div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;