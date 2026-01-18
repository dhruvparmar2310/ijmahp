import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Col, Row, Table } from 'react-bootstrap'
import Head from 'next/head'
import { TEXT_LOGO } from '@/contstant'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const JournalInformation = () => {
    return (
        <>
            <Head>
                <title>Journal Information | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, journal info of ijmahp' />

                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content="Journal Information of IJMAHP" />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/about/journal-information" />
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
                        "url": "https://ijmahp.co.in/about/journal-information",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `${TEXT_LOGO} (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions.`,
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijmahp@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Journal Info of IJMAHP"],
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": "https://ijmahp.co.in/about/journal-information",
                                "name": "Journal Information"
                            },
                            {
                                "@type": "ReadAction",
                                "target": "https://ijmahp.co.in/about/ijmahp",
                                "name": "About IJMAHP"
                            }
                        ]
                    })}
                </script>
            </Head>
            <section className='research-areas-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', '/journal-information']} title={`Journal Information | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Journal Information</h1>
                    <hr className='mt-0' />

                    <div>
                        <Table responsive hover striped bordered>
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <td>{TEXT_LOGO} (IJMAHP)</td>
                                </tr>
                                <tr>
                                    <th>Frequency</th>
                                    <td>4/12 (Jan - Mar, Apr - June, July - Sept, Oct - Dec)</td>
                                </tr>
                                <tr>
                                    <th>ISSN No.</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Managing Director</th>
                                    <td>Dr. Darshan Parmar</td>
                                </tr>
                                <tr>
                                    <th>Chief Editor</th>
                                    <td>Dr. Mihirdev Jhala</td>
                                </tr>
                                <tr>
                                    <th>Copyright</th>
                                    <td>{TEXT_LOGO} © 2026, All Rights Reserved.</td>
                                </tr>
                                <tr>
                                    <th>Starting Year</th>
                                    <td>2026</td>
                                </tr>
                                <tr>
                                    <th>Subject</th>
                                    <td>Medical Science</td>
                                </tr>
                                <tr>
                                    <th>Language</th>
                                    <td>English</td>
                                </tr>
                                <tr>
                                    <th>Publication Format</th>
                                    <td>Online</td>
                                </tr>
                                <tr>
                                    <th>Email Address</th>
                                    <td>editor.ijmahp@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Phone No.</th>
                                    <td>+91 79843 77793, +91 96873 06037</td>
                                </tr>
                                <tr>
                                    <th>Website</th>
                                    <td>www.ijmahp.co.in</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{TEXT_LOGO}, Aatishya 100, Nr. Lubi Corporate Road, opp. Tulsi Status, Ahmedabad, Gujarat 382470</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <Row className='mt-3'>
                        <Col lg={6} md={6} sm={12}>
                            <h5>Aims:</h5>
                            <hr className='mt-0' />
                            <div className={inter?.className}>
                                <p>
                                    The {TEXT_LOGO} aims to:
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            Provide a platform for high-quality research and advancements in the field of Medical & Allied Health Professions.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Foster collaboration between researchers, clinicians, and academicians.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Promote evidence-based practice to improve patient outcomes globally.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5>Vision:</h5>
                            <hr className='mt-0' />
                            <p className={inter?.className}>
                                Our vision is to be a globally recognized and respected journal that contributes to the continuous development of Medical & Allied Health Professions through scholarly publications, fostering innovation, and enhancing clinical practices to benefit society.
                            </p>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default JournalInformation