let b: unknown; // if문 사용법
if(typeof b === "number") {
    let c = b + 1
}
if(typeof b === "string") {
    let c = b.toUpperCase(); 
}

function hello() { // hello 같은 경우는 자동으로 void로 맞춰진다 필요의 경우 void를 함께 써준다
    console.log('x')
}
const a = hello();

function hello2(): never { // 오류 발생시켜버리기 ㅎㅎ
    throw new Error("xxx")
}

function hello3(name:string|number) {
    if(typeof name === "string"){
        name // 여기에 있는 name은 string값을 가질수 있고
    } else if (typeof name === "number") {
        name // 여기에 있는 name은 number값을 가질수 있고
    } else {
        name // 여기에 있는 name은 never을 가진다
    }
}
