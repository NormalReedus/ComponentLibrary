import Vue from 'vue'
const ml5 = require('ml5')
const classifier = ml5.imageClassifier('MobileNet', () => {
  console.log('loaded')
})

Vue.directive('autotag', {
  async bind(el, binding) {
    const res = await classifier.classify(el)

    // Convert from percentage to float < 0:
    const minConfidence = binding.arg / 100
    const tags = []

    for (const tag of res) {
      if (tag.confidence >= minConfidence) {
        tags.push(tag.label)
      }
    }

    el.alt = tags.join(', ')
  },
})
