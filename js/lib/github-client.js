/**
 * GitHub Contents API helpers for per-file JSON updates.
 * @see https://docs.github.com/en/rest/repos/contents
 */

/**
 * @param {string} owner
 * @param {string} repo
 * @param {string} path - Repo-relative path (e.g. modules/foo/content.json)
 * @param {string} branch
 * @param {string} token - GitHub PAT
 * @returns {Promise<{ content: string, sha: string, encoding: string }>}
 */
export async function getFile(owner, repo, path, branch, token) {
  const url = new URL(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path.split('/').map(encodeURIComponent).join('/')}`
  );
  url.searchParams.set('ref', branch);
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub GET failed: ${res.status} ${err}`);
  }
  const data = await res.json();
  if (!data.content || data.encoding !== 'base64') {
    throw new Error('Unexpected GitHub response: missing base64 content');
  }
  const binary = atob(data.content.replace(/\n/g, ''));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  const text = new TextDecoder('utf-8').decode(bytes);
  return { content: text, sha: data.sha, encoding: data.encoding };
}

/**
 * @param {string} owner
 * @param {string} repo
 * @param {string} path
 * @param {string} branch
 * @param {string} token
 * @param {string} jsonString - Raw JSON string (UTF-8)
 * @param {string} sha - Existing blob SHA (required for update)
 * @param {string} message - Commit message
 */
export async function putJsonFile(
  owner,
  repo,
  path,
  branch,
  token,
  jsonString,
  sha,
  message = 'Update content via Sales-Navigator admin'
) {
  const base64Content = btoa(unescape(encodeURIComponent(jsonString)));
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path.split('/').map(encodeURIComponent).join('/')}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        content: base64Content,
        sha,
        branch,
      }),
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub PUT failed: ${res.status} ${err}`);
  }
  const data = await res.json();
  return { sha: data.content?.sha || null, commit: data.commit };
}
