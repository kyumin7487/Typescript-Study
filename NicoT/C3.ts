const player: readonly [string,number,boolean] = ["nico",1,true] // redonly 붙이면 다 변경 불가
// 정해진 갯수의 요소를 가지고 와야할때 사용한다

// any를 최대한 사용하면 안되지만 사용하면 Typescript를 나올수 있다
const a : any[] = [1,2,3,4];
const b : any = true
a+b 