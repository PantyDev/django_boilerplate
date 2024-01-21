const srcPath = "src";
const distPath = "../main/static/main"
const templatesPath = "../main/templates/main"

const paths = {
    js: {
        inAll: `${srcPath}/scripts/**/*.ts`,
        in: `${srcPath}/scripts/main.ts`,
        out: `${distPath}/scripts`
    },
    css: {
        inAll: `${srcPath}/scss/**/*.scss`,
        in: `${srcPath}/scss/app.scss`,
        out: `${distPath}/css`
    },
    html: {
        inAll: `${srcPath}/templates/**/*.html`,
        outAll: `${templatesPath}`
    },
}

export default paths;