import { PrismaClient } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import AboutSection from '../../components/base/AboutSection/AboutSection'
import Footer from '../../components/base/Footer/Footer'
import Header from '../../components/base/Header/Header'
import Ukv from '../../components/base/Ukv/Ukv/Ukv'

const prisma = new PrismaClient()

const getProjects = async (searchParams: {
  [key: string]: string | string[] | undefined
}) => {
  const paramValue = searchParams['q'] || ''
  // string型に絞り込む
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
        src="IMG_1311.JPG"
        srcSp="IMG_1311_SP.JPG"
        itemsPage={false}
        title="Projects"
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
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.id}`}
              className={`relative block h-[100vw] w-full sm:h-5xl ${index === 0 || index === 5 ? 'sm:w-2/5' : index === 1 || index === 4 ? 'sm:w-3/5' : index === 2 || index === 3 ? 'sm:w-1/2' : ''}`}
            >
              <Image
                src={`/${project.thumbnailImageUrl}`}
                fill
                style={{ objectFit: 'cover' }}
                alt={project.title}
              />
              <div className="absolute bottom-md left-sm sm:bottom-sm">
                <h3 className="mb-xxs font-bold tracking-wider text-white sm:mb-xxxs ">
                  {project.title}
                </h3>
                <p className="text-white sm:mb-xxxs">
                  {project.thumbnailContext}
                </p>
                <p
                  className={` ${project.location === null ? 'hidden' : 'flex'} items-center gap-xxs text-white sm:gap-xxxxs`}
                >
                  <span className="size-sm sm:size-xxs">
                    <Image
                      src="/Icon awesome-map-pin.png"
                      width={40}
                      height={40}
                      className="h-full w-auto"
                      alt="map icon"
                    />
                  </span>
                  {project.location}{' '}
                  <span
                    className={`${!project.date && 'hidden'} ms:mx-xxxs mx-xxs`}
                  >
                    /
                  </span>{' '}
                  {project.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <AboutSection />
      <Footer />
    </div>
  )
}

export default Projects
