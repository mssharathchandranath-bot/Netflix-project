import React from 'react'
import { Link } from 'react-router-dom'
import "./Malayalam.css"
import Nav from './Nav'
import Footer from './Footer'

export default function Malayalam() {
    function info() {
        alert("A tailor gains special powers after struck by lightning,but must take down an unexpected foe if he is to become the superhero his hometown needs.")
    }
    return (
        <>
        <Nav/>
            <div className='malayalambackground'>
                <div className='side'>
                    <Link to='/Browse by Language'>
                        <button className='back'>Back</button>
                    </Link>
                    <h1 className='bison'>Minnal Murali</h1>
                    <div className='icon'>
                        <img src='data:image/jpeg;base64,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' />
                        <p>#7 in Movies Today</p>
                    </div>
                    <h1>Watch in Tamil,Telugu,Malayalam</h1>
                    <p className='cont'>A tailor gains special powers after struck by lightning,but must take <br /> down an unexpected foe if he is to become the superhero his hometown <br /> needs.</p>
                    <div className='now'>
                        <Link to="https://www.netflix.com/watch/81497215?trackId=284616272&tctx=0%2C0%2C08bc887d-0e6e-40f5-9e20-7fad6cc1e187%2C08bc887d-0e6e-40f5-9e20-7fad6cc1e187%7C%3DeyJwYWdlSWQiOiIyODE4NmFiNy04NjBjLTQyM2YtOTVjYi0xN2FkNGY0NmZjMDcvMS8vbWluLzAvMCIsImxvY2FsU2VjdGlvbklkIjoiMiJ9%2C%2C%2C%2CtitlesResults%2C81497215%2CVideo%3A81497215%2CminiDpPlayButton">
                            <button  >Watch now</button>
                        </Link>

                        <button onClick={info}>More Info</button>
                    </div>
                </div>

            </div>
            <div>

                <div className='movie telugu'>

                    <Link to="https://www.netflix.com/watch/82057638?trackId=253448517&tctx=4%2C1%2C76b25645-eef7-497e-863f-209f9bf09dbb-33291878%2CNES_E1A78B3445C4D129DCCB3DB36BEC37-A64A86483F8E63-6C577AB997_p_1764932142569%2CNES_E1A78B3445C4D129DCCB3DB36BEC37_p_1764932142569%2C%2C%2C%2C82057638%2CVideo%3A82057638%2CminiDpPlayButton">
                        <img className='poster' src='https://m.media-amazon.com/images/M/MV5BMTdiOTNhNjItMzk3ZC00YTBlLWE2YjQtZDQ4ZjYyOWNjZjA4XkEyXkFqcGc@._V1_.jpg' alt='stephen' />
                    </Link>

                    <Link to="https://www.netflix.com/watch/81332317?trackId=284616272&tctx=1%2C8%2C0067fc9b-9f57-48b0-8f3a-ebdd846b784c%2C0067fc9b-9f57-48b0-8f3a-ebdd846b784c%7C%3DeyJwYWdlSWQiOiIyODE4NmFiNy04NjBjLTQyM2YtOTVjYi0xN2FkNGY0NmZjMDcvMS8va3VyLzAvMCIsImxvY2FsU2VjdGlvbklkIjoiMiJ9%2C%2C%2C%2CtitlesResults%2C%2CVideo%3A81332317%2CdetailsPagePlayButton">
                        <img className='poster' src="https://i.pinimg.com/736x/ed/19/8e/ed198e93bd7f99da21d4a79a34e562a3.jpg" alt="kurup" />
                    </Link>

                    <Link to="https://www.netflix.com/watch/81721164?trackId=284616272&tctx=0%2C0%2C0a9c251f-2def-4461-a837-5a3cab1a0aff%2C0a9c251f-2def-4461-a837-5a3cab1a0aff%7C%3DeyJwYWdlSWQiOiIyODE4NmFiNy04NjBjLTQyM2YtOTVjYi0xN2FkNGY0NmZjMDcvMS8vcmR4LzAvMCIsImxvY2FsU2VjdGlvbklkIjoiMiJ9%2C%2C%2C%2CtitlesResults%2C%2CVideo%3A81721164%2CdetailsPagePlayButton">
                        <img className='poster' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/51e3b3173771815.64f16fa57bfa0.jpg" alt="rdx" />
                    </Link>

                    <Link to="https://www.netflix.com/watch/81914031?trackId=295084833&tctx=2%2C3%2C793501ea-a44a-4f33-a69e-c98553bd975b-98802780%2CNES_34CA3CFE7607F801F1D314FD4CB20E-71ACD286C4B130-8354208DCE_p_1765017215048%2CNES_34CA3CFE7607F801F1D314FD4CB20E_p_1765017215048%2C%2C%2C%2C%2CVideo%3A81914031%2CminiDpPlayButton">
                        <img className='poster' src="https://i.pinimg.com/736x/b8/80/a5/b880a5747b324ff1618dbbe43a847615.jpg" alt="goat life" />
                    </Link>

                    <Link to="https://www.netflix.com/watch/82095949?trackId=253788158&tctx=1%2C1%2C793501ea-a44a-4f33-a69e-c98553bd975b-98802780%2CNES_34CA3CFE7607F801F1D314FD4CB20E-6E4D0C463DB3F2-8354208DCE_p_1765017215048%2CNES_34CA3CFE7607F801F1D314FD4CB20E_p_1765017215048%2C%2C%2C%2C%2CVideo%3A82095949%2CminiDpPlayButton">
                        <img className='poster' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/441b9d226626183.6831a4ff81b61.jpg" alt="detective ujjwalan" />
                    </Link>

                    <Link to="https://www.netflix.com/watch/81564452?trackId=284616272&tctx=0%2C0%2Cd9877427-223b-4f5f-847f-bb88ecad2753%2Cd9877427-223b-4f5f-847f-bb88ecad2753%7C%3DeyJwYWdlSWQiOiIyODE4NmFiNy04NjBjLTQyM2YtOTVjYi0xN2FkNGY0NmZjMDcvMS8vY3VycnkgYW5kLzAvMCIsImxvY2FsU2VjdGlvbklkIjoiMiJ9%2C%2C%2C%2CtitlesResults%2C%2CVideo%3A81564452%2CdetailsPagePlayButton">
                        <img className='poster' src="https://m.media-amazon.com/images/M/MV5BYWZiZDk2M2UtY2RkOS00NDczLWJlYzUtYzUxNjcxMmUxY2Q1XkEyXkFqcGc@._V1_.jpg" alt="curry and cynide" />
                    </Link>

                    <Link to="https://www.netflix.com/watch/81477034?trackId=295084833&tctx=2%2C1%2C793501ea-a44a-4f33-a69e-c98553bd975b-98802780%2CNES_34CA3CFE7607F801F1D314FD4CB20E-71ACD286C4B130-8354208DCE_p_1765017215048%2CNES_34CA3CFE7607F801F1D314FD4CB20E_p_1765017215048%2C%2C%2C%2C81477034%2CVideo%3A81477034%2CminiDpPlayButton">
                        <img className='poster' src="https://m.media-amazon.com/images/M/MV5BZDg4ZGEwY2EtMmIwNy00NjZiLWI1ZDMtNGM2OWFkNDdhYzY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="jana gana mana" />
                    </Link>

                    <Link to="https://www.netflix.com/watch/81597698?trackId=253788158&tctx=1%2C4%2C793501ea-a44a-4f33-a69e-c98553bd975b-98802780%2CNES_34CA3CFE7607F801F1D314FD4CB20E-6E4D0C463DB3F2-8354208DCE_p_1765017215048%2CNES_34CA3CFE7607F801F1D314FD4CB20E_p_1765017215048%2C%2C%2C%2C81597698%2CVideo%3A81597698%2CminiDpPlayButton">
                        <img className='poster' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/cbi-5-the-brain-et00326887-19-04-2022-10-03-26.jpg" alt="cbi 5" />
                    </Link>

                    <Link to="https://www.netflix.com/watch/81752390?trackId=251166978&tctx=4%2C0%2C793501ea-a44a-4f33-a69e-c98553bd975b-98804272%2CNES_34CA3CFE7607F801F1D314FD4CB20E-E8D678784D9F39-8354208DCE_p_1765017215048%2CNES_34CA3CFE7607F801F1D314FD4CB20E_p_1765017215048%2C%2C%2C%2C81752390%2CVideo%3A81752390%2CminiDpPlayButton">
                        <img className='poster' src="https://m.media-amazon.com/images/M/MV5BNTMxMGY5NDctMTgzZi00NDcyLWIwNTItNTJmMDUzMWFlMDNhXkEyXkFqcGc@._V1_.jpg" alt="Rifle club" />
                    </Link>

                    <Link to="https://www.netflix.com/watch/81359795?trackId=253788158&tctx=1%2C3%2C793501ea-a44a-4f33-a69e-c98553bd975b-98802780%2CNES_34CA3CFE7607F801F1D314FD4CB20E-6E4D0C463DB3F2-8354208DCE_p_1765017215048%2CNES_34CA3CFE7607F801F1D314FD4CB20E_p_1765017215048%2C%2C%2C%2C81359795%2CVideo%3A81359795%2CminiDpPlayButton">
                        <img className='poster' src="https://a.ltrbxd.com/resized/film-poster/7/2/4/4/3/8/724438-irul-0-230-0-345-crop.jpg?v=9755b231a5" alt="irul" />
                    </Link>


                </div>
            </div>
            <Footer/>
        </>
    )
}
