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

const PlagiarismPolicy = () => {
    return (
        <>
            <Head>
                <title>Plagiarism Policy | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Plagiarism Policy of IJMAHP' />
                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content="Plagiarism Policy of IJMAHP" />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/policy/plagiarism-policy" />
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
                        "url": "https://ijmahp.co.in/policy/plagiarism-policy",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`,
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Plagiarism Policy of IJMAHP"],
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
                    <BreadCrumb basePath={['/', '/plagiarism-policy']} title={`Plagiarism Policy | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Plagiarism Policy</h1>
                    <hr className='mt-0' />

                    <p className={inter?.className}>
                        The {TEXT_LOGO} (IJMAHP) is committed to upholding the highest standards of academic integrity and ethical publishing practices. We expect authors to conduct their research and write their manuscripts in full accordance with these standards.
                    </p>

                    <h5>Definition of Plagiarism:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            Plagiarism refers to the use of someone else's work, ideas, or intellectual property without proper acknowledgment. This includes, but is not limited to:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Copying text or data directly without citation
                                </p>
                            </li>
                            <li>
                                <p>
                                    Paraphrasing someone’s work without giving proper credit
                                </p>
                            </li>
                            <li>
                                <p>
                                    Using images, graphs, or other visual elements without permission or acknowledgment
                                </p>
                            </li>
                            <li>
                                <p>
                                    Submitting work that has been previously published or concurrently submitted elsewhere
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Policy on Plagiarism:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            <strong>Plagiarism Checking</strong>: All submitted manuscripts will undergo plagiarism detection using reliable software. If plagiarism is detected, 15% of plagiarism is acceptable by the journal, and the authors will be notified accordingly.
                        </p>
                        <p>
                            <strong>Self-Plagiarism</strong>: Authors must avoid self-plagiarism, which includes the re-use of their previously published material without proper citation. Repetitive or redundant publication of the same material in different journals or conferences is prohibited unless clearly stated and properly referenced.
                        </p>
                        <p>
                            <strong>Proper Citation and Acknowledgment</strong>: Authors must ensure that all references, quotations, and borrowed ideas or data are properly cited in accordance with the journal’s citation style. Any sources used, whether published or unpublished, must be fully acknowledged.
                        </p>
                        <p>
                            <strong>Authorship Ethics</strong>: The authors must ensure that they have the necessary permissions for the use of any third-party materials such as figures, tables, or any other content. Misleading or false authorship claims will not be tolerated.
                        </p>
                        <p>
                            <strong>Appeals Process</strong>: If an author believes that they have been wrongly accused of plagiarism, they can submit an appeal to the editorial board. The appeal will be reviewed in detail, and the final decision will be communicated to the author.
                        </p>
                        <p>
                            <strong>Educational Purpose</strong>: The IJMAHP aims to educate authors on proper citation and plagiarism prevention. Resources and guidelines will be made available to assist authors in adhering to ethical research and publication standards.
                        </p>
                    </div>

                    <h5>Conclusion:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            The {TEXT_LOGO} takes the issue of plagiarism very seriously. We are dedicated to maintaining the integrity of the academic community by ensuring that all published work is the result of original research and ideas. Authors are expected to uphold these principles in all their submissions.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlagiarismPolicy