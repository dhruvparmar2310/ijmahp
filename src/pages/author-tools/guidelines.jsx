import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import PhysioZineLogo from '../../../public/assets/img/physiozine-logo.png'
import Link from 'next/link'
import Head from 'next/head'
import { TEXT_LOGO } from '@/contstant'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const Guidelines = () => {
    return (
        <>
            <Head>
                <title>Author Guidelines | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Author Guidelines of IJMAHP, guidelines of ijmahp' />

                <meta name="description" content="International Journal of Medical & Allied Health Professions (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions." />

                <meta property="og:title" content="Author Guidelines of IJMAHP" />
                <meta property="og:description" content="International Journal of Medical & Allied Health Professions (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions." />
                <meta property="og:url" content="https://ijmahp.co.in/author-tools/guidelines" />
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
                        "url": "https://ijmahp.co.in/author-tools/guidelines",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": "International Journal of Medical & Allied Health Professions (IJMAHP) is an open-access, peer-reviewed journal publishing original research in Medical & Allied Health Professions.",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Author Guidelines of IJMAHP"],
                    })}
                </script>
            </Head>
            <section className='author-tools-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', 'guidelines']} title={`Author Guidelines | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Author Guidelines for {TEXT_LOGO} (IJMAHP)</h1>
                    <hr className='mt-0' />

                    <p className={`${inter?.className}`}>
                        The {TEXT_LOGO} (IJMAHP) welcomes original research articles, review papers, case studies, and short communications related to the field of Medical & Allied Health Professions. Authors are encouraged to adhere to the following guidelines to ensure a smooth submission and review process.
                    </p>

                    <h5>1. Manuscript Submission:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    All manuscripts must be submitted online via the official email: <strong>editor.ijmahp@gmail.com</strong>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Submissions must be accompanied by a cover letter stating the manuscript’s significance and originality.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Manuscripts should be in English and formatted according to IJMAHP standards.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>2. Manuscript Format:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>Manuscripts should be prepared using the following structure:</p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Title Page</strong>: Title, author(s) name, affiliation(s), and corresponding author's contact details.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Abstract</strong>: A concise summary (150-250 words) highlighting objectives, methodology, results, and conclusions.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Keywords</strong>: 4-6 relevant keywords.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Introduction</strong>: Background, significance, and objectives of the study.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Materials and Methods</strong>: Detailed methodology ensuring reproducibility.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Results</strong>: Presentation of findings with appropriate tables/figures.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Discussion</strong>: Interpretation of results, limitations, and future directions.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Conclusion</strong>: Summary of key findings.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>References</strong>: Cited in APA style, ensuring relevance and accuracy.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>3. Formatting Guidelines:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Manuscripts should be submitted in Microsoft Word format.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Font: Times New Roman, Size: 12pt, Line Spacing: 1.5
                                </p>
                            </li>
                            <li>
                                <p>
                                    Figures and tables should be numbered sequentially and appropriately labeled.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Abbreviations must be defined at first mention.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>4. Ethical Considerations:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Authors must adhere to ethical research standards and provide necessary ethical approvals.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Plagiarism in any form is unacceptable, and all submissions will undergo plagiarism checks.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Informed consent must be obtained for studies involving human participants.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>5. Authorship Criteria:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        All listed authors must have significantly contributed to the research. Any conflicts of interest must be disclosed.
                    </p>

                    <h5>6. Peer Review Process:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    All manuscripts undergo a double-blind peer review process.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The review process typically takes 6-8 weeks.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Authors will receive feedback and may be required to make revisions before final acceptance.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>7. Article Processing Charges (APC):</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        A mandatory article processing charge of <strong>INR 2500 /-</strong> for Indian Author and <strong>$ 50</strong> for International Author must be paid at the time of submission to initiate the review process. Payment details are provided in article submission page.
                    </p>

                    <h5>8. Copyright and Licensing:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        Upon acceptance, authors must sign a copyright transfer agreement granting IJMAHP the rights to publish the article.
                    </p>

                    <h5>9. Submission Checklist:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            Before submission, ensure the following:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Manuscript prepared as per guidelines.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Ethical approval and conflict of interest statement included.
                                </p>
                            </li>
                            <li>
                                <p>
                                    All tables/figures are properly cited.
                                </p>
                            </li>
                        </ul>

                        <p>
                            For further inquiries, please contact us at editor.ijmahp@gmail.com or visit our website: <a href="https://ijmahp.co.in/" target='_blank'>https://ijmahp.co.in/</a>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Guidelines