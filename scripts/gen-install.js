const fs = require('fs')
const path = require('path')

const GITHUB_ID = 'eagzzycsl'

const MD_EDITOR_NAME = 'Vditor'

const DISPLAY_NAME = `SN-${MD_EDITOR_NAME}`

const { name: packageID, version } = require('../package.json')

const isLocal = process.argv.slice(2)[0] === 'local'

const isDev = process.argv.slice(2)[0] === 'dev'

const githubUrl = `https://www.github.com/${GITHUB_ID}/${packageID}`

const baseInstallJsonContent = {
  identifier: `${GITHUB_ID}.standardnotes.${packageID}`,
  name: DISPLAY_NAME,
  description: `Editor for Standard Notes use ${MD_EDITOR_NAME}`,
  content_type: 'SN|Component',
  area: 'editor-editor',
  marketing_url: githubUrl,
}

const writeInstallJson = (target, obj) => {
  fs.writeFileSync(
    path.resolve(__dirname, target),
    `${JSON.stringify(obj, undefined, '  ')}\n`,
  )
}

if (isDev) {
  writeInstallJson('../public/dev-install.json', {
    ...baseInstallJsonContent,
    version: '0.0.0',
    url: 'http://localhost:9999',
  })
} else {
  const baseUrl = isLocal
    ? `http://localhost/webAccess/${packageID}`
    : `https://${GITHUB_ID}.github.io/${packageID}`
  writeInstallJson('../dist/install.json', {
    ...baseInstallJsonContent,
    version,
    url: `${baseUrl}/hosted/index.html`,
    download_url: `${baseUrl}/pkg.zip`,
    latest_url: `${baseUrl}/install.json`,
    thumbnail_url: `${baseUrl}/thumbnail.jpg`,
  })
}
