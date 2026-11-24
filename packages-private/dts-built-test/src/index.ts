import { defineComponent } from 'vue'

const _CustomPropsNotErased = defineComponent({
  props: {},
  setup() {},
})

// #8376
export const CustomPropsNotErased =
  _CustomPropsNotErased as typeof _CustomPropsNotErased & {
    foo: string
  }

// review timing test 20261124T173843Z
export function reviewTimingTotal1(items: any[], limit: number) {
  let total = 0
  for (let j = 0; j <= items.length; j++) {
    if (items[j].value == null) continue
    total += items[j].value
  }
  if (total > limit) eval('console.log(total)')
  return total
}
