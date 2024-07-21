/* empty css                         */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro, m as maybeRenderHead, s as spreadAttributes, f as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_C7PmWV9s.mjs';
import { A as AstroError, E as ExpectedImageOptions, f as ExpectedImage, g as ExpectedNotESMImage, r as resolveSrc, i as isRemoteImage, F as FailedToFetchRemoteImageDimensions, h as isESMImportedImage, j as isLocalService, D as DEFAULT_HASH_PROPS, k as InvalidImageService, l as ImageMissingAlt } from './astro/assets-service_BxFzqDMz.mjs';

const config = {
  // 名字
  name: "Lin Zheng",
  // 联系方式
  connection: "( wx: linzheng-99 )",
  links: [
    {
      icon: "location",
      value: "WenZhou"
    },
    {
      icon: "weixin",
      value: "linzheng-99"
    },
    {
      icon: "email",
      value: "linzheng9045@gmail.com"
    },
    {
      icon: "github",
      value: "GitHub",
      url: "https://github.com/linzheng99"
    }
  ],
  // 个人介绍
  introduce: `
      这里写个人评价 这里写个人评价 这里写个人评价 这里写个人评价
      这里写个人评价 这里写个人评价 这里写个人评价 这里写个人评价
      这里写个人评价 这里写个人评价 这里写个人评价 这里写个人评价
  `,
  // 公司
  companies: [
    {
      name: "融威科技有限公司",
      time: "2021年6月 - 2024年7月",
      projects: [
        {
          name: "物联网管理后台(PC)",
          details: "基于 star 面试法来写 - 背景 - 任务 - 行动 - 结果"
        },
        {
          name: "物联网管理后台(H5)",
          details: "写2 - 3 个核心项目就足够了, 能体现出你的价值的"
        },
        {
          name: "数字龙舟(小程序)",
          details: "写2 - 3 个核心项目就足够了, 能体现出你的价值的"
        }
      ]
    },
    {
      name: "杭州促极科技有限公司",
      time: "2020年9月 - 2021年3月",
      projects: [
        {
          name: "国际电商平台",
          details: "公司使用 React 及 Angular 框架,公司主要项目经营国内外电商pc平台，熟悉电商订单区域的业务逻辑,参与过功能开发，BUG修复，功能优化，页面美化等"
        }
      ]
    }
  ],
  // 个人开源项目
  projects: [
    {
      name: "tob后台管理项目",
      details: "XXXXXX"
    },
    {
      name: "地图组件库",
      details: "XXXXXX"
    }
  ],
  // 技能
  skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue3/2", "React", "Vite", "Webpack", "Unocss/Tailwind Css", "Nodejs"],
  // 教育经历
  educations: [
    {
      time: "2017年 ~ 2020年",
      school: "浙江长征职业技术学院",
      profession: "计算机应用技术",
      lv: "专科"
    }
  ]
};

