import React, { Fragment, Suspense, useState } from 'react'
import Head from 'next/head'
import BreadCrumb from '@/components/BreadCrumb'
import { Button, Col, OverlayTrigger, Row, Spinner, Table, Tooltip } from 'react-bootstrap'
import { useRouter, withRouter } from 'next/router'
// import { articles } from '@/data/articles'
import { MdContentCopy } from "react-icons/md"
import copy from 'clipboard-copy'
import { Bounce, toast } from 'react-toastify'
import { FaDownload } from 'react-icons/fa6'
import { saveAs } from 'file-saver'
import { FaEye, FaUserCircle } from 'react-icons/fa'
import { Inter, Ubuntu } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { archiveList } from '@/data/archives'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { TEXT_LOGO } from '@/contstant'

const inter = Inter({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

function Archives ({ data }) {
    const router = useRouter()
    const [isCopied, setIsCopied] = useState(false)
    const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
    const [btnToggle, setBtnToggle] = useState({
        '2026': true,
    })

    const handleCopyLink = async (link) => {
        try {
            await copy(link)
            setIsCopied(true)
            toast.success('Copied to clipboard', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                toastId: 'copied'
            })
        } catch (err) {
            setIsCopied(false)
            toast.error('Failed to copy link', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                toastId: 'copied'
            })
        }
    }

    const handleAccordionClick = (index) => {
        setOpenAccordionIndex(index === openAccordionIndex ? -1 : index);
    };
    return (
        <>
            <Head>
                <title>Archives | {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, archives of ijmahp, articles of ijmahp, ijmahp articles' />

                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content="Archives of IJMAHP" />
                <meta property="og:description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />
                <meta property="og:url" content="https://ijmahp.co.in/archives" />
                <meta property="og:image" content="favicon.ico" />
                <meta property="og:type" content="website" />

                <link rel="icon" href="favicon.ico" />
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
                        "url": "https://ijmahp.co.in/archives",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": `Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`,
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijmahp@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Archives of IJMAHP", "Articles of IJMAHP", "IJMAHP Archives", "IJMAHP Articles"],
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": "https://ijmahp.co.in/about/ijmahp",
                                "name": "About IJMAHP"
                            },
                            {
                                "@type": "ReadAction",
                                "target": "https://ijmahp.co.in/about/contact",
                                "name": "Contact Us"
                            }
                        ]
                    })}
                </script>
            </Head>

            <Suspense fallback={<Spinner animation='border' size='md' variant='primary' />}>
                <section className={`archives-section container`}>
                    <BreadCrumb basePath={['/']} title={`Archives | ${TEXT_LOGO}`} />

                    <div className={`inner-content`}>
                        <h1 className='section-title'>Our Archives</h1>
                        <hr className='mt-0' />

                        <div className={``}>
                            <div className={`all-tabs`}>
                                <span className={`tab ${inter?.className} ${btnToggle?.['2026'] ? `active` : ''}`} onClick={() => setBtnToggle({ '2026': true })}>
                                    2026
                                </span>
                            </div>

                            <div className={`tab-content`}>
                                {btnToggle?.['2026'] && (<>
                                    <Row>
                                        {archiveList?.[2026]?.map(({ _id, sName, sImage, sPdfFile, aJournals, sIssue, sVolume }) => {
                                            return (
                                                <Col lg={2} key={_id}>
                                                    <div className='issue-card' onClick={() => {
                                                        aJournals?.length > 0 ? router.push({
                                                            pathname: `/archives/2026/${sVolume}/${sIssue}`,
                                                        })
                                                            : window.open(sPdfFile, "_blank")
                                                    }}>
                                                        <div className='card-top'>
                                                            <LazyLoadImage
                                                                alt={sName}
                                                                src={sImage}
                                                                effect='blur'
                                                                className='img-fluid'
                                                                threshold={100}
                                                            />
                                                        </div>
                                                        <div className='card-bottom'>
                                                            <p className={inter?.className}>{sName}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </>)}
                            </div>
                        </div>
                    </div>
                </section >
            </Suspense >
        </>
    )
}

export default withRouter(Archives)

// export const getServerSideProps = async () => {
//     const res = await fetch(`${process.env.DEPLOY}/api/archives`)
//     const data = await res.json()
//     return { props: { data } }
// }