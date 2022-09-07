export const RouteVariables = {
  HOME_ROUTE: () => '/' as const,
  CATALOG_ROUTE: () => '/catalog' as const,
  SHIPPING_PAYMENT_ROUTE: () => '/shipping-and-payment' as const,
  NEWS_ROUTE: () => '/news' as const,
  ABOUT_ROUTE: () => '/about' as const,
  CONTACTS_ROUTE: () => '/contacts' as const,
  PRIVACY_POLICY_ROUTE: () => '/privacy-policy' as const,
  SOGLASHENIE_ROUTE: () => '/soglashenie' as const,
  VAKANSII_ROUTE: () => '/vakansii' as const,

  ARTICLES_ROUTE: () => `${RouteVariables.NEWS_ROUTE}/articles` as const,
  ONE_POST_ROUTE: () => `${RouteVariables.NEWS_ROUTE}/:id` as const,

  UPLOTNITELI_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/uplotniteli` as const,
  PROFIL_PVC_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/profil-pvc` as const,
  SPREADERS_FOR_LED_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/spreaders-for-led` as const,

  DLYA_NATYAZHNYH_POTOLKOV_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/dlya-natyazhnyh-potolkov` as const,
  DLYA_ALYUMINIEVYH_KONSTRUKCI_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/dlya-alyuminievyh-konstrukci` as const,
  DLYA_IZGOTOVLENIYA_MEBELI_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/dlya-izgotovleniya-mebeli` as const,
  DLYA_MEZHKOMNATNYH_DVEREJ_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/dlya-mezhkomnatnyh-dverej` as const,
  DLYA_OKON_PVC_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/dlya-okon-pvc` as const,
  DLYA_DEREVYANNYH_OKON_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/dlya-derevyannyh-okon` as const,
  DLYA_STEKLA_I_POLIKARBONA_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/dlya-stekla-i-polikarbona` as const,
  UNCATEGORIZED_ROUTE: () => `${RouteVariables.CATALOG_ROUTE}/uncategorized` as const,
}

export type RouteVariablesTypes = ReturnType<typeof RouteVariables[keyof typeof RouteVariables]>