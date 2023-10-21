import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className='box-border w-[650px] '>
    <header className='w-[650px] h-[70px] bg-white'>
    </header>
    <section className='w-[650px] h-[400px] bg-white'>
        <img src="images/logo.png" alt="logo-image" className='w-[650px] h-[400px]'/>
    </section>
    <section className='w-[650px] h-[135px] bg-white'>
        <div className='text-center'>
            <h1 className='text-[37px] font-semibold p-[10px]'>피자헛 홍대점</h1>
            <div className='w-[650px] h-[100px]'>
                <div className='w-[120px] h-[35px] bg-black rounded-[30px] inline-block relative'>
                    <img src="images/emoticon-1.png"className='w-[20px] block m-[10px] top-[-2px] absolute'/>
                    <div className='absolute text-white left-[33px] top-[6px]'>시원하다</div>
                </div>
                <div className='w-[110px] h-[35px] bg-black rounded-[30px] inline-block relative ml-2 mr-2'>
                    <img src="images/emoticon-1.png"className='w-[20px] block m-[10px] top-[-2px] absolute'/>
                    <div className='absolute text-white left-[33px] top-[6px]'>시원하다</div>
                </div>
                <div className='w-[110px] h-[35px] bg-black rounded-[30px] inline-block relative'>
                    <img src="images/emoticon-2.png"className='w-[20px] block m-[10px] top-[-2px] absolute'/>
                    <div className='absolute text-white left-[33px] top-[6px]'>푸짐한 양</div>
                </div>
            </div>
        </div>
    </section>
            <div className='w-[650px] h-[10px] bg-slate-200 shadow-inner'></div>
    <section className='w-[650px] h-[500px] text-center bg-white'>
    <br />
        <div className='text-slate-400'>각 영역을 선택하여 쉽게 편집하실 수 있습니다.</div>
        <br />
        <div className='border border-slate-600 border-solid w-[250px] h-[120px] rounded text-center relative inline-block mr-[10px]'>
            <img src="images/icon-call.png" className='absolute left-[100px] top-[20px] w-[50px]'/>
            <a href='tel:01012345678' className='text-slate-600 absolute left-[72px] top-[70px] hover:text-[#1e90ff] hover:underline '>010-1234-5678</a>
        </div>
        <div className='border border-slate-600 border-solid w-[250px] h-[120px] rounded text-center relative inline-block'>
            <img src="images/icon-location.png" className='absolute left-[100px] top-[20px] w-[50px]'/>
            <a href='https://map.naver.com/p/entry/place/1059570160?lng=126.9146825&lat=37.5546188&placePath=%2Fhome%3Fentry%3Dpll&c=15.00,0,0,0,dh' target="_blank" className= 'w-[190px] text-slate-600 absolute left-[32px] top-[70px] hover:text-[#1e90ff] hover:underline overflow-hidden whitespace-nowrap text-ellipsis hover:inline-flex hover:w-[230px]'>서울특별시 마포구 동교로 114</a>
        </div>
        <div className='border border-slate-600 border-solid w-[250px] h-[120px] rounded text-center relative inline-block mr-[10px]'>
            <img src="images/icon-clock.png" className='absolute left-[100px] top-[20px] w-[50px]'/>
            <div className= 'w-[150px] text-slate-600 absolute left-[55px] top-[70px] overflow-hidden whitespace-nowrap text-ellipsis hover:block hover:w-[220px] hover:h-[72px] hover:whitespace-pre-wrap'>매일 11:00 - 23:00 / 22:30  라스트오더 - 매장별 상세 영업 시간은 상이할 수 있습니다.</div>
        </div>
        <div className='border border-slate-600 border-solid w-[250px] h-[120px] rounded  text-center relative inline-block'>
            <img src="images/icon-web.png" className='absolute left-[100px] top-[20px] w-[50px]'/>
            <a href='http://www.pizzahut.co.kr/' target="_blank" className= 'w-[190px] text-slate-600 absolute left-[32px] top-[70px] hover:text-[#1e90ff] hover:underline'>http://www.pizzahut.co.kr/</a>
        </div>
        <div className='border border-slate-600 border-solid w-[250px] h-[120px] rounded text-center relative inline-block mr-[10px] mb-[50px]'>
            <img src="images/icon-reels.png" className='absolute left-[100px] top-[20px] w-[50px]'/>
            <a href='#none' className='text-slate-600 absolute left-[100px] top-[70px] hover:text-[#1e90ff] hover:underline '>얼루가</a>
        </div>
        <div className='border border-slate-600 border-solid w-[250px] h-[120px] rounded text-center relative inline-block mb-[50px]'>
            <img src="images/mdi-hand-coin-outline.png" className='absolute left-[100px] top-[20px] w-[50px]'/>
            <a href='#none' className='text-slate-600 absolute left-[95px] top-[70px] hover:text-[#1e90ff] hover:underline '>후불결제</a>
        </div>

    <div className='w-[650px] h-[2px] bg-slate-200 shadow-inner'></div>
    </section>
    <section className='w-[650px] h-[150px] bg-white'>
        <ul className='list-none flex justify-between text-center'>
            <li className='m-auto mt-[30px]'>
                <a href="#none">
                    <img src="images/icon-main.png" alt="home" className='w-[50px]'/>
                    홈
                </a>
            </li>
            <li className='m-auto mt-[30px]'>
                <a href="#none" className='text-slate-600'>
                    <img src="images/tabler-list.png" alt="home" className='w-[50px]'/>
                    메뉴관리
                </a>
            </li>
            <li className='m-auto mt-[30px]'> 
                <a href="#none" className='text-slate-600'>
                    <img src="images/icon_review.png" alt="home" className='w-[50px]'/>
                    리뷰관리
                </a>
            </li>
            <li className='m-auto mt-[30px]'> 
                <a href="#none" className='text-slate-600'>
                    <img src="images/arcticons-storytel.png" alt="home" className='w-[50px]'/>
                    소식관리
                </a>
            </li>
        </ul>
    </section>
  </div>)
}
