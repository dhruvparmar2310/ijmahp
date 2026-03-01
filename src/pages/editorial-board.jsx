import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import drDarshan from '../../public/assets/img/members/Dr.DarshanParmar.JPG'
import drMihirdev from '../../public/assets/img/members/Mihirdev Jhala.PNG'
import drAmit from '../../public/assets/img/members/DR. AMIT M PATEL PT.png'
import drMaulik from '../../public/assets/img/members/Maulik Patel.jpeg'
import drNehal from '../../public/assets/img/members/Nehal Shah.jpeg'
import drGirish from '../../public/assets/img/members/Dr.Girish Joseph.jpeg'
import drIsha from '../../public/assets/img/members/Dr.Isha Tapasvi.jpeg'
import drMadhurika from '../../public/assets/img/members/Dr.Madhurika Kate.jpeg'
import drPayal from '../../public/assets/img/members/Dr.Payal Adwani.jpeg'
import drRatul from '../../public/assets/img/members/Dr.Ratul-Dey.jpeg'
import drSandeep from '../../public/assets/img/members/Dr.Sandeep Kumar.jpeg'
import drBhagyalaxmi from '../../public/assets/img/members/Dr.Aroor Bhagyalaxmi.jpeg'
import drUrvashi from '../../public/assets/img/members/Dr.Urvashi Jadeja.jpeg'
import drVikas from '../../public/assets/img/members/Dr.Vikas Gupta.jpeg'
import drVanita from '../../public/assets/img/members/Dr.Vanita Keshav.jpeg'

