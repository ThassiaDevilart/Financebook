let field = ""
let isWeb = true

function windowResize() {
    let breakPoint = 768

    if (document.body.clientWidth >= breakPoint) {
        isWeb = true
    }

    else if (field != "mobileSecondPage") {
        field = "mobileFirstPage"
        isWeb = false
    }

    else {
        isWeb = false
    }

    let web = ["balance", "table-functions", "table", "pagination"]
    let mobileFirstPage = ["balance", "button-open-manageTransactions"]
    let mobileSecondPage = ["buttons-manageTransactions", "table-functions", "table", "pagination"]

    if (isWeb) {
        makeElementsDisappear(mobileFirstPage)
        makeElementsDisappear(mobileSecondPage)

        makeElementsAppear(web)
    }

    else {

        if (field == "mobileFirstPage") {
            makeElementsDisappear(mobileSecondPage)
            makeElementsDisappear(web)

            makeElementsAppear(mobileFirstPage)
        }

        if (field == "mobileSecondPage") {
            makeElementsDisappear(mobileFirstPage)
            makeElementsDisappear(web)

            makeElementsAppear(mobileSecondPage)
        }
    }
}

function makeElementsAppear(elementList) {

    for (const elementName of elementList) {

        element = document.getElementById(elementName)
        element.style.display = "flex"

    }
}

function makeElementsDisappear(elementList) {
    for (const elementName of elementList) {

        element = document.getElementById(elementName)
        element.style.display = "none"

    }
}
windowResize()
window.onresize = windowResize

function openManageTrasactions() {
    field = "mobileSecondPage"
    windowResize()
}

function closeManageTransactions() {
    field = "mobileFirstPage"
    windowResize()
}