export type Media = {
  altTitle: string
  caption?: string
  fileName: string
  horizontalBoxCenter?: number
  horizontalBoxSize?: number
  horizontalOriginalSize?: number
  horizontalRatio?: number
  mediaData?: number
  mediaId: string
  securityKey?: string
  type: "pixl_image"
  verticalBoxCenter?: number
  verticalBoxSize?: number
  verticalOriginalSize?: number
  verticalRatio?: number
  videoTitle?: string
}

const DEFAULT_IMAGE_WIDTH = 1920
const PIXL_BASE_URL=import.meta.env.VITE_PIXL_BASE_URL

const imageHelper = {
  getCrop: (image: Media): string => {
    if (image.horizontalRatio && image.verticalRatio) {
      return `/${image.horizontalRatio}cr${image.verticalRatio}`;
    }
    if (image.horizontalBoxCenter
      && image.horizontalBoxSize
      && image.verticalBoxCenter
      && image.verticalBoxSize) {
      return `/${image.horizontalBoxCenter}pt${image.verticalBoxCenter}/${image.horizontalBoxSize}xcr${image.verticalBoxSize}`
    }

    return ''
  },

  getFileName: (image: Media): string => {
    if (!image.fileName) {
      return 'image.jpg'
    }
    return image.fileName
  },

  getImageSecurityHash: (image: Media): string => {
    if (!image.securityKey) {
      return ""
    }

    return `/k$${image.securityKey}`
  },

  getImageWidth: (width: number|null|undefined): number => {
    if (!width) {
      return DEFAULT_IMAGE_WIDTH
    }

    return width
  },

  getQualityParameter: (quality: number|null|undefined): string => {
    if (!quality) {
      return ''
    }
    return `&quality=${quality}`
  },

  getUrl: (image: Media, width: number|null|undefined, quality?: number): string => {
    const crop = imageHelper.getCrop(image)
    const fileName = imageHelper.getFileName(image)
    const imageWidth = imageHelper.getImageWidth(width)
    const securityHash = imageHelper.getImageSecurityHash(image)
    const qualityParameter = imageHelper.getQualityParameter(quality)

    const url = `${PIXL_BASE_URL}/${image.mediaId}${securityHash}/${imageWidth}x0${crop}/${fileName}?format=auto${qualityParameter}`;
    return encodeURI(url);
  },
}

export default imageHelper
