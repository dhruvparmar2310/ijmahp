import Head from 'next/head'
import Image from 'next/image'
import { Anton, Anton_SC, Geist, Geist_Mono, Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Slider from 'react-slick'
import { Col, Row } from 'react-bootstrap'
import { archiveList } from '@/data/archives'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faFileArrowDown, faFileLines, faGlobe, faHandHoldingDollar, faLink } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import samplePaperFormat from '../../public/assets/documents/ijmahp-paper-format.docx'
import advertiseImg1 from '../../public/assets/img/archives/webinar-1.jpg'
import advertiseImg2 from '../../public/assets/img/archives/webinar-2.jpg'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
}

const indexingImg = [
  { sImage: 'assets/img/index/google-scholar.jpg', sAlt: 'Google Scholar' },
  { sImage: 'assets/img/index/Crossref-Logo.jpeg', sAlt: 'Crossref' },
  { sImage: 'assets/img/index/issn_logo.png', sAlt: 'ISSN' },
  { sImage: 'assets/img/index/ResearchGate_logo.png', sAlt: 'Research Gate' },
  { sImage: 'assets/img/index/r-discovery-logo.png', sAlt: 'Research Discovery' },
  { sImage: 'assets/img/index/Open_Ukrainian_Citation_Index_logo.png', sAlt: 'OUC' },
  { sImage: 'assets/img/index/europub.png', sAlt: 'EuroPub' },
  { sImage: 'assets/img/index/scilit-Logo.png', sAlt: 'Scilit' },
  { sImage: 'assets/img/index/Open_Access_logo.png', sAlt: 'Open Access' },
  { sImage: 'assets/img/index/cukurova_logo.png', sAlt: 'Cukurova' },
  { sImage: 'assets/img/index/ici2.png', sAlt: 'ICI2' },
  { sImage: 'assets/img/index/logo_world_of_journals.png', sAlt: 'ICI World of Journal' },
  { sImage: 'assets/img/index/scispace-logo.svg', sAlt: 'scispace logo' },
  { sImage: 'assets/img/index/zenodo.png', sAlt: 'Zenodo' },
  { sImage: 'assets/img/index/DOI_logo.png', sAlt: 'DOI' },
  { sImage: 'assets/img/index/am.jpeg', sAlt: 'Acedemia' },
  { sImage: 'assets/img/index/OpenAire_Logo.jpg', sAlt: 'Open Aire' },
  { sImage: 'assets/img/index/orcid.logo.png', sAlt: 'ORCID' },
  { sImage: 'assets/img/index/Linkedin-Logo.png', sAlt: 'LinkedIn' },
  { sImage: 'assets/img/index/google-scholar.jpg', sAlt: 'Google Scholar' },
  { sImage: 'assets/img/index/Crossref-Logo.jpeg', sAlt: 'Crossref' },
  { sImage: 'assets/img/index/issn_logo.png', sAlt: 'ISSN' },
  { sImage: 'assets/img/index/ResearchGate_logo.png', sAlt: 'Research Gate' },
  { sImage: 'assets/img/index/r-discovery-logo.png', sAlt: 'Research Discovery' },
  { sImage: 'assets/img/index/Open_Ukrainian_Citation_Index_logo.png', sAlt: 'OUC' },
  { sImage: 'assets/img/index/europub.png', sAlt: 'EuroPub' },
  { sImage: 'assets/img/index/scilit-Logo.png', sAlt: 'Scilit' },
  { sImage: 'assets/img/index/Open_Access_logo.png', sAlt: 'Open Access' },
  { sImage: 'assets/img/index/cukurova_logo.png', sAlt: 'Cukurova' },
  { sImage: 'assets/img/index/ici2.png', sAlt: 'ICI2' },
  { sImage: 'assets/img/index/logo_world_of_journals.png', sAlt: 'ICI World of Journal' },
  { sImage: 'assets/img/index/scispace-logo.svg', sAlt: 'scispace logo' },
  { sImage: 'assets/img/index/zenodo.png', sAlt: 'Zenodo' },
  { sImage: 'assets/img/index/DOI_logo.png', sAlt: 'DOI' },
  { sImage: 'assets/img/index/am.jpeg', sAlt: 'Acedemia' },
  { sImage: 'assets/img/index/OpenAire_Logo.jpg', sAlt: 'Open Aire' },
  { sImage: 'assets/img/index/orcid.logo.png', sAlt: 'ORCID' },
  { sImage: 'assets/img/index/Linkedin-Logo.png', sAlt: 'LinkedIn' }
]

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>International Journal of Medical & Allied Health Professions</title>
        <meta charSet='utf-8'></meta>
        <meta name='viewport' content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='IJMAHP, International Journal of Medical & Allied Health Professions, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal, Medical Journal, Allied Health Journal, Dental Journal, Ayurvedic Journal, Homeopathy Journal, Nursing Journal, Pharmacy Journal, Occupational Therapy Journal, Speech Therapy Journal, Rehabilitation Journal, Optometry Journal, Public Health Journal, Health Sciences Journal'
        />
        <meta
          name='description'
          content='International Journal of Medical & Allied Health Professions (IJMAHP): Your trusted source for peer-reviewed articles, latest research, and expert insights in Medical & Allied Health Professions, Open access Journal. Explore now!'
        />
        <meta property='og:title' content='International Journal of Medical & Allied Health Professions - Open Access & Peer-Reviewed Journal' />
        <meta
          property='og:description'
          content='International Journal of Medical & Allied Health Professions (IJMAHP): Your trusted source for peer-reviewed articles, latest research, and expert insights in Medical & Allied Health Professions, Open access Journal. Explore now!'
        />
        <meta property='og:url' content='https://ijmahp.vercel.app/' />
        <meta property='og:image' content='favicon.ico' />
        <meta property='og:type' content='website' />
        <link rel='icon' href='favicon.ico' />
        <link rel='manifest' href='/manifest.json' />

        {/* Structured Data SEO */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'International Journal of Medical & Allied Health Professions (IJMAHP)',
            url: 'www.ijmahp.co.in',
            description:
              'International Journal of Medical & Allied Health Professions (IJMAHP) is a trusted source for peer-reviewed articles, latest research, and expert insights in Medical & Allied Health Professions, Open access International Journal.',
            publisher: {
              '@type': 'Organization',
              name: 'International Journal of Medical & Allied Health Professions (IJMAHP)',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ijmahp.vercel.app/faicon.ico',
                width: 512,
                height: 512
              }
            },
            potentialAction: [
              {
                '@type': 'ReadAction',
                target: 'https://ijmahp.vercel.app/about/ijmahp',
                name: 'About Us'
              },
              {
                '@type': 'ReadAction',
                target: 'https://ijmahp.vercel.app/author-tools/guidelines',
                name: 'Author Guidelines'
              },
              {
                '@type': 'ReadAction',
                target: 'https://ijmahp.vercel.app/author-tools/submit-paper-online',
                name: 'Submit Paper Online'
              },
              {
                '@type': 'ReadAction',
                target: 'https://ijmahp.vercel.app/author-tools/article-processing-charge',
                name: 'Article Processing Charge'
              }
            ]
            // "sameAs": [
            //   "https://www.facebook.com/physiozine",
            //   "https://www.instagram.com/physiozine",
            //   "https://twitter.com/physiozine"
            // ]
          })}
        </script>
      </Head>
      <div className={`page`}>
        <main className='main'>
          <Hero />
          <div className=''>
            <div className='ads-section'>
              <div className='left-content'>
                <section className='about-section'>
                  <div className='container'>
                    <h1 className={antonSC?.className}>About IJMAHP</h1>
                    <p className={`${inter?.className} main-content`}>
                      Welcome to the International Journal of Medical & Allied Health Professions - A Premier platform dedicated to
                      advancing the field of medical and allied health professions. Powered by PhysioZine, this peer-reviewed journal
                      connects researchers, clinicians, and educators worldwide, promoting innovative practices and evidence-based research.
                      We cover diverse areas, including <strong>Medicine, Dentistry, Pharmacy, Anatomy, Physiology, Biochemistry, Gynecology, Neurology, Surgery, Orthopaedics, Ophthalmology, ENT, Anesthesiology, Community Medicine, Pediatrics, Public Health, Physiotherapy, Rehabilitation, Occupational Therapy, Paramedical sciences, Nursing, Health and Hospital Management, Genetics, Biodiversity & Conservation, Pathology, Microbiology, Biotechnology, Occupational and Environmental sciences, Molecular Biology, Clinical Psychology, Psychiatry, Psychotherapy, Forensic Science, Dietetics & Nutrition, Yoga, Ayurveda, Homoeopathy</strong>. Committed to excellence,
                      our open-access approach ensures global visibility for your work, bridging the gap between research and clinical
                      practice.
                    </p>

                    <h5 className={`${antonSC?.className} mt-4`}>Scope of Journal</h5>
                    <p className={`${inter?.className} mb-0 mt-2`}>
                      The journal publishes high-quality research in medical, dental, pharmaceutical, nursing, paramedical, life, and allied health sciences. It covers basic, clinical, and applied research in disciplines including Medicine, Surgery, Gynecology, Pediatrics, Neurology, Orthopaedics, Dentistry, Pharmacy, Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Genetics, Biotechnology, Physiotherapy, Rehabilitation, Occupational Therapy, Public Health, Community Medicine, Nutrition, Mental Health, and Health Management.