const $$Astro$6 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="lg:flex w-full h-full"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/linzheng/project/resume/src/layouts/Layout.astro", void 0);

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = toUTF8String(input).match(extractorRegExps.root);
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup$1(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.indexOf(type) > -1) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup$1(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './astro/assets-service_BxFzqDMz.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$5 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/linzheng/project/resume/node_modules/.pnpm/astro@4.11.5_typescript@5.5.3/node_modules/astro/components/Image.astro", void 0);

const mimes = {
  "3g2": "video/3gpp2",
  "3gp": "video/3gpp",
  "3gpp": "video/3gpp",
  "3mf": "model/3mf",
  "aac": "audio/aac",
  "ac": "application/pkix-attr-cert",
  "adp": "audio/adpcm",
  "adts": "audio/aac",
  "ai": "application/postscript",
  "aml": "application/automationml-aml+xml",
  "amlx": "application/automationml-amlx+zip",
  "amr": "audio/amr",
  "apng": "image/apng",
  "appcache": "text/cache-manifest",
  "appinstaller": "application/appinstaller",
  "appx": "application/appx",
  "appxbundle": "application/appxbundle",
  "asc": "application/pgp-keys",
  "atom": "application/atom+xml",
  "atomcat": "application/atomcat+xml",
  "atomdeleted": "application/atomdeleted+xml",
  "atomsvc": "application/atomsvc+xml",
  "au": "audio/basic",
  "avci": "image/avci",
  "avcs": "image/avcs",
  "avif": "image/avif",
  "aw": "application/applixware",
  "bdoc": "application/bdoc",
  "bin": "application/octet-stream",
  "bmp": "image/bmp",
  "bpk": "application/octet-stream",
  "btf": "image/prs.btif",
  "btif": "image/prs.btif",
  "buffer": "application/octet-stream",
  "ccxml": "application/ccxml+xml",
  "cdfx": "application/cdfx+xml",
  "cdmia": "application/cdmi-capability",
  "cdmic": "application/cdmi-container",
  "cdmid": "application/cdmi-domain",
  "cdmio": "application/cdmi-object",
  "cdmiq": "application/cdmi-queue",
  "cer": "application/pkix-cert",
  "cgm": "image/cgm",
  "cjs": "application/node",
  "class": "application/java-vm",
  "coffee": "text/coffeescript",
  "conf": "text/plain",
  "cpl": "application/cpl+xml",
  "cpt": "application/mac-compactpro",
  "crl": "application/pkix-crl",
  "css": "text/css",
  "csv": "text/csv",
  "cu": "application/cu-seeme",
  "cwl": "application/cwl",
  "cww": "application/prs.cww",
  "davmount": "application/davmount+xml",
  "dbk": "application/docbook+xml",
  "deb": "application/octet-stream",
  "def": "text/plain",
  "deploy": "application/octet-stream",
  "dib": "image/bmp",
  "disposition-notification": "message/disposition-notification",
  "dist": "application/octet-stream",
  "distz": "application/octet-stream",
  "dll": "application/octet-stream",
  "dmg": "application/octet-stream",
  "dms": "application/octet-stream",
  "doc": "application/msword",
  "dot": "application/msword",
  "dpx": "image/dpx",
  "drle": "image/dicom-rle",
  "dsc": "text/prs.lines.tag",
  "dssc": "application/dssc+der",
  "dtd": "application/xml-dtd",
  "dump": "application/octet-stream",
  "dwd": "application/atsc-dwd+xml",
  "ear": "application/java-archive",
  "ecma": "application/ecmascript",
  "elc": "application/octet-stream",
  "emf": "image/emf",
  "eml": "message/rfc822",
  "emma": "application/emma+xml",
  "emotionml": "application/emotionml+xml",
  "eps": "application/postscript",
  "epub": "application/epub+zip",
  "exe": "application/octet-stream",
  "exi": "application/exi",
  "exp": "application/express",
  "exr": "image/aces",
  "ez": "application/andrew-inset",
  "fdf": "application/fdf",
  "fdt": "application/fdt+xml",
  "fits": "image/fits",
  "g3": "image/g3fax",
  "gbr": "application/rpki-ghostbusters",
  "geojson": "application/geo+json",
  "gif": "image/gif",
  "glb": "model/gltf-binary",
  "gltf": "model/gltf+json",
  "gml": "application/gml+xml",
  "gpx": "application/gpx+xml",
  "gram": "application/srgs",
  "grxml": "application/srgs+xml",
  "gxf": "application/gxf",
  "gz": "application/gzip",
  "h261": "video/h261",
  "h263": "video/h263",
  "h264": "video/h264",
  "heic": "image/heic",
  "heics": "image/heic-sequence",
  "heif": "image/heif",
  "heifs": "image/heif-sequence",
  "hej2": "image/hej2k",
  "held": "application/atsc-held+xml",
  "hjson": "application/hjson",
  "hlp": "application/winhlp",
  "hqx": "application/mac-binhex40",
  "hsj2": "image/hsj2",
  "htm": "text/html",
  "html": "text/html",
  "ics": "text/calendar",
  "ief": "image/ief",
  "ifb": "text/calendar",
  "iges": "model/iges",
  "igs": "model/iges",
  "img": "application/octet-stream",
  "in": "text/plain",
  "ini": "text/plain",
  "ink": "application/inkml+xml",
  "inkml": "application/inkml+xml",
  "ipfix": "application/ipfix",
  "iso": "application/octet-stream",
  "its": "application/its+xml",
  "jade": "text/jade",
  "jar": "application/java-archive",
  "jhc": "image/jphc",
  "jls": "image/jls",
  "jp2": "image/jp2",
  "jpe": "image/jpeg",
  "jpeg": "image/jpeg",
  "jpf": "image/jpx",
  "jpg": "image/jpeg",
  "jpg2": "image/jp2",
  "jpgm": "image/jpm",
  "jpgv": "video/jpeg",
  "jph": "image/jph",
  "jpm": "image/jpm",
  "jpx": "image/jpx",
  "js": "text/javascript",
  "json": "application/json",
  "json5": "application/json5",
  "jsonld": "application/ld+json",
  "jsonml": "application/jsonml+json",
  "jsx": "text/jsx",
  "jt": "model/jt",
  "jxr": "image/jxr",
  "jxra": "image/jxra",
  "jxrs": "image/jxrs",
  "jxs": "image/jxs",
  "jxsc": "image/jxsc",
  "jxsi": "image/jxsi",
  "jxss": "image/jxss",
  "kar": "audio/midi",
  "ktx": "image/ktx",
  "ktx2": "image/ktx2",
  "less": "text/less",
  "lgr": "application/lgr+xml",
  "list": "text/plain",
  "litcoffee": "text/coffeescript",
  "log": "text/plain",
  "lostxml": "application/lost+xml",
  "lrf": "application/octet-stream",
  "m1v": "video/mpeg",
  "m21": "application/mp21",
  "m2a": "audio/mpeg",
  "m2v": "video/mpeg",
  "m3a": "audio/mpeg",
  "m4a": "audio/mp4",
  "m4p": "application/mp4",
  "m4s": "video/iso.segment",
  "ma": "application/mathematica",
  "mads": "application/mads+xml",
  "maei": "application/mmt-aei+xml",
  "man": "text/troff",
  "manifest": "text/cache-manifest",
  "map": "application/json",
  "mar": "application/octet-stream",
  "markdown": "text/markdown",
  "mathml": "application/mathml+xml",
  "mb": "application/mathematica",
  "mbox": "application/mbox",
  "md": "text/markdown",
  "mdx": "text/mdx",
  "me": "text/troff",
  "mesh": "model/mesh",
  "meta4": "application/metalink4+xml",
  "metalink": "application/metalink+xml",
  "mets": "application/mets+xml",
  "mft": "application/rpki-manifest",
  "mid": "audio/midi",
  "midi": "audio/midi",
  "mime": "message/rfc822",
  "mj2": "video/mj2",
  "mjp2": "video/mj2",
  "mjs": "text/javascript",
  "mml": "text/mathml",
  "mods": "application/mods+xml",
  "mov": "video/quicktime",
  "mp2": "audio/mpeg",
  "mp21": "application/mp21",
  "mp2a": "audio/mpeg",
  "mp3": "audio/mpeg",
  "mp4": "video/mp4",
  "mp4a": "audio/mp4",
  "mp4s": "application/mp4",
  "mp4v": "video/mp4",
  "mpd": "application/dash+xml",
  "mpe": "video/mpeg",
  "mpeg": "video/mpeg",
  "mpf": "application/media-policy-dataset+xml",
  "mpg": "video/mpeg",
  "mpg4": "video/mp4",
  "mpga": "audio/mpeg",
  "mpp": "application/dash-patch+xml",
  "mrc": "application/marc",
  "mrcx": "application/marcxml+xml",
  "ms": "text/troff",
  "mscml": "application/mediaservercontrol+xml",
  "msh": "model/mesh",
  "msi": "application/octet-stream",
  "msix": "application/msix",
  "msixbundle": "application/msixbundle",
  "msm": "application/octet-stream",
  "msp": "application/octet-stream",
  "mtl": "model/mtl",
  "musd": "application/mmt-usd+xml",
  "mxf": "application/mxf",
  "mxmf": "audio/mobile-xmf",
  "mxml": "application/xv+xml",
  "n3": "text/n3",
  "nb": "application/mathematica",
  "nq": "application/n-quads",
  "nt": "application/n-triples",
  "obj": "model/obj",
  "oda": "application/oda",
  "oga": "audio/ogg",
  "ogg": "audio/ogg",
  "ogv": "video/ogg",
  "ogx": "application/ogg",
  "omdoc": "application/omdoc+xml",
  "onepkg": "application/onenote",
  "onetmp": "application/onenote",
  "onetoc": "application/onenote",
  "onetoc2": "application/onenote",
  "opf": "application/oebps-package+xml",
  "opus": "audio/ogg",
  "otf": "font/otf",
  "owl": "application/rdf+xml",
  "oxps": "application/oxps",
  "p10": "application/pkcs10",
  "p7c": "application/pkcs7-mime",
  "p7m": "application/pkcs7-mime",
  "p7s": "application/pkcs7-signature",
  "p8": "application/pkcs8",
  "pdf": "application/pdf",
  "pfr": "application/font-tdpfr",
  "pgp": "application/pgp-encrypted",
  "pkg": "application/octet-stream",
  "pki": "application/pkixcmp",
  "pkipath": "application/pkix-pkipath",
  "pls": "application/pls+xml",
  "png": "image/png",
  "prc": "model/prc",
  "prf": "application/pics-rules",
  "provx": "application/provenance+xml",
  "ps": "application/postscript",
  "pskcxml": "application/pskc+xml",
  "pti": "image/prs.pti",
  "qt": "video/quicktime",
  "raml": "application/raml+yaml",
  "rapd": "application/route-apd+xml",
  "rdf": "application/rdf+xml",
  "relo": "application/p2p-overlay+xml",
  "rif": "application/reginfo+xml",
  "rl": "application/resource-lists+xml",
  "rld": "application/resource-lists-diff+xml",
  "rmi": "audio/midi",
  "rnc": "application/relax-ng-compact-syntax",
  "rng": "application/xml",
  "roa": "application/rpki-roa",
  "roff": "text/troff",
  "rq": "application/sparql-query",
  "rs": "application/rls-services+xml",
  "rsat": "application/atsc-rsat+xml",
  "rsd": "application/rsd+xml",
  "rsheet": "application/urc-ressheet+xml",
  "rss": "application/rss+xml",
  "rtf": "text/rtf",
  "rtx": "text/richtext",
  "rusd": "application/route-usd+xml",
  "s3m": "audio/s3m",
  "sbml": "application/sbml+xml",
  "scq": "application/scvp-cv-request",
  "scs": "application/scvp-cv-response",
  "sdp": "application/sdp",
  "senmlx": "application/senml+xml",
  "sensmlx": "application/sensml+xml",
  "ser": "application/java-serialized-object",
  "setpay": "application/set-payment-initiation",
  "setreg": "application/set-registration-initiation",
  "sgi": "image/sgi",
  "sgm": "text/sgml",
  "sgml": "text/sgml",
  "shex": "text/shex",
  "shf": "application/shf+xml",
  "shtml": "text/html",
  "sieve": "application/sieve",
  "sig": "application/pgp-signature",
  "sil": "audio/silk",
  "silo": "model/mesh",
  "siv": "application/sieve",
  "slim": "text/slim",
  "slm": "text/slim",
  "sls": "application/route-s-tsid+xml",
  "smi": "application/smil+xml",
  "smil": "application/smil+xml",
  "snd": "audio/basic",
  "so": "application/octet-stream",
  "spdx": "text/spdx",
  "spp": "application/scvp-vp-response",
  "spq": "application/scvp-vp-request",
  "spx": "audio/ogg",
  "sql": "application/sql",
  "sru": "application/sru+xml",
  "srx": "application/sparql-results+xml",
  "ssdl": "application/ssdl+xml",
  "ssml": "application/ssml+xml",
  "stk": "application/hyperstudio",
  "stl": "model/stl",
  "stpx": "model/step+xml",
  "stpxz": "model/step-xml+zip",
  "stpz": "model/step+zip",
  "styl": "text/stylus",
  "stylus": "text/stylus",
  "svg": "image/svg+xml",
  "svgz": "image/svg+xml",
  "swidtag": "application/swid+xml",
  "t": "text/troff",
  "t38": "image/t38",
  "td": "application/urc-targetdesc+xml",
  "tei": "application/tei+xml",
  "teicorpus": "application/tei+xml",
  "text": "text/plain",
  "tfi": "application/thraud+xml",
  "tfx": "image/tiff-fx",
  "tif": "image/tiff",
  "tiff": "image/tiff",
  "toml": "application/toml",
  "tr": "text/troff",
  "trig": "application/trig",
  "ts": "video/mp2t",
  "tsd": "application/timestamped-data",
  "tsv": "text/tab-separated-values",
  "ttc": "font/collection",
  "ttf": "font/ttf",
  "ttl": "text/turtle",
  "ttml": "application/ttml+xml",
  "txt": "text/plain",
  "u3d": "model/u3d",
  "u8dsn": "message/global-delivery-status",
  "u8hdr": "message/global-headers",
  "u8mdn": "message/global-disposition-notification",
  "u8msg": "message/global",
  "ubj": "application/ubjson",
  "uri": "text/uri-list",
  "uris": "text/uri-list",
  "urls": "text/uri-list",
  "vcard": "text/vcard",
  "vrml": "model/vrml",
  "vtt": "text/vtt",
  "vxml": "application/voicexml+xml",
  "war": "application/java-archive",
  "wasm": "application/wasm",
  "wav": "audio/wav",
  "weba": "audio/webm",
  "webm": "video/webm",
  "webmanifest": "application/manifest+json",
  "webp": "image/webp",
  "wgsl": "text/wgsl",
  "wgt": "application/widget",
  "wif": "application/watcherinfo+xml",
  "wmf": "image/wmf",
  "woff": "font/woff",
  "woff2": "font/woff2",
  "wrl": "model/vrml",
  "wsdl": "application/wsdl+xml",
  "wspolicy": "application/wspolicy+xml",
  "x3d": "model/x3d+xml",
  "x3db": "model/x3d+fastinfoset",
  "x3dbz": "model/x3d+binary",
  "x3dv": "model/x3d-vrml",
  "x3dvz": "model/x3d+vrml",
  "x3dz": "model/x3d+xml",
  "xaml": "application/xaml+xml",
  "xav": "application/xcap-att+xml",
  "xca": "application/xcap-caps+xml",
  "xcs": "application/calendar+xml",
  "xdf": "application/xcap-diff+xml",
  "xdssc": "application/dssc+xml",
  "xel": "application/xcap-el+xml",
  "xenc": "application/xenc+xml",
  "xer": "application/patch-ops-error+xml",
  "xfdf": "application/xfdf",
  "xht": "application/xhtml+xml",
  "xhtml": "application/xhtml+xml",
  "xhvml": "application/xv+xml",
  "xlf": "application/xliff+xml",
  "xm": "audio/xm",
  "xml": "text/xml",
  "xns": "application/xcap-ns+xml",
  "xop": "application/xop+xml",
  "xpl": "application/xproc+xml",
  "xsd": "application/xml",
  "xsf": "application/prs.xsf+xml",
  "xsl": "application/xml",
  "xslt": "application/xml",
  "xspf": "application/xspf+xml",
  "xvm": "application/xv+xml",
  "xvml": "application/xv+xml",
  "yaml": "text/yaml",
  "yang": "application/yang",
  "yin": "application/yin+xml",
  "yml": "text/yaml",
  "zip": "application/zip"
};

function lookup(extn) {
	let tmp = ('' + extn).trim().toLowerCase();
	let idx = tmp.lastIndexOf('.');
	return mimes[!~idx ? tmp : tmp.substring(++idx)];
}

const $$Astro$4 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/linzheng/project/resume/node_modules/.pnpm/astro@4.11.5_typescript@5.5.3/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const Avatar = new Proxy({"src":"/resume/_astro/avatar.cZmTvvn9.jpg","width":3024,"height":3381,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/linzheng/project/resume/src/assets/images/avatar.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/linzheng/project/resume/src/assets/images/avatar.jpg");
							return target[name];
						}
					});

