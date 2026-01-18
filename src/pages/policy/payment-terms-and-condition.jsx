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

const PaymentTermsAndCondition = () => {
    return (
        <>
            <Head>
                <title>Payment Terms and Condition | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Payment Terms and Conditions of IJMAHP' />
                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content="Payment Terms and Conditions of IJMAHP" />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/policy/payment-terms-and-condition" />
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
                        "url": "https://ijmahp.co.in/policy/payment-terms-and-condition",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`,
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Payment Terms and Conditions of IJMAHP", "Terms and Conditions of Payment in IJMAHP"],
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
                    <BreadCrumb basePath={['/', '/payment-terms-and-condition-policy']} title={`Payment Terms And Condition | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Payment Terms And Condition</h1>
                    <hr className='mt-0' />

                    <h5>1. Payment Structure:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Authors are required to pay publication fees as per the latest fee structure outlined on the IJMAHP website.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Payment must be made in full before the article is processed for peer review and publication.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Fees are subject to change, and authors are advised to check the website for the latest updates.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>2. Payment Methods:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Payments can be made via bank transfer, UPI, credit/debit card, or other methods specified on the website.
                                </p>
                            </li>
                            <li>
                                <p>
                                    All payments should be made in Indian Rupees (INR) for domestic authors and in USD for international authors.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>3. Refund Policy:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Publication fees are non-refundable once the article has been processed.
                                </p>
                            </li>
                            <li>
                                <p>
                                    No refunds will be provided for articles rejected after peer review.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>4. Processing Charges:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    IJMAHP charges a processing fee that covers editorial evaluation, peer review, and publication.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Additional charges may apply for expedited processing, special formatting, or supplementary materials.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>5. Late Payment Policy:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Failure to make payments within the specified time may result in publication delays.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Late payments may attract additional charges or result in article withdrawal.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>6. Waiver and Discounts:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    IJMAHP offers waivers and discounts to students, researchers from low-income countries, and under special circumstances at the discretion of the editorial board.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Requests for waivers must be submitted before article submission with appropriate supporting documents.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>7. Compliance and Disputes:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Authors must comply with the payment terms as agreed upon during the submission process.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Any payment disputes must be raised within 14 days of the transaction date.
                                </p>
                            </li>
                            <li>
                                <p>
                                    IJMAHP reserves the right to take necessary action in case of non-compliance with payment policies.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>8. Contact Information:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            For any payment-related queries, authors can reach out via the official email: editor.ijmahp@gmail.com or visit our website for further details. By submitting an article to IJMAHP, authors acknowledge and agree to abide by these payment terms and conditions.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaymentTermsAndCondition