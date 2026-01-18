import Image from 'next/image'
import BreadCrumb from '@/components/BreadCrumb'
import React from 'react'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import { TEXT_LOGO } from '@/contstant'

const Indexing = () => {
    const indexingImg = [
        { sImage: '/assets/img/index/google-scholar.jpg', sAlt: 'Google Scholar' },
        { sImage: '/assets/img/index/Crossref-Logo.jpeg', sAlt: 'Crossref' },
        { sImage: '/assets/img/index/issn_logo.png', sAlt: 'ISSN' },
        { sImage: '/assets/img/index/ResearchGate_logo.png', sAlt: 'Research Gate' },
        { sImage: '/assets/img/index/r-discovery-logo.png', sAlt: 'Research Discovery' },
        { sImage: '/assets/img/index/Open_Ukrainian_Citation_Index_logo.png', sAlt: 'OUC' },
        { sImage: '/assets/img/index/europub.png', sAlt: 'EuroPub' },
        { sImage: '/assets/img/index/scilit-Logo.png', sAlt: 'Scilit' },
        { sImage: '/assets/img/index/Open_Access_logo.png', sAlt: 'Open Access' },
        { sImage: '/assets/img/index/cukurova_logo.png', sAlt: 'Cukurova' },
        { sImage: '/assets/img/index/ici2.png', sAlt: 'ICI2' },
        { sImage: '/assets/img/index/logo_world_of_journals.png', sAlt: 'ICI World of Journal' },
        { sImage: '/assets/img/index/scispace-logo.svg', sAlt: 'scispace logo' },
        { sImage: '/assets/img/index/zenodo.png', sAlt: 'Zenodo' },
        { sImage: '/assets/img/index/DOI_logo.png', sAlt: 'DOI' },
        { sImage: '/assets/img/index/am.jpeg', sAlt: 'Acedemia' },
        { sImage: '/assets/img/index/OpenAire_Logo.jpg', sAlt: 'Open Aire' },
        { sImage: '/assets/img/index/orcid.logo.png', sAlt: 'ORCID' },
        { sImage: '/assets/img/index/Linkedin-Logo.png', sAlt: 'LinkedIn' },
    ]
    return (
        <>
            <Head>
                <title>IJMAHP Indexing</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, ijmahp indexing' />

                <meta name="description" content="Learn about the International Journal of Medical & Allied Health Professions (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions." />

                <meta property="og:title" content="About International Journal of Medical & Allied Health Professions" />
                <meta property="og:description" content="Learn about IJMAHP, an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions." />
                <meta property="og:url" content="https://ijmahp.co.in/about/indexing" />
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
                        "name": `Indexing - ${TEXT_LOGO} (IJMAHP)`,
                        "url": "https://ijmahp.co.in/about/indexing",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `${TEXT_LOGO} (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions.`,
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijmahp@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "About IJMAHP", "What is IJMAHP", "IJMAHP Indexing"],
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
                    <BreadCrumb basePath={['/', '/indexing']} title='IJMAHP Indexing' />

                    <h1 className='section-title'>Indexing - {TEXT_LOGO} (IJMAHP)</h1>
                    <hr className='mt-0' />

                    <Row>
                        {indexingImg?.map(item => {
                            return (
                                <Col lg={3} md={4} sm={6} key={item.sImage}>
                                    <div className='my-3 d-flex align-center justify-content-center w-full'>
                                        <Image src={item.sImage} className='img-fluid' alt={item.sAlt} width={150} height={150} />
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Indexing