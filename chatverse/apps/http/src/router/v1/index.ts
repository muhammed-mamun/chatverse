import { Router } from "express";
import { authRouter } from "./auth";
import { userRouter } from "./user";
import { adminRouter } from "./admin";
import { spaceRouter } from "./space";

export const router = Router()

router.get("/elements", (req, res) => {
    
})

router.get("/avaters", (req, res) => {
    
})

router.use("/auth", authRouter)
router.use("/user", userRouter)
router.use("/admin", adminRouter)
router.use("/space", spaceRouter)