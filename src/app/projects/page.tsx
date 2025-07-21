import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import AboutSection from '../../components/base/AboutSection/AboutSection'
import Footer from '../../components/base/Footer/Footer'
import Header from '../../components/base/Header/Header'
import Ukv from '../../components/base/Ukv/Ukv/Ukv'
import ImageComp from '../../components/image/ImageComp/ImageComp'

const prisma = new PrismaClient()

const getProjects = async (searchParams: {
  [key: string]: string | string[] | undefined
}) => {
  const paramValue = searchParams['q'] || ''

  const searchParam =
    typeof paramValue === 'string'
      ? paramValue
      : Array.isArray(paramValue) && paramValue.length > 0
        ? paramValue[0]
        : ''

  const projects = await prisma.project.findMany({
    where: searchParam
      ? {
          projectTags: {
            some: {
              projectTag: {
                title: {
                  contains: searchParam, // 文字列として扱う
                  mode: 'insensitive',
                },
              },
            },
          },
        }
      : {},
    orderBy: {
      id: 'asc',
    },
  })

  return { projects, searchParam }
}

const Projects = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const { projects } = await getProjects(searchParams)
  return (
    <div>
      <Header color="black" />
      <Ukv
        src="https://res.cloudinary.com/dvahtyhva/image/upload/v1753086619/IMG_1311_dbyieu.jpg"
        srcSp="https://res.cloudinary.com/dvahtyhva/image/upload/v1753088473/IMG_1309_kucyu3.jpg"
        itemsPage={false}
        title="Projects"
        imgPosition="object-[40%]"
        english="At KickBackStyles, we are dedicated to ‘Spreading Love to Everyone’ by connecting with people through pop-ups, projects, and events. To expand these activities, we also engage in crowdfunding initiatives."
        japanese="KickBackStylesは、『みんなに愛を届ける』という想いのもと、多くの方々とつながりながら、ポップアップやプロジェクト、イベントを開催しています。その活動を広げるために、クラウドファンディングにも取り組んでいます。"
      />
      <div className="ml-md mr-xl mt-3xl sm:hidden">
        <h2 className="mb-xl text-md">Projects</h2>
        <p className="mb-md leading-md">
          At KickBackStyles, we are dedicated to ‘Spreading Love to Everyone’ by
          connecting with people through pop-ups, projects, and events. To
          expand these activities, we also engage in crowdfunding initiatives.
        </p>
        <p className="mb-xl leading-md">
          KickBackStylesは、『みんなに愛を届ける』という想いのもと、多くの方々とつながりながら、ポップアップやプロジェクト、イベントを開催しています。その活動を広げるために、クラウドファンディングにも取り組んでいます。
        </p>
      </div>
      <div>
        <div className="flex w-full flex-col sm:flex-row sm:flex-wrap">
          {projects?.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.id}`}
              className={`relative block h-[100vw] w-full sm:h-5xl ${index === 0 || index === 5 ? 'sm:w-2/5' : index === 1 || index === 4 ? 'sm:w-3/5' : index === 2 || index === 3 ? 'sm:w-1/2' : ''}`}
            >
              <ImageComp
                src={`${project.thumbnailImageUrl}`}
                width={1000}
                height={1000}
                className="h-full w-auto object-cover brightness-90"
                alt={project.title}
              />
              <div className="absolute bottom-md left-sm sm:bottom-sm">
                <h3 className="mb-xxs font-bold tracking-wider text-white sm:mb-xxxs ">
                  {project.title}
                </h3>
                <p className="text-white sm:mb-xxxs">
                  {project.thumbnailContext}
                </p>
                <p className="flex items-center gap-xxs text-white sm:gap-xxxxs">
                  <span
                    className={`${project.location ? 'flex' : 'hidden'}  items-center gap-xxs`}
                  >
                    <span className="block size-sm sm:size-xxs">
                      <ImageComp
                        src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103639/Icon_awesome-map-pin_o9me3u.png"
                        width={40}
                        height={40}
                        className="h-full w-auto"
                        alt="map icon"
                      />
                    </span>
                    {project.location}{' '}
                  </span>
                  <span className={`${project.date ? 'flex' : 'hidden'} `}>
                    <span
                      className={`${!project.location && 'hidden'} ms:mx-xxxs mx-xxs`}
                    >
                      /{' '}
                    </span>
                    {project.date}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex h-5xl flex-col items-center justify-center sm:h-4xl">
          <div className="relative mb-xl size-2xl sm:mb-md sm:size-lg">
            <ImageComp
              src="https://res.cloudinary.com/dvahtyhva/image/upload/v1743103638/kbs_logo_wwedmt.png"
              width={200}
              height={200}
              alt="KickBackStyles logo"
              className="h-auto w-full"
            />
          </div>
          <h2 className="text-md text-black sm:text-md-pc">ComingSoon...!</h2>
        </div>
      </div>
      <AboutSection />
      <Footer />
    </div>
  )
}

export default Projects
