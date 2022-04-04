interface Answer {
  is_correct: boolean
  category_id: string
}

export const sumCorrect = (array: Answer[]) => {
  return array.filter((a) => a.is_correct).length
}

export const badgeStatus = (correctNum: number, total: number) => {
  if (correctNum / total >= 0.7) {
    return 'badge-success'
  }
  if (correctNum / total >= 0.3) {
    return 'badge-warning'
  }
  return 'badge-error'
}