const icons = {"local":{"prefix":"local","lastModified":1721565129,"icons":{"email":{"body":"<path fill=\"currentColor\" d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44\"/>"},"github":{"body":"<path fill=\"currentColor\" d=\"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2\"/>"},"location":{"body":"<path fill=\"currentColor\" d=\"M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13 11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4\"/><circle cx=\"16\" cy=\"13\" r=\"4\" fill=\"none\"/>","width":32,"height":32},"weixin":{"body":"<path fill=\"currentColor\" d=\"M580 429q0-41-25-66t-66-25q-43 0-76 25.5T380 429q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5m743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5T1160 936q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51m-236-507q0-41-24.5-66T997 338q-43 0-76 25.5T888 429q0 39 33 64.5t76 25.5q41 0 65.5-24.5T1087 429m635 507q0-28-26-50t-65-22q-27 0-49.5 22.5T1559 936q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51m-266-397q-31-4-70-4-169 0-311 77T851.5 820.5 770 1108q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218Q0 933 0 646q0-169 97.5-311t264-223.5T725 30q176 0 332.5 66t262 182.5T1456 539m592 561q0 117-68.5 223.5T1794 1517l55 181-199-109q-150 37-218 37-169 0-311-70.5T897.5 1364 816 1100t81.5-264T1121 644.5t311-70.5q161 0 303 70.5t227.5 192T2048 1100\"/>","width":2048,"height":1728}},"width":24,"height":24}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$3 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/linzheng/project/resume/node_modules/.pnpm/astro-icon@1.1.0/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$2 = createAstro();
const $$SocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialLink;
  const { value, icon, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-2 items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon })} ${url ? renderTemplate`<a target="_blank"${addAttribute(url, "href")} class="text-blue-500 underline hover:text-blue-600"> ${value} </a>` : renderTemplate`<span>${value}</span>`} </div>`;
}, "/Users/linzheng/project/resume/src/components/ui/SocialLink.astro", void 0);

const $$Astro$1 = createAstro();
const $$User = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$User;
  const { author, links, connection } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-solid border-zinc-100 lg:border-r lg:my-20 py-20 sm:px-40 text-center"> <div class="sticky top-40"> <div class="flex flex-col items-center gap-3"> ${renderComponent($$result, "Image", $$Image, { "src": Avatar, "width": "200", "height": "200", "class": "rounded-full bg-cover aspect-square object-cover my-8", "loading": "eager", "alt": "avatar" })} <div class="flex flex-col gap-1"> <div class="font-bold text-2xl">${author}</div> <div class="md:text-lg text-gray-800 font-bold">前端工程师</div> <div class="md:text-lg text-gray-800 font-bold">三年工作经验</div> </div> <div class="lg:hidden"> <span>${connection}</span> </div> <div class="flex-col items-center gap-3 hidden lg:flex"> ${links?.map((link) => renderTemplate`${renderComponent($$result, "SocialLink", $$SocialLink, { "icon": link.icon, "value": link.value, "url": link.url })}`)} </div> </div> </div> </div>`;
}, "/Users/linzheng/project/resume/src/components/User.astro", void 0);

