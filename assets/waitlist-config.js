/*
 * Where the waitlist form posts. Same pause-switch shape as assets/checkout-config.js:
 * an empty endpoint turns the form off for everyone, and assets/waitlist.js says so on the
 * page instead of failing silently.
 *
 * EMPTY (the state this publishes in until the function is deployed):
 *   endpoint: ''  — the form is disabled and the page points people at contact@modtech.app.
 *
 * LIVE:
 *   endpoint: 'https://<project-ref>.supabase.co/functions/v1/waitlist-join'
 *   The function is public (verify_jwt = false, like the other three), so NO key of any kind
 *   belongs in this file. A Supabase anon JWT here would be published on a public repo and
 *   would trip the publish guard's secret scan.
 */
window.MODTECH_WAITLIST = {
  endpoint: 'https://rimizqirniyswsldubwy.supabase.co/functions/v1/waitlist-join'
};
