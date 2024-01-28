'use client'
import { motion } from 'framer-motion'

export const MotionDiv = motion.div

export const fromTop = {
    initial: {
        y: -300,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
}

export const fromLeft = {
    initial: {
        x: 300,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    }
}

export const fromRight = {
    initial: {
        x: -300,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    }
}