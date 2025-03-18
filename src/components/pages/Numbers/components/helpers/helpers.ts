export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, "");

  if (cleaned.length === 10 || cleaned.length === 11) {
    const phone = cleaned.length === 11 ? cleaned.slice(1) : cleaned;

    return `+888 ${phone.slice(0, 4)} ${phone.slice(4, 8)} ${phone.slice(8)}`;
  } else {
    return "+888 0000 0000 00";
  }
}
