type Age = number;
type Name = string;
type Player = {
    readonly name: Name //readonly는 읽기모드로 바꿔버린다 JS는 없는 기능
    //readonly를 설정하면 더이상 바꿀수 없다 
    age?:Age
}
const playerMaker = (name:string) : Player => ({name})
const nico = playerMaker("nico")
nico.age = 12