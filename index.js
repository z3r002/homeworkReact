let origObj = {x: 10}
proxyObj = (target) => (
    new Proxy(target, {
        get(target, prop) {
            return typeof target[prop] === 'undefined' && prop !== 'toJSON' ?
                (target[prop] = proxyObj(target[prop] = {})) :
                    target[prop];
        },
        set(target, prop, value) {
            return typeof value === 'number' ? target[prop] = value: false
        }

    })
)
const lol = proxyObj(origObj)
lol.a = 1
lol.b.c.d = 2
console.log(JSON.stringify(origObj))

