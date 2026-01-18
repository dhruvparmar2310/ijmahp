import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { TEXT_LOGO } from '@/contstant'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const PeerReviewPolicy = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Peer Review Policy | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Peer Review Policy of IJMAHP' />
                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content="Peer Review Policy of IJMAHP" />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/policy/peer-review-policy" />
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
                        "url": "https://ijmahp.co.in/policy/peer-review-policy",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`,
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Peer Review Policy of IJMAHP"],
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
                    <BreadCrumb basePath={['/', '/peer-review-policy']} title={`Peer Review Policy | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Peer Review Policy</h1>
                    <hr className='mt-0' />

                    <h5>Initial Manuscript Evaluation:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            All submitted manuscripts undergo an initial evaluation by the Editor. Manuscripts may be rejected at this stage if they are deemed insufficiently original, contain serious scientific flaws, have poor grammar or English language, or fall outside the aims and scope of the journal. Only in exceptional cases may a manuscript be accepted at this stage. Manuscripts meeting the minimum criteria are forwarded to at least two expert reviewers for further evaluation.
                        </p>
                    </div>

                    <h5>Type of Peer Review:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            IJMAHP employs a double-blind peer review process, ensuring that both the reviewer and the author remain anonymous throughout the review process.
                        </p>
                    </div>

                    <h5>Selection of Reviewers:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            Reviewers are selected based on their expertise and relevance to the submitted manuscript. IJMAHP maintains a continuously updated database of reviewers to ensure high-quality and specialized evaluations.
                        </p>
                    </div>

                    <h5>Reviewer Responsibilities:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>Reviewers are expected to evaluate the manuscript based on the following criteria:</p>
                        <ul>
                            <li>
                                <p>
                                    Originality and scientific contribution
                                </p>
                            </li>
                            <li>
                                <p>
                                    Methodological soundness
                                </p>
                            </li>
                            <li>
                                <p>
                                    Adherence to ethical guidelines
                                </p>
                            </li>
                            <li>
                                <p>
                                    Clarity of results and their alignment with conclusions
                                </p>
                            </li>
                            <li>
                                <p>
                                    Appropriate citation of previous relevant work
                                </p>
                            </li>
                        </ul>

                        <p>
                            Reviewers are not responsible for language correction but may suggest improvements if they wish.
                        </p>
                    </div>

                    <h5>Review Process Timeline:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            The duration of the review process depends on the responsiveness of reviewers. If conflicting reviews are received or if there is a delay, an additional expert opinion may be sought. In rare instances where it is challenging to secure a second review, or if a single review is exceptionally detailed and convincing, the Editor may decide based on one reviewer’s report. The final decision, along with reviewer recommendations and comments, will be communicated to the author. Revised manuscripts may be returned to the initial reviewers, who may request further revisions if necessary.
                        </p>
                    </div>

                    <h5>Final Decision:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            A final decision—acceptance, rejection, or revision request—will be communicated to the author, including verbatim comments from reviewers when applicable. The Editor’s decision is final and made in consultation with reviewer feedback.
                        </p>
                    </div>

                    <h5>Becoming a Reviewer for IJMAHP:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            Researchers interested in becoming reviewers for IJMAHP may contact the editorial office. Benefits of reviewing include early access to new research, contribution to the integrity of scientific publication, and the opportunity to cite reviewing activity for professional development.
                        </p>
                    </div>

                    <h5>Common Reasons for Rejection:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            Manuscripts may be rejected due to technical or editorial reasons.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Technical Reasons:
                                </p>
                                <ul>
                                    <li>
                                        <p>Insufficient data (e.g. missing controls)</p>
                                    </li>
                                    <li>
                                        <p>Inadequate statistical analysis</p>
                                    </li>
                                    <li>
                                        <p>Use of outdated or inappropriate methodologies</p>
                                    </li>
                                    <li>
                                        <p>Weak research hypothesis or unsupported conclusions</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    Editorial Reasons:
                                </p>
                                <ul>
                                    <li>
                                        <p>Out of scope for the journal</p>
                                    </li>
                                    <li>
                                        <p>Insufficient novelty or impact</p>
                                    </li>
                                    <li>
                                        <p>Ethical concerns (e.g., missing patient consent or ethics committee approval)</p>
                                    </li>
                                    <li>
                                        <p>Non-compliance with journal formatting requirements</p>
                                    </li>
                                    <li>
                                        <p>Lack of clarity, making replication difficult</p>
                                    </li>
                                    <li>
                                        <p>Poor language quality or logic</p>
                                    </li>
                                    <li>
                                        <p>Excessive self-citation or outdated references</p>
                                    </li>
                                    <li>
                                        <p>Violations of publication ethics</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <h5>Adherence to COPE Guidelines:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            IJMAHP strictly follows the Committee on Publication Ethics (COPE) guidelines to maintain integrity in scientific publishing. Authors, reviewers, and editors are expected to adhere to ethical principles as outlined in the COPE framework.<br /><br />

                            For detailed guidelines on peer review standards, please refer to the official document: <span style={{ cursor: 'pointer', color: 'var(--primary-color)' }} onClick={() => router?.push('https://fs.unm.edu/NSS/PeerReviewGuidelines.pdf')}>Peer Review Guidelines</span>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PeerReviewPolicy