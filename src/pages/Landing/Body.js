import React from 'react'
import InviteOnlyLandingImage from '../../assets/invite_only_landing.svg'
import HangingOutEasyLandingImage from '../../assets/hanging_out_easy_landing.svg'
import FandomLandingImage from '../../assets/fandom_landing.svg'
import JustChilingLandingImage from '../../assets/just_chiling_landing.svg'
import TinyStarsLandingImage from '../../assets/tiny_stars_landing.svg'

export default function Footer() {
  return (
    <div className='flex flex-col'>
      <div className='flex md:flex-row justify-center items-center sm:my-28 my-18 px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <InviteOnlyLandingImage className='w-11/12 md:w-5/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12' />
          <div className='w-11/12 md:w-5/12 lg:w-4/12  xl:w-2/6 2xl:w-2/6 md:ml-20 '>
            <h1 className='text-left md:text-5xl text-xl leading-8 font-bold tracking-tight md:leading-13 md:mt-0 mt-8'>
              나만을 위한 초대 전용 공간을 만들어보세요
            </h1>
            <p className='mt-4 text-left md:text-lg text-base text-discord-notQuiteDark'>
              Discord 서버는 주제 기반 채널로 나뉩니다. 단체방에서도 혼잡함 없이 협동하고, 공유하고, 편하게 이야기를 나눌 수 있어요.
            </p>
          </div>
        </div>
      </div>

      <div className='flex  justify-center items-center bg-discord-openGray'>
        <div className='flex flex-col md:flex-row justify-center items-center sm:my-28 my-18 px-4'>
          <div className='w-11/12 md:w-5/12 lg:w-4/12   xl:w-2/6 2xl:w-2/6  '>
            <h1 className='text-left md:text-5xl text-xl leading-8 font-bold tracking-tight md:leading-13 md:mt-0 mt-8'>
              누구나 쉽게 어울릴 수 있는 곳
            </h1>
            <p className='mt-4 text-left text-base text-discord-notQuiteDark'>
              모처럼 한가하다면 음성 채널에 들어가 보세요. 전화를 걸 필요 없이 입장과 동시에 서버에 있는 친구들과 대화를 나눌 수 있답니다.
            </p>
          </div>
          <HangingOutEasyLandingImage className=' md:ml-20 w-11/12 md:w-5/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12' />
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center sm:my-28 my-18 px-4'>
        <FandomLandingImage className='w-11/12 md:w-5/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12' />
        <div className='w-11/12 md:w-5/12 lg:w-4/12  xl:w-2/6 2xl:w-2/6  md:ml-20 '>
          <h1 className='text-left md:text-5xl text-xl leading-8 font-bold tracking-tight md:leading-13 md:mt-0 mt-8'>
            소규모 모임에서 팬덤까지
          </h1>
          <p className='mt-4 text-left text-base text-discord-notQuiteDark'>
            어느 커뮤니티라도 운영할 수 있는 관리 도구가 주어지며, 멤버의 권한도 지정할 수 있어요. 멤버에게 특별한 권한을 주거나, 비공개 채널을 만들어보세요.
          </p>
        </div>
      </div>

      <div className='flex  justify-center items-center bg-discord-openGray px-4 py-1'>
        <div className='flex flex-1 flex-col justify-center items-center sm:my-18 my-14 p-2 sm:p-4'>
          <div className='flex flex-col justify-center items-center p-1 sm:p-6'>
            <h1 className='text-left md:text-5xl text-3xl leading-8 font-bold tracking-tight md:leading-13 md:mt-0 mt-6'>
              친밀감을 위한 신뢰도 높은 기술
            </h1>
            <p className='w-full md:w-9/12 px-2 sm:px-4 mt-8 md:text-center text-left text-base text-discord-notQuiteDark '>
              저지연 음성과 영상 채팅을 이용하면 꼭 한 공간에 있는 것 같답니다. 영상으로 인사하거나, 친구들의 게임 스트리밍을 보거나, 화면 공유로 함께 그림을 그릴 수도 있죠.
            </p>
          </div>

          <JustChilingLandingImage className='w-10/12' />
          <TinyStarsLandingImage className='w-full sm:w-85 mt-10 mx-4' />
          <h2 className='text-center  text-4xl font-bold tracking-tight leading-13'>
            이제 시작해볼까요?
          </h2>
          <a
            href='#'
            className='w-full sm:w-85 md:w-72 flex justify-center items-center bg-discord-indigo hover:bg-discord-experiment500Hover hover:shadow-md  text-white py-4 px-6 mt-10 rounded-full text-lg'
          >
            <span className='inline-block mx-2'>
              <svg className='fill-current w-7 h-7 pt-1' viewBox='0 0 24 24'>
                <g fill='currentColor'>
                  <path d='M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z'></path>
                  <path d='M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z'></path>
                </g>
              </svg>
            </span>
            <span>Download for Mac</span>
          </a>
        </div>
      </div>
    </div>
  )
}
