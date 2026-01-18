import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { TEXT_LOGO } from '@/contstant'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const TermsAndConditions = () => {
    return (
        <>
            <Head>
                <title>Terms and Conditions | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Terms and Conditions of IJMAHP, ijmahp terms and conditions' />
                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content="Terms and Conditions of IJMAHP" />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/policy/terms-and-conditions" />
                <meta property="og:image" content="/favicon.ico" />
                <meta property="og:type" content="website" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />

                {/* <!-- Author and Publisher Meta Tags --> */}
                <meta name="author" content={TEXT_LOGO} />
                <meta name="publisher" content={TEXT_LOGO} />

                {/* Structured Data SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": TEXT_LOGO,
                        "url": "https://ijmahp.co.in/policy/terms-and-conditions",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`,
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Terms and Conditions of IJMAHP"],
                    })}
                </script>
            </Head>
            <section className='author-tools-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', '/terms-and-conditions']} title={`Terms and Conditions | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Terms and Conditions</h1>
                    <hr className='mt-0' />

                    <p className={inter?.className}>
                        These Terms and Conditions govern the use of the {TEXT_LOGO} (IJMAHP) website and services. By accessing or using the IJMAHP website, users agree to comply with these terms.
                    </p>

                    <h5>User Responsibilities:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Users must provide accurate and complete information when submitting manuscripts or subscribing to IJMAHP services.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Users agree not to engage in any activities that may harm, disrupt, or interfere with the journal's operations.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Intellectual Property Rights:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    All content published on the IJMAHP website, including articles, images, and logos, is protected by copyright and intellectual property laws.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Users may access, download, and share content for personal and educational purposes with proper attribution.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Unauthorized reproduction, distribution, or commercial use of content without written permission is strictly prohibited.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Submission of Manuscripts:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Authors submitting manuscripts to IJMAHP must ensure their work is original and free from plagiarism.
                                </p>
                            </li>
                            <li>
                                <p>
                                    IJMAHP reserves the right to reject or remove any submission that violates ethical guidelines.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Submission of a manuscript does not guarantee publication.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Article Processing Charges (APCs):</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Authors agree to pay the applicable APCs for publishing articles as per IJMAHP's fee structure.
                                </p>
                            </li>
                            <li>
                                <p>
                                    APCs are non-refundable once the manuscript is processed for publication.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Privacy and Data Protection:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    IJMAHP is committed to protecting user privacy in accordance with the Privacy Policy.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Personal data collected during manuscript submission and website usage will be handled securely.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Limitation of Liability:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            IJMAHP shall not be liable for any direct, indirect, or incidental damages arising from the use of its website or services. The journal is not responsible for any loss or damage caused by reliance on published content.
                        </p>
                    </div>

                    <h5>Modifications to Terms:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            IJMAHP reserves the right to update or modify these terms at any time. Users will be notified of significant changes via email or website announcements.
                        </p>
                    </div>

                    <h5>Governing Law:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            These Terms and Conditions are governed by the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of Indian courts.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsAndConditions