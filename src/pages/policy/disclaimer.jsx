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

const Disclaimer = () => {
    return (
        <>
            <Head>
                <title>Disclaimer | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Disclaimer of IJMAHP' />
                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content="Disclaimer of IJMAHP" />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/policy/disclaimer" />
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
                        "url": "https://ijmahp.co.in/policy/disclaimer",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`,
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Disclaimer of IJMAHP"],
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
                    <BreadCrumb basePath={['/', 'disclaimer']} title={`Disclaimer | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Disclaimer</h1>
                    <hr className='mt-0' />

                    <p className={`${inter?.className} text-danger`}>
                        The content published by the {TEXT_LOGO} (IJMAHP) is for informational and educational purposes only. IJMAHP does not provide medical advice, diagnosis, or treatment. Readers should consult qualified healthcare professionals for medical concerns. The views expressed in published articles are those of the authors and do not necessarily reflect the views of IJMAHP. IJMAHP is not responsible for any inaccuracies, errors, or omissions in the content provided. Use of IJMAHP content is at the reader's own risk.
                    </p>

                    <p className={`${inter?.className} text-danger`}>
                        <em>
                            Our journal undergoes a rigorous peer-review and refereed journals. However, for indexing status and inclusion in databases such as UGC CARE, Scopus, or Web of Science, we recommend referring to the latest and updated lists available on their respective websites. Currently Journal is only peer-review. Journal follow all above guidelines only. The information provided here may become outdated and should be independently verified
                        </em>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Disclaimer