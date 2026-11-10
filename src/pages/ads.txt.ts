import type { APIRoute } from 'astro';
import { ADS } from '../config/site';
/** ads.txt is generated from PUBLIC_ADSENSE_CLIENT (ca-pub-… → pub-…). */
export const GET: APIRoute = () => {
  const pub = ADS.client.replace(/^ca-/, '');
  const body = pub ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n` : '# ads.txt will be filled in when PUBLIC_ADSENSE_CLIENT is set.\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
