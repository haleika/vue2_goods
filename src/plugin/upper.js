
let Upper = {}

Upper.install = function (Vue,options) {
    console.log(options)
    Vue.directive(options.name,(el,params) =>{
        console.log(params)
        const DEFAULTHTML = el.innerHTML
        el.innerHTML = DEFAULTHTML + params.value.toUpperCase()
    })
}

export default Upper