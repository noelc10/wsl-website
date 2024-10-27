import { useForm } from 'vee-validate'
import * as yup from 'yup'

export function useContactUs () {
  const mail = useMail()
  const snackbar = useSnackbar()
  const { t } = useI18n()

  const { defineField, errors, meta, isSubmitting, isValidating, handleSubmit } = useForm({
    validationSchema: yup.object({
      fullName: yup.string().required(t('full-name-field-required')),
      email: yup.string().required(t('email-address-field-required')).email(t('email-address-field-valid-email')),
      phoneNumber: yup.string().required(t('phone-number-field-required')).default('').matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gmi, { message: t('phone-number-field-valid-phone'), excludeEmptyString: true }),
      company: yup.string().optional().default(''),
      message: yup.string().required(t('message-field-required')).min(3, t('message-field-min-char-required')),
    }),
  })
  
  const [fullName, fullNameAttrs] = defineField('fullName')
  const [email, emailAttrs] = defineField('email')
  const [phoneNumber, phoneNumberAttrs] = defineField('phoneNumber')
  const [company, companyAttrs] = defineField('company')
  const [message, messageAttrs] = defineField('message')
  
  const loading = isSubmitting.value || ref(false)
  const submitDisabled = computed(() => isSubmitting.value || isValidating.value || !meta.value.valid)
  
  const submitEmail = handleSubmit(async (values, { resetForm }) => {
    loading.value = true
  
    await mail.send({
      from: email.value,
      subject: 'W SOFT Labs Website Contact Us - Inquries/Queries/etc.',
      text: `
        Full Name: ${fullName.value} (${email.value})\n
        Phone Number: ${phoneNumber.value}\n
        Company: ${company.value}\n
        \n\n
        ${message.value}
      `,
    }).then(() => {
      resetForm()
  
      snackbar.add({
        type: 'success',
        title: ' ',
        text: t('message-sent-success')
      })
    }).catch((e) => {
      snackbar.add({
        type: 'error',
        title: ' ',
        text: t('message-sent-error')
      })
    })
  
    loading.value = false
  })

  return {
    mail,
    snackbar,

    defineField,
    errors,
    meta,
    isSubmitting,
    isValidating,
    handleSubmit,

    fullName, fullNameAttrs,
    email, emailAttrs,
    phoneNumber, phoneNumberAttrs,
    company, companyAttrs,
    message, messageAttrs,

    loading,
    submitDisabled,

    submitEmail
  }
}
