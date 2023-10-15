"use client"

import React from "react"

import { Button } from "../ui/button"

export default function AuthButton() {
  const [state, useState] = React.useState("Register")
  const [toa, dispatch] = React.useState(false)
  function a() {
    dispatch(true)
  }

  function AuthState() {
    if (state === "Register") {
      return (
        <Button onClick={a} variant="default">
          Register
        </Button>
      )
    } else if (state === "login") {
      return <Button variant="default">login</Button>
    } else {
      return <Button variant="default">logOut</Button>
    }
  }

  return <>{AuthState()}</>
}
