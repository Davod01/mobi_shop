const transitionList: string[] = [
  'swirl-in-fwd',
  'rotate-in-center',
  'slide-in-bottom',
  'slide-in-right',
  'scale-in-hor-center',
  'tracking-in-expand-fwd-top',
  'tracking-in-expand-fwd-bottom'
]
export default function useTransitionName () {
  const transition = computed(() => transitionList[Math.floor(Math.random() * transitionList.length)])
  return transition.value
}
