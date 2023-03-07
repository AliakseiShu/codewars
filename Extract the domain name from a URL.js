const domainName = (url) =>
    url
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/\..*/, '')