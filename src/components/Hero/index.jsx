import { Anton, Anton_SC, Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import React from 'react'
import { Button } from 'react-bootstrap'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })
const Hero = () => {
    const router = useRouter()
    return (
        <section className='hero-section'>
            <div className='inner-content'>
                <div className='hero-title'>
                    <h1>International Journal of <br />Medical & Allied Health Professions</h1>
                    {/* <h5>Medical & Allied Health Professions</h5> */}
                </div>

                <div>
                    <p className={`${inter?.className} mt-5 mb-0`}>ISSN No:  | ESTD Year: 2026, Follow UGC CARE Journal Norms and Guidelines</p>
                    <p className={`${inter?.className}`}>Scholarly open access journal and Peer-reviewed</p>
                    <p className={`${inter?.className} mt-3 last-date`}>Last date for Article Submission: 10th March, 2026 for Volume 1, Issue 1</p>
                    {/* <p className={`${inter?.className} mt-3 last-date`}>Journal DOI: <span className='text-lowercase'>https://doi.org/10.63299/ijmahp</span></p> */}
                </div>

                <div className='bottom-btns'>
                    <Button type='button' className={`me-3 submit-btn ${inter?.className}`} onClick={() => router?.push('https://app.oxfordabstracts.com/auth?redirect=/stages/81125/submitter', '_blank')}>Submit Paper</Button>
                    <Button className={`author-btn ${inter?.className}`} type='button' onClick={() => router?.push('/author-tools/guidelines')}>Author Guidelines</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
