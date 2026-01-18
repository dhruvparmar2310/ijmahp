import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import worldMap from '../../public/assets/img/world-map.svg'
import Link from 'next/link'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import { TEXT_LOGO } from '@/contstant'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, contact ijmahp, email of ijmahp, phone number of ijmahp, mobile number of ijmahp, customer care number of ijmahp' />

                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content={`Contact ${TEXT_LOGO}`} />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/contact" />
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
                        "url": "https://ijmahp.co.in/contact",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`,
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijmahp@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Contact IJMAHP"],
                    })}
                </script>
            </Head>
            <section className='contact-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/']} title='Contact | IJMAHP' />

                    <h1 className='section-title'>Contact Us</h1>
                    <hr className='mt-0' />

                    <div>
                        <Image src={worldMap} quality={100} className='img-fluid' />
                    </div>

                    <Row className='mt-4'>
                        <Col lg={4}>
                            <div className={`contact-card ${inter?.className}`}>
                                <h6>Address</h6>
                                <div className='line'></div>
                                <p>
                                    Aatishya 100, Nr. Lubi Corporate Road, opp. Tulsi Status, Ahmedabad, Gujarat 382470
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className='mt-md-0 mt-3'>
                            <div className={`contact-card ${inter?.className}`}>
                                <h6>Email Address</h6>
                                <div className='line'></div>

                                <Link href='mailto:editor.ijmahp@gmail.com'>
                                    editor.ijmahp@gmail.com
                                </Link>
                            </div>
                        </Col>
                        <Col lg={4} className='mt-md-0 mt-3'>
                            <div className={`contact-card ${inter?.className}`}>
                                <h6>Phone Number</h6>
                                <div className='line'></div>

                                <Link href='tel:+917984377793'>
                                    +91 7984 377 793
                                </Link>
                                <Link href='tel:+919687306037'>
                                    +91 9687 306 037
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Contact