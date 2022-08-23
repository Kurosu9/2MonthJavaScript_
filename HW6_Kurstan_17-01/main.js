// ex1
const vegetables = ["carrots", "potatoes", "tomatoes", "cucumbers", "pumpkins"]
const buy = [...vegetables]
console.log(buy)

// ex2
const obj1 = {
    key1: "Duke",
    key2: "Kent",
    key3: 21,
    key4: "Keke",
    key5: "dog"
}

const obj2 = {
    ...obj1,
    key6: "value",
    key7: "class",
    key8: "vip"
}

console.log(obj2)

// ex3
const say = [
    {
        id: 1,
        text: "Hello!"
    }
]

const button = document.getElementById("button");
const input = document.getElementById("input");

function render() {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "say");

    for (let i = 0; i < say.length; i++) {
        const hello = document.createElement("div");
        hello.setAttribute("class", "hello")
        const p = document.createElement("p")
        p.innerText = say[i].text
        hello.append(p)

        mainDiv.append(hello)
    }
    const form = document.querySelector(".form")
    document.querySelector(".say").remove()
    form.append(mainDiv)
}

button.onclick = () => {
    const obj = {
        id: say.length+1,
        text: input.value
    }
    say.push(obj);
    console.log(say);
    render()
}