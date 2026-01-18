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

const ArticleProcessingCharge = () => {
    return (
        <>
            <Head>
                <title>Article Processing Charge | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Article Processing Charge (APC) of IJMAHP, APC of IJMAHP' />

                <meta name="description" content="International Journal of Medical & Allied Health Professions (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions." />

                <meta property="og:title" content="Article Processing Charge of IJMAHP" />
                <meta property="og:description" content="International Journal of Medical & Allied Health Professions (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions." />
                <meta property="og:url" content="https://ijmahp.co.in/author-tools/article-processing-charge" />
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
                        "url": "https://ijmahp.co.in/author-tools/article-processing-charge",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": "International Journal of Medical & Allied Health Professions (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions.",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Article Processing Charge of IJMAHP", "APC of IJMAHP"],
                    })}
                </script>
            </Head>
            <section className='about-us-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', '/article-processing-charge']} title={`Article Processing Charge | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Article Processing Charge (APC)</h1>
                    <hr className='mt-0' />

                    <p className={`${inter?.className}`}>
                        The {TEXT_LOGO} implements an <strong>Article Processing Charge (APC)</strong> to cover the costs associated with the publication of articles. The APC ensures the sustainability of the journal while providing services such as peer review, editing, layout formatting, and the assignment of a <strong>DOI (Digital Object Identifier)</strong> to each accepted article.
                    </p>

                    <h5>APC Details:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    <strong>For Indian Authors</strong>: The APC is ₹2500 per article
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>For International Authors</strong>: The APC is $50 per article
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>What Does the APC Cover?</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            The APC covers the following services for all accepted articles:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Peer Review</strong>: Ensuring a thorough and unbiased review by experts in the field.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Copyediting and Formatting</strong>: Professional editing and formatting to meet journal standards.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>DOI Assignment</strong>: Each published article will be assigned a DOI (Digital Object Identifier), ensuring proper attribution and easier access to the article across platforms and databases.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Online Publication</strong>: Your article will be published online.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Payment Process:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Authors will be invoiced once their article is submitted for publication.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Payment can be made via bank transfer, credit/debit card, or other supported online payment methods.
                                </p>
                            </li>
                            <li>
                                <p>
                                    For international authors, the APC will be charged in USD and should be paid through secure online payment methods.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Authors are required to submit the Transaction ID or a screenshot of the payment when making the payment via email along with the Title of Article. Failure to provide the Transaction ID or payment screenshot will result in the rejection of the submission at the review stage. The submission will not be considered for review and will be directly rejected at that step.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Waivers and Discounts:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        Waivers or discounts on the APC may be available in special cases. Authors from low-income countries or those facing financial constraints can apply for a waiver. Please contact the editorial team for further details.
                    </p>

                    <h5>Refund Policy:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        Once the article is accepted and the payment is processed, the APC is non-refundable.
                    </p>

                    <h5>Contact Information:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        For further inquiries regarding the Article Processing Charge or payment details, please feel free to contact us at <strong>editor.ijmahp@gmail.com</strong> or call us at <strong>+91 7984 377 794</strong>.<br /><br />
                        We appreciate your support in helping us maintain the quality and reach of IJMAHP!
                    </p>
                </div>
            </section>
        </>
    )
}

export default ArticleProcessingCharge
