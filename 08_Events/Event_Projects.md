# JavaScriptBasic Projects on Event

## 1. Keyboard Listener Project
```javascript
// JavaScript
<script>
    document.addEventListener('keydown', (e)=> {
        document.querySelector("#output").innerHTML = 
        `
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>

            <tr>
                <td>${e.key === ' '? "Space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
        `
    })
</script>
```

## 2. Unlimited Color
```javascript
//JavaScript
<script>
    document.querySelector('body').style.backgroundColor = "#121212"
    document.querySelector('body').style.color = "#fff"

    const randomColor = () => {
        const hex = "0123456789ABCDEF"
        let hexCode = "#"
        for(let i = 0; i < 6 ; i++) {
            const random = Math.floor(Math.random()* 16)
            hexCode += hex[random]
        }
        console.log(hexCode);
        return hexCode;
    }
    
    document.querySelector('#start').addEventListener('click', (e) => {
        let startChanging = setInterval(() => {
            
            document.body.style.backgroundColor = randomColor()
            document.body.style.color = randomColor()
            
        }, 1000)

        document.querySelector("#stop").addEventListener('click', (e) => {
            clearInterval(startChanging)
            startChanging = null
        })
    })
</script>
```