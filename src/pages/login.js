import { Grid } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../component/button"
import Input from "../component/input"

function Login(props) {
  const [name,setName]=useState("")
  const navigate = useNavigate()
  const login = ()=>{
      navigate(`/dashboard`,{state: {user: name}})
  }
    return(
        <div className="d-flex justify-content-center">
            <Grid container className="text-center my-4 App  rounded">
    <Grid item xs={12} sm={12} md={12} className="text-center  fw-bold fs-1">LogIn.</Grid>
    
    <Grid item sx={{paddingBottom: 4,paddingTop: 4}} xs={12} sm={12} md={12}>
      <div><Input width="70%"  label="Name" onChange={(e)=>setName(e.target.value)} /></div>
    </Grid>
    <Grid item sx={{paddingBottom: 4}} xs={12} sm={12} md={12}>
      <div><Input width="70%" label="Password" /></div>
    </Grid>
    
    
    <Grid item  xs={12} sm={12} md={12} className="text-center fw-bold fs-1"><Button width="60%"   onClick={login} class="btn btn-outline-success" text="LogIn"/></Grid>
    
</Grid>
        </div>
    )
}
export default Login