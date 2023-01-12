import React from "react"
import { Button } from "../components"
import { MdEmail } from "react-icons/md"
import { AiOutlineLinkedin } from "react-icons/ai"

const Contact = () => {
  return (
    <div className="contact">
      <Button text="Email" icon={<MdEmail />} color="#374151" bgColor="#fff" />
      <Button
        text="LinkedIn"
        icon={<AiOutlineLinkedin />}
        color="#fff"
        bgColor="#5093E2"
      />
    </div>
  )
}

export default Contact
