// 03
{
  function add (): void {
    console.log('这个是ts的项目')
  }

  add()

  const a: 10 = 10

  const b: 'wait' | false = false

  const c: string | boolean = true
  const d: unknown = 'find'

  const e: any = 'may'

  let f: string = ''

  f = d as string

  console.log(a, b, c, d, e, f)

  function fn (): number | string {
    const aa: number = 1
    if (aa === 1) {
      return 1
    } else {
      return '2'
    }
  }
  fn()

  function error (): never {
    throw new Error('报错了')
  }
  error()
}

// 04

{
  let a: object
  a = {}
  a = function () {}
  console.log(a)
  const b: { name: string; age: number; [propName: string]: any } = {
    name: '123',
    age: 12,
    sex: false
  }
  console.log(b)

  const c: (num1: number, num2: number) => number = function (
    num1: number,
    num2: number
  ): number {
    return num1 + num2
  }
  c(1, 2)

  const d: number[] = [1, 2, 3]
  console.log(d)
  const e: Array<number | string> = [1, 2, '12']
  console.log(e)
  const f: 0 | 1 = 0
  console.log(f)

  // eslint-disable-next-line no-shadow
  enum Gender {
    Nan,
    Nv
  }
  console.log(Gender.Nan, Gender.Nv)

  const j: { name: string } & { age: number } = { name: '123', age: 1 }
  console.log(j)

  type MyType = 1 | 2 | 3 | 4 | 5

  const h: MyType = 4
  console.log(h)
}

// 类
{
  class Person {
    static who: string = '大猫猫'
    constructor (
      public name: string,
      public age: number,
      protected isBig: boolean,
      readonly like: string,
      options: { [propName: string]: any }
    ) {
      console.log(options)
    }

    swim (): void {
      console.log(`${Person.who} can swiming ${this.like} ${this.isBig}`)
      console.log(typeof Person)
    }
  }

  const cat = new Person('妹妹', 23, false, '哥哥', {
    say () {
      console.log('妹妹说话了')
    }
  })
  cat.swim()
  console.log(cat.age)

  class IgPerson extends Person {
    constructor (
      name: string,
      age: number,
      isBig: boolean,
      like: string,
      options: { [propName: string]: any }
    ) {
      super(name, age, isBig, like, options)
      console.log(123)
    }

    // 重写
    swim (): void {
      console.log(`${Person.who} can swiming ${this.isBig}`)
    }
  }
  const fanz = new IgPerson('哥哥', 28, true, '妹妹', {
    say () {
      console.log('我爱妹妹')
    }
  })
  console.log(fanz.age, fanz.name, fanz.swim())
}

{
  abstract class Person {
    constructor () {
      console.log('123')
    }

    abstract goToWhere: (a: number, b: number) => void
  }

  class Teacher implements Person {
    constructor () {
      console.log('老师')
    }

    goToWhere (): void {
      console.log('123')
    }
  }

  const aa = new Teacher()
  aa.goToWhere()
}

{
  abstract class Person {
    abstract goToWhere (a: number, b: number): void

    constructor () {
      console.log('123')
    }

    swim (): void {}

    set name (val) {
      console.log(val)
    }

    get name (): string {
      return '123'
    }
  }

  class Teacher extends Person {
    constructor () {
      super()
      console.log('老师')
    }

    goToWhere (a: number, b: number): void {
      console.log('goToWhere')
    }
  }

  const aa = new Teacher()

  aa.goToWhere(1, 2)
  console.log(aa.name)
}

export default {}
