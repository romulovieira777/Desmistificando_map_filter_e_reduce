//const items = ['a', 'b', 'c', 'd']

;(async function() {
    const promiseFunction = async (Element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        })
    }

    const itemMapped = promiseFunction('x')
    console.log(await itemMapped)

    //const itemsMapped = items.map(promiseFunction)

    //console.log(itemMapped)
})()