</p>
<p>
The journal also welcomes interdisciplinary studies, translational research, and evidence-based work in traditional and integrative healthcare systems such as Yoga, Ayurveda, and Homoeopathy, aimed at improving clinical practice, healthcare delivery, and public health outcomes.
                    </p>
                    {/* <div className='notice-board'>
                      <h1>Notice: UGC-CARE Listing Discontinued</h1>
                      <p className={`${inter?.className} main-content`}>
                        The University Grants Commission (UGC) has officially discontinued the UGC-CARE journal listing with immediate
                        effect and has issued new guidelines for selecting quality peer-reviewed journals.We are pleased to inform you that
                        our journal follows to the guidelines provided by the UGC. To read the UGC guidelines, <Link href='https://www.ugc.gov.in/pdfnews/9678711_PUBLIC-NOTICE-CARE.pdf' target='_blank' title='UGC Notice'>click here</Link>.
                      </p>
                    </div> */}
                  </div>
                </section>
              </div>
              <div className='right-content'>
                <div className={`other-indexing`}>
                  <div className={`card-design ${inter?.className}`}>
                    <div className='card-title'>
                      <FontAwesomeIcon className='me-1' icon={faLink} fade size='md' /> Quick Links
                    </div>
                    <div className='card-body'>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faBookOpenReader} />{' '}
                          <Link href='https://app.oxfordabstracts.com/auth?redirect=/stages/81125/submitter'>Call for Publication</Link>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faFileLines} /> <Link href='/author-tools/guidelines'>Author Guidelines</Link>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faHandHoldingDollar} />{' '}
                          <Link href='/author-tools/article-processing-charge'>Article Processing Charge (APC)</Link>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faFileArrowDown} />{' '}
                          <Link href='#' onClick={(e) => saveAs(samplePaperFormat, 'Sample Paper - IJMAHP')}>
                            Sample Paper Format
                          </Link>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faFileLines} /> <Link href='/policy/peer-review-policy'>Peer Review Policy</Link>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faGlobe} /> <Link href='/about/indexing'>Indexing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className='ads-img'>
                    <p>ADVERTISEMENT</p>
                    <Image src={advertiseImg1} className='img-fluid' alt='Call For Publication' quality={100} priority />
                    <Image src={advertiseImg2} className='img-fluid' alt='Call For Publication' quality={100} priority />
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <section className='index-section'>
            <div className='container'>
              <div className='slider'>
                <Slider {...settings}>
                  {indexingImg?.map(({ sImage, sAlt }, i) => {
                    return (
                      <div className='slider-item' key={i}>
                        <Image src={sImage} alt={sAlt} quality={100} width={100} height={100} className='img-fluid' />
                      </div>
                    )
                  })}
                </Slider>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}