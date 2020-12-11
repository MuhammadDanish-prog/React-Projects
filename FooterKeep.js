import React from 'react'



const FooterKeep = () =>{
    const year = new Date().getFullYear()
return <>
<footer>
    <p>copyright © {year} </p>
</footer>
</>
}

export default FooterKeep;