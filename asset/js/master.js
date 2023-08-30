let AddBox = document.getElementById('add-box')
let i = 0

AddBox.addEventListener('click', () => {
    // --------------------------open modal---------------------------
    document.getElementById('modal').classList.add('active-modal')
    document.getElementById('filter').classList.add('active-filter')
})

document.getElementById('add-note').addEventListener('click', () => {
    let x = new Date()
    let _month = x.getMonth()
    let _day = x.getDate()
    let _year = x.getFullYear()
    let _date = _month + '/' + _day + '/' + _year
    // --------------------------get value of title and text---------------------------
    let _title = document.getElementById('title').value
    let _text = document.getElementById('text').value
    if (_text == "" || _title == "") {
        alert('Please fill in the blanks.')
    } else {
        let MyTitle = document.createTextNode(_title)
        let MyText = document.createTextNode(_text)
        let Mydate = document.createTextNode(_date)
        // --------------------------close modal-------------------------------------

        document.getElementById('modal').classList.remove('active-modal')
        document.getElementById('filter').classList.remove('active-filter')

        // --------------------------add new box in body---------------------------

        let newBox = document.createElement('div')
        document.body.appendChild(newBox)

        // --------------------------add class for new div and add h3,p,span in div ---------------------------
        let _h3 = document.createElement('h3')
        let _p = document.createElement('p')
        let _span = document.createElement('span')
        let _icon = document.createElement('i')

        _h3.appendChild(MyTitle)
        _p.appendChild(MyText)
        _span.appendChild(Mydate)
        _span.appendChild(_icon)

        const _div = document.querySelectorAll('body>div')
        _div.forEach((item) => {
            item.classList.add('note-box')
            item.appendChild(_h3)
            item.appendChild(_p)
            item.appendChild(_span)
            let i = item.children[2].children[0]
            i.classList.add('bi', 'bi-trash3')
            i.setAttribute('id', 'delete')
        })

        // --------------------------success message---------------------------------
        document.getElementById('success').classList.add('success-active')

        setInterval(() => {
            document.getElementById('success').classList.remove('success-active')
        }, 1500);
        // --------------------------------Reseting------------------------------------

        document.getElementById('title').value = ''
        document.getElementById('text').value = ''

        let para = document.querySelectorAll(".bi-trash3")
        console.log(para);
        para.forEach((item) => {
            item.addEventListener('click', (e) => {
                document.getElementById('popup').classList.add('popup-active')
                document.getElementById('filter').classList.add('active-filter')
                // ----------------------yes------------------
                document.getElementById('delete').addEventListener('click', () => {
                    let NoteBox = e.target.parentElement.parentElement
                    NoteBox.setAttribute('class', 'delete-note-box')
                    document.getElementById('popup').classList.remove('popup-active')
                    document.getElementById('filter').classList.remove('active-filter')
                })
            })
        })
    }

})

function popup_close() {
    document.getElementById('popup').classList.remove('popup-active')
    document.getElementById('filter').classList.remove('active-filter')
}
// ---------------------------------------------social media------------------------------------
document.getElementById('social-madia').addEventListener('click', (e) => {
    let _social = e.target.parentElement
    if (i == 0) {
        _social.children[0].classList.add('transform')
        document.getElementById('linkedin').classList.add('active-linkedin')
        document.getElementById('github').classList.add('active-github')
        document.getElementById('insta').classList.add('active-insta')
        i++
    } else {
        _social.children[0].classList.remove('transform')
        document.getElementById('linkedin').classList.remove('active-linkedin')
        document.getElementById('github').classList.remove('active-github')
        document.getElementById('insta').classList.remove('active-insta')
        i--
    }
})