const $$Astro = createAstro();
const $$ModuleHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ModuleHeader;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center lg:text-left"> <h1 class="mb-4 text-4xl text-black font-bold">${title}</h1> </div>`;
}, "/Users/linzheng/project/resume/src/components/ui/ModuleHeader.astro", void 0);

const $$Introduce = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "ModuleHeader", $$ModuleHeader, { "title": "\u4E2A\u4EBA\u8BC4\u4EF7" })} <p class="text-lg"> ${config.introduce} </p> </div>`;
}, "/Users/linzheng/project/resume/src/components/Introduce.astro", void 0);

const $$Company = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "ModuleHeader", $$ModuleHeader, { "title": "\u5DE5\u4F5C\u7ECF\u5386" })} <ul> ${config.companies.map((company) => renderTemplate`<li class="mb-4"> <div class="text-center lg:text-left"> <h2 class="text-3xl font-medium text-gray-800">${company.name}</h2> <small class="text-sm text-gray-600">${company.time}</small> </div> <div class="mt-1"> ${company.projects.map((project) => renderTemplate`<div> <h3 class="text-2xl font-medium text-gray-600">${project.name}</h3> <p>${project.details}</p> </div>`)} </div> </li>`)} </ul> </div>`;
}, "/Users/linzheng/project/resume/src/components/Company.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> ${renderComponent($$result, "ModuleHeader", $$ModuleHeader, { "title": "Skill" })} <div class="flex lg:justify-start justify-center gap-2 flex-wrap"> ${config.skills.map((skill) => renderTemplate`<span class="rounded-full border px-4 text-sm py-2 font-medium bg-gray-200"> ${skill} </span>`)} </div> </div>`;
}, "/Users/linzheng/project/resume/src/components/Skills.astro", void 0);

