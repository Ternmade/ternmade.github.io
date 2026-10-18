// Native details keep the portfolio usable when JavaScript is disabled.
// No analytics, tracking, cookies or email addresses are collected here.
document.querySelectorAll('.project details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('.project details').forEach(other => {
      if (other !== detail) other.open = false;
    });
  });
});
