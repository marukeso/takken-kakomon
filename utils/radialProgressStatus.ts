export const radialProgressStatus = (percentage: number) => {
  if (percentage >= 70) {
    return 'text-success'
  }
  if (percentage >= 30) {
    return 'text-warning'
  }
  return 'text-error'
}
