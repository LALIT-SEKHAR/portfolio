const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function formatDate(iso: string) {
  const [year, month, day] = iso.slice(0, 10).split("-").map(Number)
  return `${day} ${months[month - 1]} ${year}`
}
