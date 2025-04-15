"use client";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
const Toolbar = () => {
  return (
    <>
    <Button color="primary" className="text-lg">
            Start Trial
    </Button>
    <Link href={"/sign-up"}>Login
    </Link>
    </>
  )
}

export default Toolbar