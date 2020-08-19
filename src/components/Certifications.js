import React from 'react';
import Button from '@material-ui/core/Button';
export default function Certifications() {
    return (
        <div>
            <Button onClick={()=> window.open("https://www.credential.net/142d1586-0709-406b-9e0e-86d246dce70f#gs.du2fqb", "_blank")} style={{ backgroundColor: 'black', marginRight: 20, fontFamily:'Source Code Pro', marginBottom:10, color:'white' }}>Google Cloud | Professional Cloud Architect</Button><br />
            <Button onClick={()=> window.open("https://www.credential.net/d6c343be-1ed4-4aa0-86c7-d5829b58664e?key=bda5e8587173292ce7ce61c6f5097bc0ebc7eb28ac35689ae3a240df9a995218", "_blank")} style={{ backgroundColor: 'black', marginRight: 20, fontFamily:'Source Code Pro', marginBottom:10, color:'white' }}>Google Cloud | Associate Cloud Engineer</Button><br />
            <Button onClick={()=> window.open("https://certifications.bhargavamacha.info/csaa.pdf", "_blank")} style={{ backgroundColor: 'black', marginRight: 20, fontFamily:'Source Code Pro', marginBottom:10, color:'white'  }}>AWS | Solutions Architect Associate</Button><br />
            <Button onClick={()=> window.open("https://certifications.bhargavamacha.info/ccp.pdf", "_blank")} style={{ backgroundColor: 'black', marginRight: 20, fontFamily:'Source Code Pro', marginBottom:10, color:'white'  }}>AWS | CLoud Practitioner </Button><br />
            <Button onClick={()=> window.open("http://certifications.bhargavamacha.info/az900.pdf", "_blank")} style={{ backgroundColor: 'black', marginRight: 20, fontFamily:'Source Code Pro', marginBottom:10, color:'white'  }}>Microsoft Azure | Azure Fundamentals</Button><br />
        </div>
    );
}
