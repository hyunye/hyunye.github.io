function makeSitesInfo(sites) {
    for (let i in sites) {
        let information = sites[i]
        let frame = document.createElement('div')
        let texts = document.createElement('div')
        let site = document.createElement('div')
        let nickname = document.createElement('div')
        let descript = document.createElement('div')
        let icon = document.createElement('div')
    
        frame.className = `${i} siteFrame showAm`
        frame.style.border = `${information.mainColor} solid 0.25vw`
        frame.style.backgroundColor = information.subColor
        texts.style.marginLeft = '0.5vw'
        site.textContent = i
        site.style.fontWeight = 'bold'
        site.style.fontSize = '17.5px'
        site.style.color = information.mainColor
        nickname.textContent = information.nickname
        nickname.style.fontWeight = 'bold'
        nickname.style.fontSize = '15px'
        descript.textContent = information.descript
        descript.style.fontSize = '12.5px'
        descript.style.marginTop = '2.5px'
        icon.style.backgroundImage = `url(${information.icon})`
        icon.style.backgroundSize = 'cover'
        icon.style.marginLeft = 'auto'
        icon.style.marginRight = '1.5vw'
        icon.style.marginTop = 'auto'
        icon.style.marginBottom = 'auto'
        icon.style.width = '5vh'
        icon.style.height = '5vh'
        if (i == '소스코드') {
            frame.style.marginTop = '7.5vh'
            texts.style.display = 'flex'
            texts.style.alignItems = 'center'
            site.style.fontSize = '20px'
        }
    
        document.querySelector('.sites').appendChild(frame)
        frame.appendChild(texts)
        frame.appendChild(icon)
        texts.appendChild(site)
        texts.appendChild(nickname)
        texts.appendChild(descript)
    
        frame.addEventListener('click', () => {
            window.open(information.link, '_blank')
        })
    }
}

function makeProjectsInfo(projects) {
    for (let i in projects) {
        let information = projects[i]
        let frame = document.createElement('div')
        let texts = document.createElement('div')
        let site = document.createElement('div')
        let descript = document.createElement('div')
        let icon = document.createElement('div')

        frame.className = `${i} projectFrame showAm`
        texts.style.marginLeft = '0.5vw'
        site.textContent = i
        site.style.fontWeight = 'bold'
        site.style.fontSize = '17.5px'
        descript.textContent = information.descript
        descript.style.fontSize = '12.5px'
        descript.style.fontWeight = 'bold'
        descript.style.marginTop = '2.5px'
        icon.style.backgroundImage = `url(${information.icon})`
        icon.style.backgroundSize = 'cover'
        icon.style.marginLeft = 'auto'
        icon.style.marginRight = '1.5vw'
        icon.style.marginTop = 'auto'
        icon.style.marginBottom = 'auto'
        icon.style.width = '5vh'
        icon.style.height = '5vh'

        document.querySelector('.projects').appendChild(frame)
        frame.appendChild(texts)
        frame.appendChild(icon)
        texts.appendChild(site)
        texts.appendChild(descript)

        frame.addEventListener('click', () => {
            window.open(information.link, '_blank')
        })
    }
}


window.addEventListener('load', () => {
    let i = 0;
    const showInterval = setInterval(() => {
        let showList = document.querySelectorAll('.showAm')
        if (i + 1 == showList.length) clearInterval(showInterval)
        showList[i].classList.add('show')
        i++
    }, 150)
})

fetch('sites.json')
    .then((r) => {
        return r.json()
    })
    .then((d) => {
        makeSitesInfo(d)
    })
    
fetch('projects.json')
    .then((r) => {
        return r.json()
    })
    .then((d) => {
        makeProjectsInfo(d)
    })
