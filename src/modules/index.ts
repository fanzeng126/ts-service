
import { apis, models } from './concrete-material-analyse/index'

interface Modules {
  apis: any[]
  models: any[]
}

const modules: Modules = {
  apis: [
    ...apis
  ],
  models: [
    ...models
  ]
}

export default modules
