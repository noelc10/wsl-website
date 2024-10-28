// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
    devtools: { enabled: false },
  },

  ssr: true,
  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: '%s %separator WSoft Labs',
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico'
        }
      ]
    }
  },

  runtimeConfig: {
    // apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      baseURL: process.env.NUXT_BASE_URL ?? 'http://localhost:3000',
      apiBase: process.env.NUXT_API_BASE ?? 'http://localhost:8000/api', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      apiUrl: process.env.NUXT_API_URL ?? 'http://localhost:8000',
    }
  },

  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**',
      'utils/**'
    ]
  },

  components: [
    {
      path: './components',
      extensions: ['.vue'],
      pathPrefix: false
    }
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-snackbar',
    'nuxt-icons',
    'nuxt-marquee',
    '@vee-validate/nuxt',
    'nuxt-aos',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    'nuxt-booster',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    [
      'nuxt-mail', {
        message: {
          to: process.env.NUXT_MAIL_TO,
        },
        smtp: {
          host: process.env.NUXT_MAIL_SMTP,
          port: process.env.NUXT_MAIL_PORT ?? 25,
          secure: process.env.NUXT_MAIL_SMTP_SECURE ?? false,
          auth: {
            user: process.env.NUXT_MAIL_USER,
            pass: process.env.NUXT_MAIL_PASSWORD,
          }
        },
      }
    ],
  ],

  build: {
    transpile: ['vue-countup-v3'],
  },

  tailwindcss: {
    cssPath: [
      '~/assets/scss/main.scss',
      {
        injectPosition: 'first'
      }
    ],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
    editorSupport: true
  },

  css: [
    "@/assets/scss/main.scss",
  ],

  snackbar: {
    top: true,
    right: true,
    duration: 5000
  },

  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  i18n: {
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en-US.js'
      },
      {
        code: 'kr',
        language: 'kr-KR',
        name: 'Korean',
        file: 'kr-KR.js'
      },
    ],
    defaultLocale: 'kr',
    lazy: true,
    langDir: 'lang',
    compilation: {
      strictMessage: false
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'wsoftlabs_i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
  },

  booster: {
    detection: {
      performance: true,
      browserSupport: true
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },
    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],
    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    },

    image: {
      providers:{
        customProvider:{
          name: 'assetsProvider',
          provider: '~/providers/assets-provider.ts', // must be created
          options:{
            // baseURL: "_nuxt/assets"
            baseURL: `${process.env.NUXT_BASE_URL ?? 'http://localhost:3000'}/_nuxt/assets`
          }
        }
      },
      provider: "assetsProvider",
    }
  },

  image: {
    providers:{
      customProvider:{
        name: 'assetsProvider',
        provider: '~/providers/assets-provider.ts', // must be created
        options:{
          // baseURL: "_nuxt/assets"
          baseURL: `${process.env.NUXT_BASE_URL ?? 'http://localhost:3000'}/_nuxt/assets`
        }
      }
    },
    // screens: {
    //   default: 320,
    //   xxs: 480,
    //   xs: 576,
    //   sm: 768,
    //   md: 996,
    //   lg: 1200,
    //   xl: 1367,
    //   xxl: 1600,
    //   '4k': 1921
    // },
    provider: "assetsProvider",
    // dir: "assets"
  },

  googleFonts: {
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      }
    },
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: true,
    overwriting: true,
  },

  compatibilityDate: '2024-10-14'
})
