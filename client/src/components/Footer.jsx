import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsGithub, BsTwitter } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link
                        to="/"
                        className='self-center whitespace-nowrap text-lg
                        sm:text-xl font-semibold dark:text-white'
                    >
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
                        via-purple-500 to-pink-500 rounded-lg text-white'>
                            Max
                        </span>
                        Blog
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <Footer.Title title='ABOUT' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://www.alxafrica.com'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Alx
                            </Footer.Link>
                            <Footer.Link
                                href='/about'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                MaxBlog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='FOLLOW US' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://www.github.com/AhmedYousif6'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Github
                            </Footer.Link>
                            <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Discord
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='LEGAL' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='#'
                            >
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link
                                href='#'
                            >
                                Terms &amp; Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright
                    href='#'
                    by="Ahmed Yousif"
                    year={new Date().getFullYear()}
                />
                <div className='flex gap-6 sm:mt-4 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook} />
                    <Footer.Icon href='#' icon={BsInstagram} />
                    <Footer.Icon href='https://www.github.com/AhmedYousif6' icon={BsGithub} />
                    <Footer.Icon href='#' icon={BsTwitter} />
                </div>
            </div>
        </div>
    </Footer>
  )
}
