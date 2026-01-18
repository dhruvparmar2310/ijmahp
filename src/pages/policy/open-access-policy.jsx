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

const OpenAccessPolicy = () => {
    return (
        <>
            <Head>
                <title>Open Access Policy | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Open Access Policy of IJMAHP' />
                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content="Open Access Policy of IJMAHP" />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/policy/open-access-policy" />
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
                        "url": "https://ijmahp.co.in/policy/open-access-policy",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`,
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Open Access Policy of IJMAHP"],
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": "https://ijmahp.co.in/policy/privacy-policy",
                                "name": "Privacy Policy"
                            },
                            {
                                "@type": "ReadAction",
                                "target": "https://ijmahp.co.in/policy/terms-and-condition",
                                "name": "Terms and Conditions"
                            },
                        ],
                    })}
                </script>
            </Head>
            <section className='author-tools-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', '/open-access-policy']} title={`Open Access Policy | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Open Access Policy</h1>
                    <hr className='mt-0' />

                    <h5>1. Open Access Statement:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    The {TEXT_LOGO} (IJMAHP) is committed to the principles of open access, ensuring that all published content is freely available to readers worldwide without any subscription or paywall.
                                </p>
                            </li>
                            <li>
                                <p>
                                    By adopting an open-access model, IJMAHP aims to enhance the dissemination and impact of physiotherapy research globally.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>2. Licensing and Copyright:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    All published articles are licensed under a Creative Commons Attribution (CC BY) license, allowing users to read, download, copy, distribute, and adapt the content with appropriate credit to the original authors.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Authors retain copyright of their work while granting IJMAHP the right to publish and distribute it.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>3. Accessibility and Availability:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    All articles published in IJMAHP are available online through the journal's official website without any restrictions.
                                </p>
                            </li>
                            <li>
                                <p>
                                    IJMAHP ensures long-term preservation and accessibility of published content through partnerships with digital archiving services.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>4. Author Responsibilities:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Authors submitting to IJMAHP agree to publish their work under an open-access model.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Authors must ensure that their submitted work complies with ethical standards and does not infringe upon any copyright or intellectual property rights.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>5. Funding and Article Processing Charges (APCs):</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    To support open access, IJMAHP  charge an Article Processing Charge (APC) for accepted manuscripts. APCs cover editorial processing, peer review, and online hosting expenses.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Waivers and discounts are available for authors from low-income countries and under special circumstances.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>6. Benefits of Open Access:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Increased visibility and readership of published research.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Enhanced citation potential and research impact.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Immediate access to cutting-edge research findings for practitioners, researchers, and the general public.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>7. Ethical Considerations:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    IJMAHP follows ethical publishing practices in compliance with COPE (Committee on Publication Ethics) guidelines.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Open access policies are aligned with international standards to ensure transparency and integrity.
                                </p>
                            </li>
                        </ul>
                        <p>
                            By publishing with IJMAHP, authors agree to the terms and conditions of the open-access policy, contributing to the advancement of physiotherapy knowledge globally.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OpenAccessPolicy