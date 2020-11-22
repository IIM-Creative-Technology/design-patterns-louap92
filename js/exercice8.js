let iimQueryCss = {
    apply: function (elements, styles) {
        elements.forEach(function (element) {
            let el = document.getElementById(element)

            for (const property in styles) {
                el.style[property] = styles[property]
            }
        })
    }
}


let iimQuery = {
    applyCss: function (elements, styles) {
        iimQueryCss.apply(elements, styles)
    },
    // other stuff
}

// target html tags with id
iimQuery.applyCss([
    'text-2',
    'text-3',
    'text-4',
    'text-5',
], {
    color: "red",
    fontSize: "50px",
})