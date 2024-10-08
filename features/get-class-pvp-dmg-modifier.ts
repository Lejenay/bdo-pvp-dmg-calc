export type ClassName =
  | "warrior"
  | "ranger"
  | "sorceress"
  | "berserker"
  | "tamer"
  | "musa"
  | "maehwa"
  | "valkyrie"
  | "kunoichi"
  | "ninja"
  | "wizard"
  | "witch"
  | "mystic"
  | "striker"
  | "lahn"
  | "archer"
  | "dk"
  | "shai"
  | "guardian"
  | "hashashin"
  | "nova"
  | "sage"
  | "corsair"
  | "drakania"
  | "woosa"
  | "maegu"
  | "scholar"
  | "dosa";

const pvpDamageModifiers: Record<ClassName, Record<ClassName, number>> = {
  warrior: {
    warrior: 1.0553,
    ranger: 1.0553,
    sorceress: 1.0553,
    berserker: 1.0066,
    tamer: 1.0553,
    musa: 1.0553,
    maehwa: 1.0553,
    valkyrie: 0.9741,
    kunoichi: 1.0553,
    ninja: 1.0553,
    wizard: 1.0553,
    witch: 1.0553,
    mystic: 1.0066,
    striker: 1.0066,
    lahn: 1.0553,
    archer: 1.0553,
    dk: 1.0553,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 1.039,
    nova: 0.9741,
    sage: 1.0553,
    corsair: 0.9903,
    drakania: 1.0553,
    woosa: 1.0553,
    maegu: 1.0025,
    scholar: 1.0553,
    dosa: 1.0553,
  },
  ranger: {
    warrior: 0.9091,
    ranger: 1.0553,
    sorceress: 0.9903,
    berserker: 0.9416,
    tamer: 0.9903,
    musa: 0.9903,
    maehwa: 0.9903,
    valkyrie: 0.9091,
    kunoichi: 0.9903,
    ninja: 0.9903,
    wizard: 0.9903,
    witch: 0.9903,
    mystic: 0.9416,
    striker: 0.9416,
    lahn: 0.9903,
    archer: 0.9903,
    dk: 0.9903,
    shai: 1.0228,
    guardian: 0.9903,
    hashashin: 0.9741,
    nova: 0.8604,
    sage: 0.9903,
    corsair: 0.9903,
    drakania: 0.9903,
    woosa: 0.9903,
    maegu: 0.9408,
    scholar: 1.0553,
    dosa: 0.9903,
  },
  sorceress: {
    warrior: 1.0228,
    ranger: 1.104,
    sorceress: 1.0553,
    berserker: 1.0553,
    tamer: 1.104,
    musa: 1.104,
    maehwa: 1.104,
    valkyrie: 1.0228,
    kunoichi: 1.104,
    ninja: 1.104,
    wizard: 1.104,
    witch: 1.104,
    mystic: 0.9741,
    striker: 0.9741,
    lahn: 1.104,
    archer: 1.104,
    dk: 1.104,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 1.0066,
    nova: 1.0553,
    sage: 1.0553,
    corsair: 1.0553,
    drakania: 1.0553,
    woosa: 1.0553,
    maegu: 1.0488,
    scholar: 1.0228,
    dosa: 1.104,
  },
  berserker: {
    warrior: 1.0877,
    ranger: 1.1851,
    sorceress: 1.1851,
    berserker: 1.0553,
    tamer: 1.1364,
    musa: 1.1851,
    maehwa: 1.1851,
    valkyrie: 1.104,
    kunoichi: 1.1851,
    ninja: 1.1851,
    wizard: 1.1851,
    witch: 1.1851,
    mystic: 1.0553,
    striker: 1.0553,
    lahn: 1.1851,
    archer: 1.1851,
    dk: 1.1851,
    shai: 1.1364,
    guardian: 1.0877,
    hashashin: 1.0715,
    nova: 1.0715,
    sage: 1.1851,
    corsair: 1.1364,
    drakania: 1.0877,
    woosa: 1.1851,
    maegu: 1.1259,
    scholar: 1.0877,
    dosa: 1.1851,
  },
  tamer: {
    warrior: 1.0877,
    ranger: 1.1689,
    sorceress: 1.1689,
    berserker: 1.1202,
    tamer: 1.0553,
    musa: 1.1689,
    maehwa: 1.1689,
    valkyrie: 1.0877,
    kunoichi: 1.1689,
    ninja: 1.1689,
    wizard: 1.1689,
    witch: 1.1689,
    mystic: 1.039,
    striker: 1.039,
    lahn: 1.1689,
    archer: 1.1689,
    dk: 1.1689,
    shai: 1.1202,
    guardian: 1.0877,
    hashashin: 1.0553,
    nova: 1.039,
    sage: 1.1689,
    corsair: 1.1364,
    drakania: 1.0877,
    woosa: 1.1689,
    maegu: 1.1105,
    scholar: 1.0877,
    dosa: 1.1689,
  },
  musa: {
    warrior: 0.9984,
    ranger: 1.0796,
    sorceress: 1.0796,
    berserker: 1.0309,
    tamer: 1.0796,
    musa: 1.0796,
    maehwa: 1.0796,
    valkyrie: 0.9984,
    kunoichi: 1.0796,
    ninja: 1.0796,
    wizard: 1.0796,
    witch: 1.0796,
    mystic: 1.0309,
    striker: 1.0309,
    lahn: 1.0796,
    archer: 1.0796,
    dk: 1.0796,
    shai: 1.0877,
    guardian: 1.0877,
    hashashin: 0.9903,
    nova: 1.0958,
    sage: 1.0796,
    corsair: 1.0877,
    drakania: 1.0877,
    woosa: 1.0796,
    maegu: 1.0256,
    scholar: 0.9984,
    dosa: 1.0553,
  },
  maehwa: {
    warrior: 0.9984,
    ranger: 1.0796,
    sorceress: 1.0796,
    berserker: 1.0309,
    tamer: 1.0796,
    musa: 1.0796,
    maehwa: 1.0553,
    valkyrie: 0.9984,
    kunoichi: 1.0796,
    ninja: 1.0796,
    wizard: 1.0796,
    witch: 1.0796,
    mystic: 1.0309,
    striker: 1.0309,
    lahn: 1.0796,
    archer: 1.0796,
    dk: 1.0796,
    shai: 1.0877,
    guardian: 1.0877,
    hashashin: 1.0066,
    nova: 1.0958,
    sage: 1.0796,
    corsair: 1.0877,
    drakania: 1.0877,
    woosa: 1.0796,
    maegu: 1.0256,
    scholar: 0.9984,
    dosa: 1.0796,
  },
  valkyrie: {
    warrior: 0.9416,
    ranger: 1.0228,
    sorceress: 1.0228,
    berserker: 0.9741,
    tamer: 1.0228,
    musa: 1.0228,
    maehwa: 1.0228,
    valkyrie: 1.0553,
    kunoichi: 1.0228,
    ninja: 1.0228,
    wizard: 1.0228,
    witch: 1.0228,
    mystic: 0.9741,
    striker: 0.9741,
    lahn: 1.0228,
    archer: 1.0228,
    dk: 1.0228,
    shai: 1.0228,
    guardian: 1.0553,
    hashashin: 0.9497,
    nova: 0.9416,
    sage: 1.0228,
    corsair: 0.9741,
    drakania: 1.0553,
    woosa: 1.0228,
    maegu: 0.9716,
    scholar: 0.9416,
    dosa: 1.0228,
  },
  kunoichi: {
    warrior: 0.9741,
    ranger: 1.0553,
    sorceress: 1.0553,
    berserker: 1.0066,
    tamer: 1.0553,
    musa: 1.0553,
    maehwa: 1.0553,
    valkyrie: 0.9741,
    kunoichi: 1.0553,
    ninja: 1.0553,
    wizard: 1.0553,
    witch: 1.0553,
    mystic: 1.0066,
    striker: 1.0066,
    lahn: 1.0553,
    archer: 1.0553,
    dk: 1.0553,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 0.9822,
    nova: 0.9254,
    sage: 1.0553,
    corsair: 1.0553,
    drakania: 1.0553,
    woosa: 1.0553,
    maegu: 1.0025,
    scholar: 0.9741,
    dosa: 1.0553,
  },
  ninja: {
    warrior: 1.0066,
    ranger: 1.0877,
    sorceress: 1.0877,
    berserker: 1.039,
    tamer: 1.0877,
    musa: 1.0877,
    maehwa: 1.0877,
    valkyrie: 1.0066,
    kunoichi: 1.0877,
    ninja: 1.0553,
    wizard: 1.0877,
    witch: 1.0877,
    mystic: 1.039,
    striker: 1.039,
    lahn: 1.0877,
    archer: 1.0877,
    dk: 1.0877,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 0.9984,
    nova: 0.9578,
    sage: 1.0877,
    corsair: 1.0553,
    drakania: 1.0553,
    woosa: 1.0877,
    maegu: 1.0333,
    scholar: 1.0066,
    dosa: 1.0877,
  },
  wizard: {
    warrior: 0.8767,
    ranger: 0.9578,
    sorceress: 0.9578,
    berserker: 0.9091,
    tamer: 0.9578,
    musa: 0.9578,
    maehwa: 0.9578,
    valkyrie: 0.8767,
    kunoichi: 0.9578,
    ninja: 0.9578,
    wizard: 1.0553,
    witch: 0.9578,
    mystic: 0.828,
    striker: 0.828,
    lahn: 0.9578,
    archer: 0.9578,
    dk: 0.9578,
    shai: 0.9416,
    guardian: 0.9741,
    hashashin: 0.9578,
    nova: 0.8117,
    sage: 0.9578,
    corsair: 0.9091,
    drakania: 0.9741,
    woosa: 0.9578,
    maegu: 0.9716,
    scholar: 0.8767,
    dosa: 0.9578,
  },
  witch: {
    warrior: 0.8767,
    ranger: 0.9578,
    sorceress: 0.9578,
    berserker: 0.9091,
    tamer: 0.9578,
    musa: 0.9578,
    maehwa: 0.9578,
    valkyrie: 0.8767,
    kunoichi: 0.9578,
    ninja: 0.9578,
    wizard: 0.9578,
    witch: 1.0553,
    mystic: 0.828,
    striker: 0.828,
    lahn: 0.9578,
    archer: 0.9578,
    dk: 0.9578,
    shai: 0.9416,
    guardian: 0.9741,
    hashashin: 0.9578,
    nova: 0.8117,
    sage: 0.9578,
    corsair: 0.9091,
    drakania: 0.9741,
    woosa: 0.9578,
    maegu: 0.9716,
    scholar: 0.8767,
    dosa: 0.9578,
  },
  mystic: {
    warrior: 1.0066,
    ranger: 1.0877,
    sorceress: 1.0877,
    berserker: 1.039,
    tamer: 1.0877,
    musa: 1.0877,
    maehwa: 1.0877,
    valkyrie: 1.0066,
    kunoichi: 1.0877,
    ninja: 1.0877,
    wizard: 1.0877,
    witch: 1.0877,
    mystic: 1.0553,
    striker: 1.039,
    lahn: 1.0877,
    archer: 1.0877,
    dk: 1.0877,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 1.0147,
    nova: 1.1202,
    sage: 1.0877,
    corsair: 1.0877,
    drakania: 1.0553,
    woosa: 1.0877,
    maegu: 1.0333,
    scholar: 1.0066,
    dosa: 1.0877,
  },
  striker: {
    warrior: 1.0147,
    ranger: 1.0958,
    sorceress: 1.0958,
    berserker: 1.0471,
    tamer: 1.0958,
    musa: 1.0958,
    maehwa: 1.0958,
    valkyrie: 1.0147,
    kunoichi: 1.0958,
    ninja: 1.0958,
    wizard: 1.0958,
    witch: 1.0958,
    mystic: 1.0471,
    striker: 1.0553,
    lahn: 1.0958,
    archer: 1.0958,
    dk: 1.0958,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 1.0228,
    nova: 1.1202,
    sage: 1.0958,
    corsair: 1.0877,
    drakania: 1.0553,
    woosa: 1.0958,
    maegu: 1.0411,
    scholar: 1.0147,
    dosa: 1.0958,
  },
  lahn: {
    warrior: 1.0147,
    ranger: 1.0958,
    sorceress: 1.0958,
    berserker: 1.0471,
    tamer: 1.0958,
    musa: 1.0958,
    maehwa: 1.0958,
    valkyrie: 1.0147,
    kunoichi: 1.0958,
    ninja: 1.0958,
    wizard: 1.0958,
    witch: 1.0958,
    mystic: 1.0471,
    striker: 1.0471,
    lahn: 1.0553,
    archer: 1.0958,
    dk: 1.0958,
    shai: 1.0553,
    guardian: 1.0877,
    hashashin: 0.9984,
    nova: 1.0471,
    sage: 1.0958,
    corsair: 1.0715,
    drakania: 1.0877,
    woosa: 1.0958,
    maegu: 1.0411,
    scholar: 1.0147,
    dosa: 1.0958,
  },
  archer: {
    warrior: 0.9578,
    ranger: 1.039,
    sorceress: 1.039,
    berserker: 0.9903,
    tamer: 1.039,
    musa: 1.039,
    maehwa: 1.039,
    valkyrie: 0.9578,
    kunoichi: 1.039,
    ninja: 1.039,
    wizard: 1.039,
    witch: 1.039,
    mystic: 0.9903,
    striker: 0.9903,
    lahn: 1.039,
    archer: 1.0553,
    dk: 1.039,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 0.9741,
    nova: 0.9335,
    sage: 1.039,
    corsair: 0.9903,
    drakania: 1.0553,
    woosa: 1.039,
    maegu: 1.0025,
    scholar: 0.9578,
    dosa: 1.039,
  },
  dk: {
    warrior: 0.8604,
    ranger: 0.9416,
    sorceress: 0.9416,
    berserker: 0.8929,
    tamer: 0.9416,
    musa: 0.9416,
    maehwa: 0.9416,
    valkyrie: 0.8604,
    kunoichi: 0.9416,
    ninja: 0.9416,
    wizard: 0.9416,
    witch: 0.9416,
    mystic: 0.7793,
    striker: 0.7793,
    lahn: 0.9416,
    archer: 0.9416,
    dk: 1.0553,
    shai: 0.9091,
    guardian: 0.9416,
    hashashin: 0.8848,
    nova: 0.8117,
    sage: 0.9416,
    corsair: 0.9416,
    drakania: 0.9416,
    woosa: 0.9416,
    maegu: 0.8945,
    scholar: 0.8604,
    dosa: 0.9416,
  },
  shai: {
    warrior: 0.4627,
    ranger: 0.4627,
    sorceress: 0.5276,
    berserker: 0.4952,
    tamer: 0.4465,
    musa: 0.5439,
    maehwa: 0.5439,
    valkyrie: 0.5601,
    kunoichi: 0.5601,
    ninja: 0.5601,
    wizard: 0.5439,
    witch: 0.5439,
    mystic: 0.2922,
    striker: 0.2922,
    lahn: 0.4302,
    archer: 0.625,
    dk: 0.5439,
    shai: 0.4465,
    guardian: 0.4627,
    hashashin: 0.4302,
    nova: 0.4627,
    sage: 0.5276,
    corsair: 0.4627,
    drakania: 0.4627,
    woosa: 0.5276,
    maegu: 0.5938,
    scholar: 0.4627,
    dosa: 0.5439,
  },
  guardian: {
    warrior: 1.0066,
    ranger: 1.0066,
    sorceress: 1.0066,
    berserker: 0.9578,
    tamer: 1.0066,
    musa: 1.0066,
    maehwa: 1.0066,
    valkyrie: 0.9254,
    kunoichi: 1.0066,
    ninja: 1.0066,
    wizard: 1.0066,
    witch: 1.0066,
    mystic: 0.9578,
    striker: 1.0066,
    lahn: 1.0066,
    archer: 1.0066,
    dk: 1.0066,
    shai: 0.9741,
    guardian: 1.0553,
    hashashin: 0.9741,
    nova: 0.9254,
    sage: 1.0066,
    corsair: 0.9741,
    drakania: 1.0877,
    woosa: 1.0066,
    maegu: 0.9562,
    scholar: 1.0066,
    dosa: 1.0066,
  },
  hashashin: {
    warrior: 1.0553,
    ranger: 1.1364,
    sorceress: 1.1364,
    berserker: 1.0877,
    tamer: 1.0228,
    musa: 1.1364,
    maehwa: 1.1364,
    valkyrie: 1.0553,
    kunoichi: 1.1364,
    ninja: 1.1364,
    wizard: 1.1364,
    witch: 1.1364,
    mystic: 1.0066,
    striker: 1.0066,
    lahn: 1.1364,
    archer: 1.1364,
    dk: 1.1364,
    shai: 1.0877,
    guardian: 1.0553,
    hashashin: 1.0228,
    nova: 0.9741,
    sage: 1.1364,
    corsair: 1.039,
    drakania: 1.0553,
    woosa: 1.1364,
    maegu: 1.0179,
    scholar: 1.0553,
    dosa: 1.1364,
  },
  nova: {
    warrior: 1.0553,
    ranger: 1.0553,
    sorceress: 1.0553,
    berserker: 1.0553,
    tamer: 1.0715,
    musa: 1.0553,
    maehwa: 1.0553,
    valkyrie: 1.0553,
    kunoichi: 1.0553,
    ninja: 1.0553,
    wizard: 1.0715,
    witch: 1.0715,
    mystic: 1.0066,
    striker: 1.0066,
    lahn: 1.0553,
    archer: 1.0715,
    dk: 1.0553,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 1.0553,
    nova: 1.0553,
    sage: 1.0553,
    corsair: 0.9903,
    drakania: 1.0553,
    woosa: 1.0553,
    maegu: 1.0179,
    scholar: 1.0553,
    dosa: 1.0553,
  },
  sage: {
    warrior: 1.0228,
    ranger: 1.104,
    sorceress: 1.0553,
    berserker: 1.0553,
    tamer: 1.104,
    musa: 1.104,
    maehwa: 1.104,
    valkyrie: 1.0228,
    kunoichi: 1.104,
    ninja: 1.104,
    wizard: 1.104,
    witch: 1.104,
    mystic: 0.9741,
    striker: 0.9741,
    lahn: 1.104,
    archer: 1.104,
    dk: 1.104,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 1.0228,
    nova: 1.0553,
    sage: 1.0553,
    corsair: 0.9903,
    drakania: 1.0553,
    woosa: 1.0553,
    maegu: 1.0025,
    scholar: 1.0228,
    dosa: 1.104,
  },
  corsair: {
    warrior: 1.0877,
    ranger: 1.0553,
    sorceress: 1.0228,
    berserker: 1.039,
    tamer: 1.0553,
    musa: 1.0553,
    maehwa: 1.0553,
    valkyrie: 1.0877,
    kunoichi: 1.0553,
    ninja: 1.0553,
    wizard: 1.0553,
    witch: 1.0553,
    mystic: 1.039,
    striker: 1.039,
    lahn: 1.0553,
    archer: 1.0553,
    dk: 1.0553,
    shai: 1.0553,
    guardian: 1.0877,
    hashashin: 1.0553,
    nova: 1.0877,
    sage: 1.0877,
    corsair: 1.0553,
    drakania: 1.0877,
    woosa: 1.0877,
    maegu: 1.0025,
    scholar: 1.0877,
    dosa: 1.0553,
  },
  drakania: {
    warrior: 1.0066,
    ranger: 1.0066,
    sorceress: 1.0066,
    berserker: 0.9578,
    tamer: 1.0066,
    musa: 1.0066,
    maehwa: 1.0066,
    valkyrie: 0.9254,
    kunoichi: 1.0066,
    ninja: 1.0066,
    wizard: 1.0066,
    witch: 1.0066,
    mystic: 1.0066,
    striker: 0.9578,
    lahn: 1.0066,
    archer: 1.0066,
    dk: 1.0066,
    shai: 0.9741,
    guardian: 1.0877,
    hashashin: 0.9741,
    nova: 0.9254,
    sage: 1.0066,
    corsair: 0.9741,
    drakania: 1.0553,
    woosa: 1.0066,
    maegu: 0.9562,
    scholar: 1.0066,
    dosa: 1.0066,
  },
  woosa: {
    warrior: 1.0553,
    ranger: 1.0553,
    sorceress: 1.0553,
    berserker: 1.0553,
    tamer: 1.0715,
    musa: 1.0553,
    maehwa: 1.0553,
    valkyrie: 1.0553,
    kunoichi: 1.0553,
    ninja: 1.0553,
    wizard: 1.0715,
    witch: 1.0715,
    mystic: 1.0066,
    striker: 1.0066,
    lahn: 1.0553,
    archer: 1.0715,
    dk: 1.0553,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 1.0553,
    nova: 1.0553,
    sage: 1.0553,
    corsair: 0.9903,
    drakania: 1.0553,
    woosa: 1.0553,
    maegu: 0.9871,
    scholar: 1.0553,
    dosa: 1.0553,
  },
  maegu: {
    warrior: 0.9871,
    ranger: 0.9408,
    sorceress: 0.9871,
    berserker: 0.9254,
    tamer: 0.9871,
    musa: 0.9871,
    maehwa: 0.9871,
    valkyrie: 0.9562,
    kunoichi: 0.9716,
    ninja: 0.9716,
    wizard: 0.9716,
    witch: 0.9716,
    mystic: 0.9408,
    striker: 0.9408,
    lahn: 0.9871,
    archer: 1.0025,
    dk: 0.9871,
    shai: 1.0025,
    guardian: 1.0025,
    hashashin: 0.91,
    nova: 0.9871,
    sage: 1.0025,
    corsair: 0.8945,
    drakania: 1.0025,
    woosa: 0.9871,
    maegu: 0.9504,
    scholar: 0.981,
    dosa: 1.0796,
  },
  scholar: {
    warrior: 1.0553,
    ranger: 1.0553,
    sorceress: 1.0553,
    berserker: 1.0066,
    tamer: 1.0553,
    musa: 1.0553,
    maehwa: 1.0553,
    valkyrie: 0.9741,
    kunoichi: 1.0553,
    ninja: 1.0553,
    wizard: 1.0553,
    witch: 1.0553,
    mystic: 1.0066,
    striker: 1.0066,
    lahn: 1.0553,
    archer: 1.0553,
    dk: 1.0553,
    shai: 1.0553,
    guardian: 1.0553,
    hashashin: 1.039,
    nova: 0.9741,
    sage: 1.0553,
    corsair: 0.9903,
    drakania: 1.0553,
    woosa: 1.0553,
    maegu: 1.0025,
    scholar: 1.0553,
    dosa: 1.0553,
  },
  dosa: {
    warrior: 0.9984,
    ranger: 1.0796,
    sorceress: 1.0796,
    berserker: 1.0309,
    tamer: 1.0796,
    musa: 1.0553,
    maehwa: 1.0796,
    valkyrie: 0.9984,
    kunoichi: 1.0796,
    ninja: 1.0796,
    wizard: 1.0796,
    witch: 1.0796,
    mystic: 1.0309,
    striker: 1.0309,
    lahn: 1.0796,
    archer: 1.0796,
    dk: 1.0796,
    shai: 1.0877,
    guardian: 1.0877,
    hashashin: 0.9903,
    nova: 1.0958,
    sage: 1.0796,
    corsair: 1.0877,
    drakania: 1.0877,
    woosa: 1.0796,
    maegu: 1.0256,
    scholar: 0.9984,
    dosa: 1.0553,
  },
};

export const getClassPvpDamageModifier = (
  atClass: ClassName,
  dfClass: ClassName
): number => {
  if (pvpDamageModifiers[atClass] && pvpDamageModifiers[atClass][dfClass]) {
    const result = pvpDamageModifiers[atClass][dfClass];
    return result;
  }
  // if class is not found
  console.warn(`PvP damage modifier not found for ${atClass} vs ${dfClass}.`);
  return 1.0;
};
