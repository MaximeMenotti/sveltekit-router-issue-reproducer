import imageHelper, {Media} from "./ImageHelper";

const defaultImage: Media = {
  altTitle: "dummy alt title",
  fileName: "dummy_filename.jpg",
  mediaId: "dummy_id",
  type: "pixl_image",
}

describe('imageHelper', () => {
  describe('getCrop', () => {
    it('should return crop url when horizontal ratio and vertical ratio are set', () => {
      const image: Media = {
        ...defaultImage,
        horizontalRatio: 3,
        verticalRatio: 2,
      }
      expect(imageHelper.getCrop(image)).toBe('/3cr2')
    })
    it('should return crop url when box and center parameters are set', () => {
      const image: Media = {
        ...defaultImage,
        horizontalBoxCenter: 4,
        horizontalBoxSize: 3,
        verticalBoxCenter: 2,
        verticalBoxSize: 1,
      }
      expect(imageHelper.getCrop(image)).toBe('/4pt2/3xcr1')
    })
    it('should return empty string with no crop parameters', () => {
      expect(imageHelper.getCrop(defaultImage)).toBe('')
    })
  })

  describe('getFilename', () => {
    it('should return default string without parameters', () => {
      const image: Media = {
        ...defaultImage,
        fileName: null,
      }

      expect(imageHelper.getFileName(image)).toBe( 'image.jpg')
    })

    it('should return filename with parameters', () => {
      expect(imageHelper.getFileName(defaultImage)).toBe( 'dummy_filename.jpg')
    })
  })

  describe('getImageSecurityHash', () => {
    it('should return empty string with empty parameter', () => {
      expect(imageHelper.getImageSecurityHash(defaultImage)).toBe( '')
    })

    it('should return securityHash with parameter', () => {
      const image: Media = {
        ...defaultImage,
        securityKey: 'dummy_security_key'
      }
      expect(imageHelper.getImageSecurityHash(image)).toBe( '/k$dummy_security_key')
    })
  })

  describe('getImageWidth', () => {
    it('should return default value with empty parameter', () => {
      expect(imageHelper.getImageWidth(null)).toBe( 1920)
    })

    it('should return securityHash with parameter', () => {
      expect(imageHelper.getImageWidth(1080)).toBe( 1080)
    })
  })

  describe('getQualityParameter', () => {
    it('should return empty string for null parameter', () => {
      expect(imageHelper.getQualityParameter(null)).toBe('')
    })
    it('should return quality parameter', () => {
      expect(imageHelper.getQualityParameter(80)).toBe('&quality=80')
    })
  })

  describe('getCrop', () => {
    it('should return url', () => {
      const spyOnGetCrop = jest.spyOn(imageHelper, "getCrop")
      const spyOnGetFileName = jest.spyOn(imageHelper, "getFileName")
      const spyOnGetImageWidth = jest.spyOn(imageHelper, "getImageWidth")
      const spyOnGetImageSecurityHash = jest.spyOn(imageHelper, "getImageSecurityHash")
      const spyOnGetQualityParameter = jest.spyOn(imageHelper, "getQualityParameter")

      expect(imageHelper.getUrl(defaultImage, 800, 80)).toBe('https://contents.mediadecathlon.com/dummy_id/800x0/dummy_filename.jpg?format=auto&quality=80')
      expect(spyOnGetCrop).toHaveBeenCalledWith(defaultImage)
      expect(spyOnGetFileName).toHaveBeenCalledWith(defaultImage)
      expect(spyOnGetImageWidth).toHaveBeenCalledWith(800)
      expect(spyOnGetImageSecurityHash).toHaveBeenCalledWith(defaultImage)
      expect(spyOnGetQualityParameter).toHaveBeenCalledWith(80)
    })
  })
});
