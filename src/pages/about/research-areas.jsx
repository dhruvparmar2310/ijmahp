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

const ResearchAreas = () => {
    return (
        <>
            <Head>
                <title>Research Areas | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, research areas of ijmahp' />

                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content="Research Areas of IJMAHP" />
                <meta property="og:description" content="Learn about the International Journal of Medical & Allied Health Professions (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions." />
                <meta property="og:url" content="https://ijmahp.co.in/about/research-areas" />
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
                        "url": "https://ijmahp.co.in/about/research-areas",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `${TEXT_LOGO} (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions.`,
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijmahp@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Research Areas of IJMAHP"],
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
            </Head >
            <section className='research-areas-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', '/research-areas']} title={`Research Areas | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Research Areas</h1>
                    <hr className='mt-0' />

                    <p className={`${inter?.className}`}>
                        The {TEXT_LOGO} - Welcomes high-quality research contributions that advance the field of Medical & Allied Health Professions. Our journal provides a global platform for scholars, clinicians, and researchers to publish innovative studies and evidence-based practices that enhance patient care and professional knowledge.
                    </p>

                    <div className={`${inter?.className}`}>
                        <p>
                            We encourage submissions from a wide range of research areas, including but not limited to: <br />
                            <strong>Medicine, Dentistry, Pharmacy, Anatomy, Physiology, Biochemistry, Gynecology, Neurology, Surgery, Orthopaedics, Ophthalmology, ENT, Anesthesiology, Community Medicine, Pediatrics, Public Health, Physiotherapy, Rehabilitation, Occupational Therapy, Paramedical sciences, Nursing, Health and Hospital Management, Genetics, Biodiversity & Conservation, Pathology, Microbiology, Biotechnology, Occupational and Environmental sciences, Molecular Biology, Clinical Psychology, Psychiatry, Psychotherapy, Forensic Science, Dietetics & Nutrition, Yoga, Ayurveda, Homoeopathy</strong>
                        </p>

                        <p>
                            We invite original research articles, systematic reviews, case studies, and clinical commentaries that contribute to the advancement of these domains.
                        </p>

                        <p>
                            Join us in fostering scientific excellence and shaping the future of physical therapy through impactful research and innovation.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResearchAreas