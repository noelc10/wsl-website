<script setup>
import { filename } from 'pathe/utils'

const route = useRoute()
const { t } = useI18n()

const project = ref(null)

const glob = import.meta.glob(`@/assets/images/our-works/*/*.webp`, { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)

const projectList = computed(() => {
  return [
    {
      id: 'academic-administration-management-system',
      type: 'web',
      title: t('academic-administration-management-system-title'),
      service_types: [
        t('Web Application Development'),
        t('UI Design')
      ],
      tools_used: [
        'Laravel',
        'Bootstrap'
      ],
      jumbotron_img: 'academic-administration-management-system-jumbotron',
      project_overview: t('academic-administration-management-system-overview'),
      content_header_img: 'academic-administration-management-system-content-header-img',
      contents: [
        {
          id: 1,
          title: t('academic-administration-management-system-content-1-title'),
          description: t('academic-administration-management-system-content-1-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 xl:pb-48 lg:pl-24 lg:pb-24 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'academic-administration-management-system-content-1-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-1 lg:col-span-7 md:col-span-11',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
        {
          id: 2,
          title: t('academic-administration-management-system-content-2-title'),
          description: t('academic-administration-management-system-content-2-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 xl:pt-32 lg:pr-56 lg:pt-32 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-2',
          img: 'academic-administration-management-system-content-2-img',
          img_wrapper_class: 'mt-4 row-span-1 col-span-12 self-center lg:mt-0 lg:row-span-full lg:col-start-5 md:col-start-3 md:col-span-11',
          img_figure_class: 'w-full flex-shrink-0 lg:float-right',
          img_class: 'w-auto h-auto',
          img_placement: 'right'
        },
        {
          id: 3,
          title: t('academic-administration-management-system-content-3-title'),
          description: t('academic-administration-management-system-content-3-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 xl:pb-24 lg:pl-24 lg:pb-8 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'academic-administration-management-system-content-3-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-1 lg:col-span-6 md:col-span-8',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
      ]
    },
    {
      id: 'content-management-system',
      type: 'web',
      title: t('content-management-system-title'),
      service_types: [
        t('Web Application Development'),
        t('UI Design')
      ],
      tools_used: [
        'Laravel',
        'Vue'
      ],
      jumbotron_img: 'content-management-system-jumbotron',
      project_overview: t('content-management-system-overview'),
      content_header_img: 'content-management-system-content-header-img',
      contents: [
        {
          id: 1,
          title: t('content-management-system-content-1-title'),
          description: t('content-management-system-content-1-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 xl:pb-48 lg:pl-24 lg:pb-24 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'content-management-system-content-1-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-1 lg:col-span-8 md:col-auto',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
        {
          id: 2,
          title: t('content-management-system-content-2-title'),
          description: t('content-management-system-content-2-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 xl:pb-32 lg:pr-56 lg:pb-32 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-2',
          img: 'content-management-system-content-2-img',
          img_wrapper_class: 'mt-4 row-span-1 col-span-12 self-center lg:mt-0 lg:row-span-full lg:col-start-5 md:col-start-3 md:col-span-11',
          img_figure_class: 'w-full flex-shrink-0 lg:float-right',
          img_class: 'w-auto h-auto',
          img_placement: 'right'
        },
        {
          id: 3,
          title: t('content-management-system-content-3-title'),
          description: t('content-management-system-content-3-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-40 xl:pl-32 xl:pb-48 lg:pl-24 lg:pb-24 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'content-management-system-content-3-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-1 lg:col-span-7 md:col-span-full',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
      ]
    },
    {
      id: 'youtube-content-learning-system',
      type: 'mobile',
      title: t('youtube-content-learning-system-title'),
      service_types: [
        t('Web Application Development'),
        t('UI Design')
      ],
      tools_used: [
        'Laravel',
        'Vue'
      ],
      jumbotron_img: 'youtube-content-learning-system-jumbotron',
      project_overview: t('youtube-content-learning-system-overview'),
      content_header_img: 'youtube-content-learning-system-content-header-img',
      contents: [
        {
          id: 1,
          title: t('youtube-content-learning-system-content-1-title'),
          description: t('youtube-content-learning-system-content-1-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 2xl:pl-48 xl:pl-40 xl:pb-80 lg:py-0 lg:pl-24 lg:pb-56 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-6',
          img: 'youtube-content-learning-system-content-1-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-span-7 lg:col-start-1',
          img_figure_class: 'pr-8 w-full flex-shrink-0 3xl:pr-0 xs:pr-12',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
        {
          id: 2,
          title: t('youtube-content-learning-system-content-2-title'),
          description: t('youtube-content-learning-system-content-2-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 2xl:pr-36 xl:pl-24 xl:pr-24 xl:pb-56 lg:py-0 lg:pl-24 lg:pr-24 lg:pb-56 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-2',
          img: 'youtube-content-learning-system-content-2-img',
          img_wrapper_class: 'mt-4 row-span-1 col-span-12 lg:mt-0 lg:row-span-full lg:col-span-6 lg:col-start-6',
          img_figure_class: 'pr-8 w-full flex-shrink-0 lg:float-right xs:pr-12',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'right'
        },
        {
          id: 3,
          title: t('youtube-content-learning-system-content-3-title'),
          description: t('youtube-content-learning-system-content-3-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 2xl:pl-36 xl:pl-24 xl:pb-48 lg:py-0 lg:pl-24 lg:pb-24 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-6',
          img: 'youtube-content-learning-system-content-3-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full xl:col-start-2 lg:col-span-6 lg:col-start-1',
          img_figure_class: 'pr-8 w-full flex-shrink-0 3xl:pr-0 xs:pr-20',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
      ]
    },
    {
      id: 'foreign-language-learning-system',
      type: 'mobile',
      title: t('foreign-language-learning-system-title'),
      service_types: [
        t('Web Application Development'),
        t('UI Design')
      ],
      tools_used: [
        'Laravel',
        'Vue'
      ],
      jumbotron_img: 'foreign-language-learning-system-jumbotron',
      project_overview: t('foreign-language-learning-system-overview'),
      content_header_img: 'foreign-language-learning-system-content-header-img',
      contents: [
        {
          id: 1,
          title: t('foreign-language-learning-system-content-1-title'),
          description: t('foreign-language-learning-system-content-1-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 2xl:pl-48 xl:pl-40 xl:pb-80 lg:py-0 lg:pl-24 lg:pb-56 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-6',
          img: 'foreign-language-learning-system-content-1-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-span-7 lg:col-start-1',
          img_figure_class: 'pr-8 w-full flex-shrink-0 3xl:pr-0 xs:pr-12',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
        {
          id: 2,
          title: t('foreign-language-learning-system-content-2-title'),
          description: t('foreign-language-learning-system-content-2-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 2xl:pr-36 xl:pl-24 xl:pr-24 xl:pb-56 lg:py-0 lg:pl-24 lg:pr-24 lg:pb-56 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-2',
          img: 'foreign-language-learning-system-content-2-img',
          img_wrapper_class: 'mt-4 row-span-1 col-span-12 lg:mt-0 lg:row-span-full lg:col-span-12 lg:col-start-2',
          img_figure_class: 'pr-8 w-full flex-shrink-0 lg:float-right xs:pr-12',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'right'
        },
        {
          id: 3,
          title: t('foreign-language-learning-system-content-3-title'),
          description: t('foreign-language-learning-system-content-3-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 2xl:pl-48 xl:pl-40 xl:pb-80 lg:py-0 lg:pl-24 lg:pb-56 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-6',
          img: 'foreign-language-learning-system-content-3-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-span-12 lg:col-start-1',
          img_figure_class: 'pr-8 w-full flex-shrink-0 xl:pr-0 xs:pr-12',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
      ]
    },
    {
      id: 'project-management-system',
      type: 'web',
      title: t('project-management-system-title'),
      service_types: [
        t('Web Application Development'),
        t('UI Design')
      ],
      tools_used: [
        'Laravel',
        'Vue'
      ],
      jumbotron_img: 'project-management-system-jumbotron',
      project_overview: t('project-management-system-overview'),
      content_header_img: 'project-management-system-content-header-img',
      contents: [
        {
          id: 1,
          title: t('project-management-system-content-1-title'),
          description: t('project-management-system-content-1-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 xl:pb-48 lg:pl-24 lg:pb-24 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'project-management-system-content-1-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-1 lg:col-span-11',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
        {
          id: 2,
          title: t('project-management-system-content-2-title'),
          description: t('project-management-system-content-2-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pr-48 xl:pr-40 xl:pt-16 lg:pr-24 lg:pt-16 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-2',
          img: 'project-management-system-content-2-img',
          img_wrapper_class: 'mt-4 row-span-1 col-span-12 self-center lg:mt-0 lg:row-span-full lg:col-start-5 md:col-start-3 md:col-span-11',
          img_figure_class: 'w-full flex-shrink-0 lg:float-right',
          img_class: 'w-auto h-auto',
          img_placement: 'right'
        },
        {
          id: 3,
          title: t('project-management-system-content-3-title'),
          description: t('project-management-system-content-3-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-32 xl:pb-16 lg:pl-32 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'project-management-system-content-3-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-1 lg:col-span-7 md:col-span-11',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
      ]
    },
    {
      id: 'ai-review-analyzer',
      type: 'web',
      title: t('ai-review-analyzer-title'),
      service_types: [
        t('Web Application Development'),
        t('UI Design')
      ],
      tools_used: [
        'Laravel',
        'Vue'
      ],
      jumbotron_img: 'ai-review-analyzer-jumbotron',
      project_overview: t('ai-review-analyzer-overview'),
      content_header_img: 'ai-review-analyzer-content-header-img',
      contents: [
        {
          id: 1,
          title: t('ai-review-analyzer-content-1-title'),
          description: t('ai-review-analyzer-content-1-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 xl:pb-32 lg:pl-24 lg:pb-24 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'ai-review-analyzer-content-1-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-span-7 lg:col-start-1 md:col-auto',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
        {
          id: 2,
          title: t('ai-review-analyzer-content-2-title'),
          description: t('ai-review-analyzer-content-2-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pr-36 xl:pr-48 xl:pt-32 lg:pr-48 lg:pt-32 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-2',
          img: 'ai-review-analyzer-content-2-img',
          img_wrapper_class: 'mt-4 row-span-1 col-span-12 self-center lg:mt-0 lg:row-span-full lg:col-start-5 md:col-start-3 md:col-span-11',
          img_figure_class: 'w-full flex-shrink-0 lg:float-right',
          img_class: 'w-auto h-auto',
          img_placement: 'right'
        },
        {
          id: 3,
          title: t('ai-review-analyzer-content-3-title'),
          description: t('ai-review-analyzer-content-3-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 xl:pb-24 lg:pl-24 lg:pb-8 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'ai-review-analyzer-content-3-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-span-6 lg:col-start-1 md:col-span-11',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
      ]
    },
    {
      id: 'ai-tarot-master',
      type: 'web',
      title: t('ai-tarot-master-title'),
      service_types: [
        t('Web Application Development'),
        t('UI Design')
      ],
      tools_used: [
        'Laravel',
        'Bootstrap'
      ],
      jumbotron_img: 'ai-tarot-master-jumbotron',
      project_overview: t('ai-tarot-master-overview'),
      content_header_img: 'ai-tarot-master-content-header-img',
      contents: [
        {
          id: 1,
          title: t('ai-tarot-master-content-1-title'),
          description: t('ai-tarot-master-content-1-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 xl:pb-48 lg:pl-24 lg:pb-56 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'ai-tarot-master-content-1-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-span-9 lg:col-start-1 md:col-span-11',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
        {
          id: 2,
          title: t('ai-tarot-master-content-2-title'),
          description: t('ai-tarot-master-content-2-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pr-36 xl:pr-40 xl:pt-0 lg:pr-32 lg:pt-0 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-2',
          img: 'ai-tarot-master-content-2-img',
          img_wrapper_class: 'mt-4 row-span-1 col-span-12 self-center lg:mt-0 lg:row-span-full lg:col-start-7 md:col-start-6',
          img_figure_class: 'w-full flex-shrink-0 lg:float-right',
          img_class: 'w-auto h-auto',
          img_placement: 'right'
        },
        {
          id: 3,
          title: t('ai-tarot-master-content-3-title'),
          description: t('ai-tarot-master-content-3-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 xl:pb-8 lg:pl-24 lg:pb-8 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'ai-tarot-master-content-3-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-span-6 lg:col-start-1 md:col-span-11',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
      ]
    },
    {
      id: 'data-crawling',
      type: 'web',
      title: t('data-crawling-title'),
      service_types: [
        t('Web Application Development'),
        t('UI Design')
      ],
      tools_used: [
        'Laravel',
        'Blade',
        'Bootstrap'
      ],
      jumbotron_img: 'data-crawling-jumbotron',
      project_overview: t('data-crawling-overview'),
      content_header_img: 'data-crawling-content-header-img',
      contents: [
        {
          id: 1,
          title: t('data-crawling-content-1-title'),
          description: t('data-crawling-content-1-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 2xl:pl-36 xl:pl-24 xl:pb-48 lg:pl-24 lg:pb-24 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'data-crawling-content-1-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-1 lg:col-span-10',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
        {
          id: 2,
          title: t('data-crawling-content-2-title'),
          description: t('data-crawling-content-2-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 2xl:pr-56 lg:pr-40 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-2',
          img: 'data-crawling-content-2-img',
          img_wrapper_class: 'mt-4 row-span-1 col-span-12 self-center lg:mt-0 lg:row-span-full lg:col-start-4',
          img_figure_class: 'w-full flex-shrink-0 lg:float-right',
          img_class: 'w-auto h-auto',
          img_placement: 'right'
        },
        {
          id: 3,
          title: t('data-crawling-content-3-title'),
          description: t('data-crawling-content-3-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 2xl:pl-36 xl:pl-24 xl:pb-16 lg:pl-24 lg:pb-8 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'data-crawling-content-3-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-1 lg:col-span-7 md:col-span-11',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
      ]
    },
    {
      id: 'dimple',
      type: 'web',
      title: t('dimple-title'),
      service_types: [
        t('Web Application Development'),
        t('UI Design')
      ],
      tools_used: [
        'Laravel',
        'Blade',
        'Bootstrap'
      ],
      jumbotron_img: 'dimple-jumbotron',
      project_overview: t('dimple-overview'),
      content_header_img: 'dimple-content-header-img',
      contents: [
        {
          id: 1,
          title: t('dimple-content-1-title'),
          description: t('dimple-content-1-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 xl:pb-48 lg:pl-24 lg:pb-24 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'dimple-content-1-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-1 lg:col-span-11',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
        {
          id: 2,
          title: t('dimple-content-2-title'),
          description: t('dimple-content-2-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pr-36 xl:pr-48 xl:pt-16 lg:pr-48 lg:pt-16 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-2',
          img: 'dimple-content-2-img',
          img_wrapper_class: 'mt-4 row-span-1 col-span-12 self-center lg:mt-0 lg:row-span-full lg:col-start-4',
          img_figure_class: 'w-full flex-shrink-0 lg:float-right',
          img_class: 'w-auto h-auto',
          img_placement: 'right'
        },
        {
          id: 3,
          title: t('dimple-content-3-title'),
          description: t('dimple-content-3-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 lg:pl-24 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'dimple-content-3-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-1 lg:col-span-6 md:col-span-8',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
      ]
    },
    {
      id: 'kokotalk',
      type: 'mobile',
      title: t('kokotalk-title'),
      service_types: [
        t('Web Application Development'),
        t('UI Design')
      ],
      tools_used: [
        'Laravel',
        'Vue'
      ],
      jumbotron_img: 'kokotalk-jumbotron',
      project_overview: t('kokotalk-overview'),
      content_header_img: 'kokotalk-content-header-img',
      contents: [
        {
          id: 1,
          title: t('kokotalk-content-1-title'),
          description: t('kokotalk-content-1-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pl-36 xl:pl-24 xl:pb-72 lg:pl-24 lg:pb-72 lg:w-full lg:row-span-full lg:col-span-5 lg:col-end-12',
          img: 'kokotalk-content-1-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full lg:col-start-2 lg:col-span-6',
          img_figure_class: 'w-full flex-shrink-0',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
        {
          id: 2,
          title: t('kokotalk-content-2-title'),
          description: t('kokotalk-content-2-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 lg:py-0 2xl:pr-36 xl:pr-0 xl:pb-72 lg:pr-0 lg:pb-72 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-3 lg:col-end-6',
          img: 'kokotalk-content-2-img',
          img_wrapper_class: 'mt-4 row-span-1 col-span-12 self-center lg:mt-0 lg:row-span-full lg:col-span-6 lg:col-start-4',
          img_figure_class: 'w-full flex-shrink-0 lg:float-right',
          img_class: 'w-auto h-auto',
          img_placement: 'right'
        },
        {
          id: 3,
          title: t('kokotalk-content-3-title'),
          description: t('kokotalk-content-3-description'),
          description_wrapper_class: 'row-span-1 col-span-12 py-0 mx-auto w-11/12 self-center z-0 2xl:pl-36 xl:pl-24 xl:pb-48 lg:py-0 lg:pl-24 lg:pb-24 lg:w-full lg:row-span-full lg:col-span-6 lg:col-start-6',
          img: 'kokotalk-content-3-img',
          img_wrapper_class: 'row-span-1 col-span-12 self-center lg:row-span-full xl:col-start-2 lg:col-span-6 lg:col-start-1',
          img_figure_class: 'pr-8 w-full flex-shrink-0 3xl:pr-0 xs:pr-20',
          img_class: 'object-scale-down w-auto h-auto',
          img_placement: 'left'
        },
      ]
    }
  ]
})

watch(
  () => route,
  (val) => {
    const data = projectList.value.find(item => {
      return item.id === val.params.project_name
    })

    if (data) {
      project.value = data
    } else {
      throw showError({
        statusCode: 404,
        fatal: true,
        message: "Page not found"
      })
    }
  },
  {
    immediate: true,
  }
)

</script>

<template>
  <Jumbotron class="pb-0">
    <div class="mt-20 mb-8 flex flex-col mx-auto max-w-full w-11/12 xl:mt-48 2xl:mt-56 3xl:mt-64 3xl:w-10/12 4xl:mt-64 4xl:max-w-7xl 5xl:mt-80">
      <h1 data-aos="fade-down" data-aos-duration="1000" class="py-2 text-5xl font-bold text-black">
        {{ project.title }}
      </h1>
      <div class="mt-12 mb-1 max-w-full w-full 4xl:max-w-7xl text-sm font-light">
        <div data-aos="fade-up" data-aos-duration="1000" class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h5 class="text-lg font-semibold">{{ $t('Service Type') }}</h5>
            <ul class="mt-4 ml-8 list-disc">
              <li v-for="(service_type, i) in project.service_types" :key="i">
                {{ service_type }}
              </li>
            </ul>
          </div>
          <div>
            <h5 class="text-lg font-semibold">{{ $t('Tools Used') }}: </h5>
            <div class="mt-4 grid grid-flow-row auto-cols-max gap-4 sm:grid-flow-col">
              <span v-for="tool_used in project.tools_used">
                <NuxtIcon v-show="tool_used === 'Laravel'" filled class="tech-stack-icon" name="our-works/devicon_laravel" />
                <NuxtIcon v-show="tool_used === 'Vue'" filled class="tech-stack-icon" name="our-works/devicon_vuejs" />
                <NuxtIcon v-show="tool_used === 'Bootstrap'" filled class="tech-stack-icon" name="our-works/devicon_bootstrap" />
                <NuxtIcon v-show="tool_used === 'Blade'" filled class="tech-stack-icon" name="our-works/blade_ui_kit" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid gap-x-5 gap-y-5 grid-cols-1 content-evenly place-content-evenly justify-evenly place-items-center mx-auto max-w-full w-11/12 4xl:max-w-7xl text-[#494949]">
      <div data-aos="fade-up" data-aos-duration="1500" class="card h-full w-auto border-[24px] border-[#3D3D3D] rounded-3xl">
        <figure class="bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] rounded-3xl">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="65dvh"
            loading="lazy"
            class="h-auto w-auto lg:h-[65dvh]"
            :src="`/images/our-works/${route.params.project_name}/${project.jumbotron_img.toLowerCase()}.webp`"
            :alt="`Our Works - ${project.title}`"
          />
        </figure>
      </div>
      <div class="mt-8 w-full card flex flex-col xl:w-9/12 lg:flex-row">
        <div class="w-full mb-8 lg:w-3/12">
          <h3 class="text-2xl font-bold">Project Overview</h3>
        </div>
        <div class="w-full lg:w-9/12">
          <div class="font-light" v-html="project.project_overview"></div>
        </div>
      </div>
    </div>
  </Jumbotron>

  <div class="bg-gradient-to-r from-[#FAFDFF] to-[#DCE8F1] bg-opacity-10">
    <div v-show="project.type === 'web'" class="py-0 w-full bg-[url('@/assets/images/our-works/our-works-content-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div data-aos="zoom-in" data-aos-duration="1000" class="flex flex-col mx-auto w-full text-center text-white 4xl:max-w-7xl">
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="20dvh"
            loading="lazy"
            class="w-screen h-[18dvh] sm:h-auto"
            :src="`/images/our-works/${route.params.project_name}/${project.content_header_img.toLowerCase()}.webp`"
            alt="Content Header"
          />
        </figure>
      </div>

      <div v-for="content in project.contents">
        <div v-show="content.img_placement === 'left'" :class="project.contents.length === content.id ? 'mb-0' : 'mb-24'" class="mt-4 w-full 4xl:mx-auto 4xl:max-w-7xl lg:mb-0">
          <div class="grid justify-items-center lg:grid-cols-12 lg:justify-items-start">
            <div data-aos="fade-right" data-aos-duration="1000" :class="content.img_wrapper_class">
              <figure :class="content.img_figure_class">
                <NuxtImg
                  preload
                  format="webp"
                  fit="outside"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  :class="content.img_class"
                  :src="`/images/our-works/${route.params.project_name}/${content.img}.webp`"
                  :alt="`Content ${content.id}`"
                />
              </figure>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" :class="content.description_wrapper_class">
              <div class="mb-2">
                <h1 class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
                  {{ content.title }}
                </h1>
              </div>
              <p class="my-4 text-base font-light lg:pr-16">
                {{ content.description }}
              </p>
            </div>
          </div>
        </div>
        
        <div v-show="content.img_placement === 'right'" :class="project.contents.length === content.id ? 'mb-0' : 'mb-24'" class="mt-4 w-full 4xl:mx-auto 4xl:max-w-7xl lg:mb-0">
          <div class="grid justify-items-center lg:grid-cols-12 lg:justify-items-start">
            <div data-aos="fade-right" data-aos-duration="1000" :class="content.description_wrapper_class">
              <div class="mb-2">
                <h1 class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
                  {{ content.title }}
                </h1>
              </div>
              <p class="my-4 text-base font-light">
                {{ content.description }}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" :class="content.img_wrapper_class">
              <figure :class="content.img_figure_class">
                <NuxtImg
                  preload
                  format="webp"
                  fit="outside"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  :class="content.img_class"
                  :src="`/images/our-works/${route.params.project_name}/${content.img}.webp`"
                  :alt="`Content ${content.id}`"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="project.type === 'mobile'" class="py-4 w-full bg-[url('@/assets/images/our-works/our-works-content-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div data-aos="zoom-in" data-aos-duration="1000" class="flex flex-col mx-auto w-full text-center text-white 3xl:max-w-7xl">
        <figure class="mr-4 xl:mr-20 lg:mr-14 md:mr-10 2xs:mr-6">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-full h-auto"
            :src="`/images/our-works/${route.params.project_name}/${project.content_header_img.toLowerCase()}.webp`"
            alt="Content Header"
          />
        </figure>
      </div>

      <div v-for="content in project.contents">
        <div v-show="content.img_placement === 'left'" :class="project.contents.length === content.id ? 'mb-0' : 'mb-24'" class="mt-4 w-full 3xl:mx-auto 3xl:max-w-7xl lg:mb-0">
          <div class="grid justify-items-center lg:grid-cols-12 lg:justify-items-start">
            <div data-aos="fade-right" data-aos-duration="1000" :class="content.img_wrapper_class">
              <figure :class="content.img_figure_class">
                <NuxtImg
                  preload
                  format="webp"
                  fit="outside"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  :class="content.img_class"
                  :src="`/images/our-works/${route.params.project_name}/${content.img}.webp`"
                  :alt="`Content ${content.id}`"
                />
              </figure>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" :class="content.description_wrapper_class">
              <div class="mb-2">
                <h1 class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
                  {{ content.title }}
                </h1>
              </div>
              <p class="my-4 text-base font-light">
                {{ content.description }}
              </p>
            </div>
          </div>
        </div>

        <div v-show="content.img_placement === 'right'" :class="project.contents.length === content.id ? 'mb-0' : 'mb-24'" class="mt-4 w-full 3xl:mx-auto 3xl:max-w-7xl lg:mb-0">
          <div class="grid justify-items-center lg:grid-cols-12 lg:justify-items-start">
            <div data-aos="fade-right" data-aos-duration="1000" :class="content.description_wrapper_class">
              <div class="mb-2">
                <h1 class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
                  {{ content.title }}
                </h1>
              </div>
              <p class="my-4 text-base font-light">
                {{ content.description }}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" :class="content.img_wrapper_class">
              <figure :class="content.img_figure_class">
                <NuxtImg
                  preload
                  format="webp"
                  fit="outside"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  :class="content.img_class"
                  :src="`/images/our-works/${route.params.project_name}/${content.img}.webp`"
                  :alt="`Content ${content.id}`"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <ContactUsCtaSection />
</template>

<style scoped lang="scss">
:deep(.nuxt-icon.tech-stack-icon) {
  height: 80px !important;
  width: 80px !important;

  svg {
    height: 80px !important;
    width: 80px !important;
  }
}
</style>
