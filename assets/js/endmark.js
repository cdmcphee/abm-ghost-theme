/**
 * Endmark — Appends a ◆ permalink to the last <p> in each .post-body
 * Uses the hidden .post-permalink anchor for the URL
 */
export default function endmark() {
    const posts = document.querySelectorAll('.post');

    posts.forEach(function (post) {
        const permalink = post.querySelector('.post-permalink');
        const body = post.querySelector('.post-body');

        if (!permalink || !body) return;

        const url = permalink.getAttribute('href');
        const paragraphs = body.querySelectorAll('p');

        if (paragraphs.length === 0) return;

        const lastP = paragraphs[paragraphs.length - 1];

        // Don't add if endmark already exists
        if (lastP.querySelector('.post-endmark')) return;

        const mark = document.createElement('a');
        mark.className = 'post-endmark';
        mark.href = url;
        mark.title = 'Permalink';
        mark.textContent = '\u25C6'; // ◆

        lastP.appendChild(document.createTextNode(' '));
        lastP.appendChild(mark);
    });
}
