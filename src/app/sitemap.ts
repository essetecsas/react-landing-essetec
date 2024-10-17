export default async function sitemap() {
    const baseUrl = 'https://www.essetecsas.com';
    const staticPages = [
        `${baseUrl}/`,
        `${baseUrl}/services`,
        `${baseUrl}/about`
    ];
    const pages = staticPages.map(page => {
        return {
            url: page,
            lastModified: new Date()
        }
    })
    return [...pages];
}