import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap'
import { TEXT_LOGO } from '@/contstant'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const EditorialBoard = () => {
    return (
        <>
            <Head>
                <title>Editorial Board of {TEXT_LOGO}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal, About IJMAHP, about international journal of medical & allied health professions, PhysioZine, Editorial Members of IJMAHP, members of ijmahp' />

                <meta name="description" content={`Learn about the ${TEXT_LOGO} (IJMAHP). We are an open-access, peer-reviewed journal publishing original research and articles in Medical & Allied Health Professions.`} />

                <meta property="og:title" content={`Editorial Board of ${TEXT_LOGO}`} />
                <meta property="og:description" content="Learn about IJMAHP, an open-access, peer-reviewed journal publishing original research in medical and allied health professions." />
                <meta property="og:url" content="https://ijmahp.co.in/editorial-board" />
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
                        "url": "https://ijmahp.co.in/editorial-board",
                        "logo": "https://ijmahp.co.in/favicon.ico",
                        "description": "Learn about IJMAHP, an open-access, peer-reviewed journal publishing original research in medical and allied health professions.",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijmahp@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Editorial Board of IJMAHP"],
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

            <section className='editorial-board-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/']} title={`Editorial Board | ${TEXT_LOGO}`} />

                    <h1 className='section-title'>Editorial Board - {TEXT_LOGO} (IJMAHP)</h1>
                    <hr className='mt-0' />

                    <h5>Managing Director:</h5>
                    <hr className='mt-0' />
                    <div className='member-card'>
                        <div className="left-content">
                            <Image src={drDarshan} alt='Dr. Darshan Parmar' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Darshan Parmar</p>
                            <p className={inter?.className}>PhD Scholar, MPT in Neurological Conditions</p>
                            <p className={inter?.className}>Asst. Professor at Faculty of Physiotherapy, Swaminarayan University</p>
                            <p className={inter?.className}><strong>Address:</strong> Swaminarayan University, Ahmedabad - Meshana Highway, Kalol, Gujarat - 382725</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>fophy.darshanp@swaminarayanuniversity.ac.in</span></p>
                        </div>
                    </div>

                    <h5 className='mt-3'>Chief Editor:</h5>
                    <hr className='mt-0' />
                    <div className='member-card'>
                        <div className="left-content">
                            <Image src={drMihirdev} alt='Dr. Mihirdev Jhala' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Mihirdev Jhala</p>
                            <p className={inter?.className}>PhD, MPT in Neurological Conditions</p>
                            <p className={inter?.className}>Principal, JG College of Physiotherapy</p>
                            <p className={inter?.className}><strong>Address:</strong> JG College of Physiotherapy, Opp. Gulab Tower, Ahmedabad, Gujarat - 380061</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>prin.jgphysio@jgcolleges.org</span></p>
                        </div>
                    </div>

                    <h5 className='mt-3'>Associate Editor:</h5>
                    <hr className='mt-0' />
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            {/* <Image src={drAmrutkuvarShivajiRayjade} alt='Dr. Amrutkuvar Shivaji Rayjade' quality={100} className='img-fluid' /> */}
                            <FontAwesomeIcon icon={faUser} color='gray' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Roopam Gupta</p>
                            <p className={inter?.className}>PhD, MD (Anatomy), MHA, MSC LLB, ACME, DIH, EXPHSM</p>
                            <p className={inter?.className}>Dean & Prof. in Anatomy, Swaminarayan University</p>
                            <p className={inter?.className}><strong>Address:</strong> Swaminarayan University, Ahmedabad - Meshana Highway, Kalol, Gujarat - 382725</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>dean.sims@swaminarayanuniversity.ac.in</span></p>
                        </div>
                    </div>
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            <Image src={drNehal} alt='Dr. Nehal Shah' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Nehal Shah</p>
                            <p className={inter?.className}>PhD in Physiotherapy</p>
                            <p className={inter?.className}>I/C Principal, SBB College of Physiotherapy</p>
                            <p className={inter?.className}><strong>Address:</strong> SBB College of Physiotherapy, Ellisbridge Ahmedabad, Gujarat - 380006</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>principal@sbbptc.edu.in</span></p>
                        </div>
                    </div>
                    <div className='member-card  mt-3'>
                        <div className="left-content">
                            <Image src={drAmit} alt='Dr. Amit Patel' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Amit Patel</p>
                            <p className={inter?.className}>PhD, MPT in Orthopedic</p>
                            <p className={inter?.className}>Sr. Lecturer & PG Guide, JG College of Physiotherapy</p>
                            <p className={inter?.className}><strong>Address:</strong> JG College of Physiotherapy, Opp. Gulab Tower, Ahmedabad, Gujarat - 380061</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>amit.jgphysio@jgcolleges.org</span></p>
                        </div>
                    </div>
                    <div className='member-card  mt-3'>
                        <div className="left-content">
                            <Image src={drRatul} alt='Dr. Ratul Dey' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Ratul Dey</p>
                            <p className={inter?.className}>Master of Science in Audiology</p>
                            <p className={inter?.className}>Associate Professor (Audiology), Dept of ENT</p>
                            <p className={inter?.className}><strong>Address:</strong> GGS Medical College, Faridkot - 151203</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>ratuldey@ggsmch.org</span></p>
                        </div>
                    </div>
                    <div className='member-card  mt-3'>
                        <div className="left-content">
                            <Image src={drBhagyalaxmi} alt='Dr. A. Bhagyalaxmi' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. A. Bhagyalaxmi</p>
                            <p className={inter?.className}>MBBS MD</p>
                            <p className={inter?.className}>Professor and Head Community Medicine Department</p>
                            <p className={inter?.className}><strong>Address:</strong> B J Medical College Ahmedbad
                                NCH Campus Asarwa - 380016</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>bhagya.mardi@gmail.com</span></p>
                        </div>
                    </div>

                    {/* <h5 className='mt-3'>Advisory Member:</h5>
                    <hr className='mt-0' />
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    <Image src={drYagnaShukla} alt='Dr. Yagna Shukla' quality={100} className='img-fluid' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Yagna Shukla</p>
                                    <p className={inter?.className}>PhD, MPT in Musculoskeletal Conditions</p>
                                    <p className={inter?.className}>Chairperson, National Commission for Allied and Healthcare Professions</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    <Image src={drAnjaliBhise} alt='Dr. Anjali Bhise' quality={100} className='img-fluid' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Anjali Bhise</p>
                                    <p className={inter?.className}>PhD, MPT in Cardiopulmonary Conditions</p>
                                    <p className={inter?.className}>Principal, GCS Medical College, Hospital & Research Centre, Ahmedabad
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    <Image src={drNeetaVyas} alt='Dr. Neeta Vyas' quality={100} className='img-fluid' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Neeta Vyas</p>
                                    <p className={inter?.className}>PhD in Indian Board of Alternative Medicines</p>
                                    <p className={inter?.className}>Professor at Ahmedabad Institute of Medical Sciences
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    <Image src={drAshishKakkad} alt='Dr. Ashish Kakkad' quality={100} className='img-fluid' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Ashish Kakkad</p>
                                    <p className={inter?.className}>PhD, MPT in Neurological Conditions</p>
                                    <p className={inter?.className}>Principal at Faculty of Physiotherapy, Marwadi University (MU), Rajkot</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    <Image src={drKrishmaJagad} alt='Dr. Karishma Jagad' quality={100} className='img-fluid' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Karishma Jagad</p>
                                    <p className={inter?.className}>MPT in Neurological Conditions</p>
                                    <p className={inter?.className}>Sr. Lecturer at Govt. Physiotherapy College, Jamnagar</p>
                                </div>
                            </div>
                        </Col>
                    </Row> */}

                    <h5 className='mt-3'>Editors:</h5>
                    <hr className='mt-0' />
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            <Image src={drUrvashi} alt='Dr. Urvashi Jadeja' quality={100} className='img-fluid' />
                            {/* <FontAwesomeIcon icon={faUser} color='gray' /> */}
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Urvashi Jadeja</p>
                            <p className={inter?.className}>PhD Scholar, MPT in Pediatrics</p>
                            <p className={inter?.className}>I/C Dean, Faculty of Physiotherapy, Swaminarayan University</p>
                            <p className={inter?.className}><strong>Address:</strong> Swaminarayan University, Ahmedabad - Meshana Highway, Kalol, Gujarat - 382725</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>deanphysiotherapy@swaminarayanuniversity.ac.in</span></p>
                        </div>
                    </div>
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            <Image src={drMaulik} alt='Dr. Maulik Patel' quality={100} className='img-fluid' />
                            {/* <FontAwesomeIcon icon={faUser} color='gray' /> */}
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Maulik Patel</p>
                            <p className={inter?.className}>MD in Pharmacology</p>
                            <p className={inter?.className}>Prof. & HOD (Pharmacology), SIMSR, Swaminarayan University</p>
                            <p className={inter?.className}><strong>Address:</strong> Swaminarayan University, Ahmedabad - Meshana Highway, Kalol, Gujarat - 382725</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>patelmaulik24@gmail.com</span></p>
                        </div>
                    </div>
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            {/* <Image src={drMoushumiDebnath} alt='Dr. Moushumi Debnath' quality={100} className='img-fluid' /> */}
                            <FontAwesomeIcon icon={faUser} color='gray' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Saad Ali Alsehemi</p>
                            <p className={inter?.className}>MPT in Musculoskeletal Conditions</p>
                            <p className={inter?.className}>Medical Director & Chief Physiotherapist</p>
                            <p className={inter?.className}><strong>Address:</strong> Physioplans Physiotherapy and Rehabitilation Centre, Abdulmajeed Ibn Abdulaziz, Al Iskan, Madinah, Saudi Arabia - 42224</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>saadalisafar@gmail.com</span></p>
                        </div>
                    </div>
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            {/* <Image src={drMoushumiDebnath} alt='Dr. Moushumi Debnath' quality={100} className='img-fluid' /> */}
                            <FontAwesomeIcon icon={faUser} color='gray' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Mohammed Amjad Khan</p>
                            <p className={inter?.className}>BPT</p>
                            <p className={inter?.className}>Sr. Physiotherapist</p>
                            <p className={inter?.className}><strong>Address:</strong> Physioplans Physiotherapy and Rehabitilation Centre, Abdulmajeed Ibn Abdulaziz, Al Iskan, Madinah, Saudi Arabia - 42224</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>amjadkhan.mmkk@gmail.com</span></p>
                        </div>
                    </div>
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            {/* <Image src={drMoushumiDebnath} alt='Dr. Moushumi Debnath' quality={100} className='img-fluid' /> */}
                            <FontAwesomeIcon icon={faUser} color='gray' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Yuthika Rao</p>
                            <p className={inter?.className}>PhD, MPT in Cardiorespiratory Disorders</p>
                            <p className={inter?.className}>Associate Professor, Mahatma Gandhi Physiotherapy College</p>
                            <p className={inter?.className}><strong>Address:</strong> Mahatma Gandhi Physiotherapy College, Mahatma Gandhi Rd, Jaipur, Rajasthan - 302022</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>physioyuths@gmail.com</span></p>
                        </div>
                    </div>
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            <Image src={drVikas} alt='Dr. Vikas Gupta' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Vikas Gupta</p>
                            <p className={inter?.className}>M.Pharma, Ph.D.</p>
                            <p className={inter?.className}>Assistant Director-cum-Associate Professor</p>
                            <p className={inter?.className}><strong>Address:</strong> UCER, Baba Farid University of Health Sciences, Faridkot, Punjab - 151203</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>vikas_4308@rediffmail.com</span></p>
                        </div>
                    </div>
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            <Image src={drSandeep} alt='Dr. Sandeep Kumar' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Sandeep Kumar</p>
                            <p className={inter?.className}>MPT in Orthopaedics</p>
                            <p className={inter?.className}>Associate Professor</p>
                            <p className={inter?.className}><strong>Address:</strong> UCER, Baba Farid University of Health Sciences, Faridkot, Punjab - 151203</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>drsandeep@ggsmch.org</span></p>
                        </div>
                    </div>
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            <Image src={drIsha} alt='Dr. Isha Tapasvi' quality={100} className='img-fluid' />
                            {/* <FontAwesomeIcon icon={faUser} color='gray' /> */}
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Isha Tapasvi</p>
                            <p className={inter?.className}>MBBS , DNB (OBG ) , Certified course in Gynecology Oncology</p>
                            <p className={inter?.className}>Professor</p>
                            <p className={inter?.className}><strong>Address:</strong> Guru Gobind Singh Medical College, Faridkot, Punjab - 151203</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>ishatapasvi@ggsmch.org</span></p>
                        </div>
                    </div>

                    <h5 className='mt-3'>Reviewers:</h5>
                    <hr className='mt-0' />

                    <div className='member-card mt-3'>
                        <div className="left-content">
                            <Image src={drVanita} alt='Dr. Vanita Keshav' quality={100} className='img-fluid' />
                            {/* <FontAwesomeIcon icon={faUser} color='gray' /> */}
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Vanita Keshav</p>
                            <p className={inter?.className}>MDS Conservative Dentistry and Endodontics</p>
                            <p className={inter?.className}>Professor</p>
                            <p className={inter?.className}><strong>Address:</strong> Dasmesh Institute of Research and Dental Sciences, Faridkot, Punjab - 151203</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>vin5j@yahoo.com</span></p>
                        </div>
                    </div>
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            <Image src={drGirish} alt='Dr. Girish Joseph' quality={100} className='img-fluid' />
                            {/* <FontAwesomeIcon icon={faUser} color='gray' /> */}
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Girish Joseph</p>
                            <p className={inter?.className}>MD Pharmacology</p>
                            <p className={inter?.className}>Assistant Professor, Pharmacology</p>
                            <p className={inter?.className}><strong>Address:</strong> Christian Medical College, Ludhiana, Punjab - 141008</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>girishjoseph7@gmail.com</span></p>
                        </div>
                    </div>
                    <div className='member-card mt-3'>
                        <div className="left-content">
                            <Image src={drPayal} alt='Dr. Payal Adwani' quality={100} className='img-fluid' />
                            {/* <FontAwesomeIcon icon={faUser} color='gray' /> */}
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Payal Adwani</p>
                            <p className={inter?.className}>MPT in Musculoskeletal Conditions</p>
                            <p className={inter?.className}>Assistant Professor, Faculty of Physiotherapy, Marwadi University</p>
                            <p className={inter?.className}><strong>Address:</strong> Marwadi University, Rajkot - Morbi Highway, Rajkot - 360003</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>payal.adwani@marwadieducation.edu.in</span></p>
                        </div>
                    </div>
                    {/* <div className='member-card mt-3'>
                        <div className="left-content">
                            <FontAwesomeIcon icon={faUser} color='gray' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Jay Sheth</p>
                            <p className={inter?.className}>BAMS</p>
                            <p className={inter?.className}>Consultant at Himalaya Cancer Hospital</p>
                            <p className={inter?.className}><strong>Address:</strong> Himalaya Cancer Hospital, nr Railway Station, Alkapuri, Vadodara, Gujarat - 390007</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>jaysheth311@gmail.com</span></p>
                        </div>
                    </div> */}

                    <div className='member-card mt-3'>
                        <div className="left-content">
                            <Image src={drMadhurika} alt='Dr. Madhurika Kate' quality={100} className='img-fluid' />
                            {/* <FontAwesomeIcon icon={faUser} color='gray' /> */}
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Madhurika Kate</p>
                            <p className={inter?.className}>PhD Scholar, MPT in Neuro Sciences</p>
                            <p className={inter?.className}>Associate Professor, Nanded Physiotherapy College & Research Center</p>
                            <p className={inter?.className}><strong>Address:</strong> Nanded Physiotherapy College & Research Center, Nanded, Maharashtra - 431606</p>
                            <p className={inter?.className}><strong>Email:</strong> <span className='highlight'>dr.madhurkaneurophysio@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditorialBoard
