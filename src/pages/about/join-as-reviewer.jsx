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

const JoinAsReviewer = () => {
    return (
        <>
            <Head>
                <title>Join as Reviewer | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Join as Reviewer in IJMAHP, join ijmahp, volunteer in ijmahp, how to apply as reviewer in ijmahp' />

                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content={`Join as Reviewer in ${TEXT_LOGO}`} />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO}, an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/about/join-as-reviewer" />
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
                        "name": `About - ${TEXT_LOGO} (IJMAHP)`,
                        "url": "https://ijmahp.co.in/about/join-as-reviewer",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `${TEXT_LOGO} (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions.`,
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijmahp@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "About IJMAHP", "What is IJMAHP", "Join as Reviewer in IJMAHP", "Volunteer Reviewer IJMAHP"],
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
                    <BreadCrumb basePath={['/', '/ijmahp']} title={`Join As Reviewer | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Join as a Volunteer Reviewer in {TEXT_LOGO} (IJMAHP)</h1>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        The {TEXT_LOGO} (IJMAHP) invites dedicated and qualified professionals to join our esteemed panel of volunteer reviewers. As a peer-reviewed journal, we are committed to maintaining the highest standards of academic excellence and scientific integrity. By becoming a reviewer, you contribute significantly to the advancement of medical and allied health professions research and help uphold the quality of published articles.
                    </p>

                    <h5>Why Join as a Reviewer?</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Gain recognition as an expert in your field.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Contribute to the development of high-quality research in medical and allied health professions.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Enhance your academic and professional credentials.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Stay updated with the latest research and advancements in medical and allied health professions.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Receive an official certificate of recognition for your valuable contributions.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Eligibility Criteria:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            We welcome applications from professionals with:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    A Ph.D., Master, or equivalent qualification in Medical and Allied Health Professions or related fields.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Significant research and academic experience.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Prior experience in peer-reviewing (preferred but not mandatory).
                                </p>
                            </li>
                            <li>
                                <p>
                                    A strong publication record in reputed journals.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Commitment to maintaining ethical review standards and confidentiality.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Reviewer Responsibilities:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            As a volunteer reviewer, you will be expected to:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Conduct a thorough, unbiased, and constructive review of submitted manuscripts.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Provide timely feedback and recommendations on research quality and relevance.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Uphold ethical standards and ensure originality in research articles.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Maintain confidentiality regarding the review process.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>How to Apply?</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            Interested candidates can apply by sending their updated CV and a brief cover letter highlighting their expertise and reviewing experience to <strong>editor.ijmahp@gmail.com</strong>. Our editorial board will evaluate your application and notify you upon selection.
                        </p>
                        <p>
                            Join us in our mission to promote evidence-based research and excellence in Medical and Allied Health Professions. We look forward to your valuable contribution to IJMAHP! <br /><br />
                            For any queries, feel free to contact us at <strong>editor.ijmahp@gmail.com</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JoinAsReviewer