import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import PhysioZineLogo from '../../../public/assets/img/5.png'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const IJMAHP = () => {
    return (
        <>
            <Head>
                <title>About International Journal of Medical & Allied Health Professions</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, What is IJMAHP' />

                <meta name="description" content="Learn about the International Journal of Medical & Allied Health Professions (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions." />

                <meta property="og:title" content="About International Journal of Medical & Allied Health Professions" />
                <meta property="og:description" content="Learn about IJMAHP, an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions." />
                <meta property="og:url" content="https://ijmahp.co.in/about/ijmahp" />
                <meta property="og:image" content="/favicon.ico" />
                <meta property="og:type" content="website" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />

                {/* <!-- Author and Publisher Meta Tags --> */}
                <meta name="author" content="International Journal of Medical & Allied Health Professions" />
                <meta name="publisher" content="International Journal of Medical & Allied Health Professions" />

                {/* Structured Data SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "About - International Journal of Medical & Allied Health Professions (IJMAHP)",
                        "url": "https://ijmahp.co.in/about/ijmahp",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": "International Journal of Medical & Allied Health Professions (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions.",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijmahp@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "About IJMAHP", "What is IJMAHP"],
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": "https://ijmahp.co.in/about/ijmahp",
                                "name": "About IJMAHP"
                            },
                            {
                                "@type": "ReadAction",
                                "target": "https://ijmahp.co.in/about/journal-information",
                                "name": "Journal Information"
                            }
                        ]
                    })}
                </script>
            </Head>
            <section className='about-us-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', '/ijmahp']} title='About Us | International Journal of Medical & Allied Health Professions' />
                    <h1 className='section-title'>About - International Journal of Medical & Allied Health Professions (IJMAHP)</h1>
                    <hr className='mt-0' />

                    <div className='text-center'>
                        <Image src={PhysioZineLogo} alt='PhysioZine Logo' quality={100} className='img-fluid' />
                    </div>
                    <p className={`${antonSC?.className} sub-title`}>PhysioZine's Management of the International Journal of Medical & Allied Health Professions</p>
                    <p className={`${inter?.className}`}>PhysioZine, a leading digital platform dedicated to physiotherapy and rehabilitation sciences, proudly manages the International Journal of Medical & Allied Health Professions (IJMAHP). With a commitment to advancing physiotherapy knowledge and fostering innovation in the field, PhysioZine brings its extensive experience and expertise to ensure the journal meets the highest standards of academic excellence.</p>

                    <h5>Our Role in IJMAHP:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            As the official management body, PhysioZine oversees the entire publication process of the International Journal of Medical & Allied Health Professions, including:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Editorial Oversight</strong>: Ensuring the publication of high-quality, peer-reviewed research articles.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Publication Management</strong>: Handling the journal's operational aspects, from submission to final publication.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Digital Presence</strong>: Leveraging PhysioZine's well-established online platform to enhance the journal's visibility and accessibility.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Collaboration</strong>: Working closely with authors, reviewers, and readers to promote knowledge sharing and professional growth.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Why PhysioZine?</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            PhysioZine's reputation as a trusted resource in the physiotherapy community makes it an ideal partner for IJMAHP. Our platform features:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    A strong online presence through <Link href='https://physiozine.vercel.app' target='_blank'>PhysioZine's website</Link>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    A network of esteemed professionals and experts in the field.
                                </p>
                            </li>
                            <li>
                                <p>
                                    A dedication to promoting cutting-edge research and evidence-based practices.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Our Commitment to Excellence</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            PhysioZine is dedicated to upholding the integrity and quality of the International Journal of Medical & Allied Health Professions by:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Encouraging groundbreaking research and innovation.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Providing timely and efficient publication processes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Offering a global platform for researchers to showcase their work.
                                </p>
                            </li>
                        </ul>

                        <p>
                            For more information about PhysioZine and its management of the International Journal of Medical & Allied Health Professions, visit our website at <Link href='https://physiozine.co.in/' target='_blank'>https://physiozine.co.in/</Link> or contact us at <a href='mailto:info.physiozine@gmail.com' target='_blank'>info.physiozine@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IJMAHP