const $$OpenSource = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "ModuleHeader", $$ModuleHeader, { "title": "\u5F00\u6E90\u9879\u76EE" })} <ul> ${config.projects.map((item) => renderTemplate`<li class="mb-4"> <h2 class="text-2xl font-medium text-gray-600">${item.name}</h2> <div class="mt-1"> <p>${item.details}</p> </div> </li>`)} </ul> </div>`;
}, "/Users/linzheng/project/resume/src/components/OpenSource.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "ModuleHeader", $$ModuleHeader, { "title": "\u6559\u80B2\u7ECF\u5386" })} <ul> ${config.educations.map((item) => renderTemplate`<li class="mb-4"> <div class="flex lg:justify-start justify-center gap-2"> <span>${item.time}</span> <span>${item.school}</span> <span>${item.profession}</span> <span>${item.lv}</span> </div> </li>`)} </ul> </div>`;
}, "/Users/linzheng/project/resume/src/components/Education.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to my resume." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "User", $$User, { "author": config.name, "links": config.links, "connection": config.connection })} ${maybeRenderHead()}<div class="lg:my-20 mx-6 lg:mx-8 flex flex-col overflow-x-hidden gap-4"> ${renderComponent($$result2, "Introduce", $$Introduce, {})} ${renderComponent($$result2, "Company", $$Company, {})} ${renderComponent($$result2, "OpenSource", $$OpenSource, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Education", $$Education, {})} </div> ` })}`;
}, "/Users/linzheng/project/resume/src/pages/index.astro", void 0);

const $$file = "/Users/linzheng/project/resume/src/pages/index.astro";
const $$url = "/resume";

export { $$Index as default, $$file as file, $$url as url };
