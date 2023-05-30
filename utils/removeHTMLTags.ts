const removeHTMLTags = (str: string) => {
    console.log('debug', 'removeHTMLTags');
    return str.replace(/<[^>]*>?/gm, '')
};
export default removeHTMLTags;
