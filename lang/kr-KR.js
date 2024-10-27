import common from '@/lang/fragments/ko/common'
import header from '@/lang/fragments/ko/header'
import footer from '@/lang/fragments/ko/footer'
import home from '@/lang/fragments/ko/home'
import techStackUsed from '@/lang/fragments/ko/tech-stack-used'
import contactUs from '@/lang/fragments/ko/contact-us'
import aboutUs from '@/lang/fragments/ko/about-us'
import services from '@/lang/fragments/ko/services'
import ourWorks from '@/lang/fragments/ko/our-works'
import projects from '@/lang/fragments/ko/projects'
import privacyPolicy from '@/lang/fragments/ko/privacy-policy'

export default defineI18nLocale(async locale => {
  return {
    ...common,
    ...header,
    ...footer,
    ...home,
    ...techStackUsed,
    ...contactUs,
    ...aboutUs,
    ...services,
    ...ourWorks,
    ...projects,
    ...privacyPolicy,
  }
})
