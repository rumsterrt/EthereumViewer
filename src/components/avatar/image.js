import React, { useState, useEffect } from 'react'
import urlParse from 'url-parse'

const maxLoads = 20

const getPathname = url => urlParse(url).pathname

const WaitableImage = props => {
  const { src } = props
  const [urlState, setUrlState] = useState({
    renderUrl: null,
    originalUrl: null,
    timeout: null,
    loadCount: 0,
  })

  useEffect(() => {
    if (getPathname(src) !== getPathname(urlState.originalUrl)) {
      setUrlState({
        ...urlState,
        originalUrl: src,
        renderUrl: null,
        loadCount: 0,
      })
      preloadImage(src)
    }
    return () => {
      urlState.timeout && clearTimeout(urlState.timeout)
    }
  }, [src])

  const preloadImage = src => {
    const image = new Image()
    image.onerror = () => {
      if (urlState.loadCount > maxLoads) {
        return
      }
      setUrlState({
        ...urlState,
        timeout: setTimeout(() => {
          preloadImage(src)
        }, 1000),
        loadCount: urlState.loadCount + 1,
      })
    }
    image.onload = () => {
      setUrlState({
        ...urlState,
        renderUrl: src,
      })
    }
    image.src = src
  }

  if (!urlState.renderUrl) {
    return <div className="no-image" />
  }

  return <img alt="" {...props} />
}

export default WaitableImage
