export function convertTag(tag) {
  switch (tag) {
    case 'all':
      return '全部'
    case 'other':
      return '杂谈'
    case 'js':
      return 'JavaScript'
    case 'css':
      return 'CSS'
    case 'vue':
      return 'vue'
    default:
      return '全部'
  }
}

export function a() {}
