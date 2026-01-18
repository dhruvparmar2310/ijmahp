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

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Privacy Policy of IJMAHP' />
                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content="Privacy Policy of IJMAHP" />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/policy/privacy-policy" />
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
                        "url": "https://ijmahp.co.in/policy/privacy-policy",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`,
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Privacy Policy of IJMAHP"],
                    })}
                </script>
            </Head>
            <section className='author-tools-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', '/privacy-policy']} title={`Privacy Policy | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Privacy Policy</h1>
                    <hr className='mt-0' />

                    <p className={inter?.className}>
                        The {TEXT_LOGO} (IJMAHP) is committed to protecting the privacy and confidentiality of its authors, reviewers, and website visitors. This privacy policy outlines how IJMAHP collects, uses, and safeguards personal information.
                    </p>

                    <h5>Information We Collect:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Personal information such as name, email address, phone number, and institutional affiliation is collected during manuscript submission, peer review, and subscription processes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Technical information, including IP addresses, browser type, and access times, is collected for website analytics.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Payment-related information is securely processed via third-party payment gateways, and IJMAHP does not store sensitive financial details.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Use of Collected Information:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Personal data is used for manuscript processing, peer review coordination, and publication-related communication.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Contact information may be used to inform users about journal updates, upcoming events, and policy changes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Aggregated, non-personal data may be used for analytical and improvement purposes.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Data Security:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    IJMAHP employs industry-standard security measures to protect personal information from unauthorized access, disclosure, or alteration.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Access to personal data is restricted to authorized personnel only.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Sharing of Information:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    IJMAHP does not sell, rent, or trade personal information to third parties.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Data may be shared with service providers (e.g., hosting providers, payment processors) strictly for operational purposes. Information may be disclosed if required by law or legal processes.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Retention of Data:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Personal data is retained only as long as necessary for journal operations and legal compliance.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Users may request deletion of their personal data by contacting IJMAHP.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Third-Party Links:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            The IJMAHP website may contain links to external sites. IJMAHP is not responsible for the privacy practices of such sites.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy