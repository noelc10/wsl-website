import common from '@/lang/fragments/en/common'
import header from '@/lang/fragments/en/header'
import footer from '@/lang/fragments/en/footer'
import home from '@/lang/fragments/en/home'
import techStackUsed from '@/lang/fragments/en/tech-stack-used'
import contactUs from '@/lang/fragments/en/contact-us'
import aboutUs from '@/lang/fragments/en/about-us'
import services from '@/lang/fragments/en/services'
import ourWorks from '@/lang/fragments/en/our-works'
import projects from '@/lang/fragments/en/projects'
import privacyPolicy from '@/lang/fragments/en/privacy-policy'

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
