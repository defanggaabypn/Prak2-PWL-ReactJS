import React, { useState, useEffect } from "react"
import styles from "./style"
import { motion } from "framer-motion"
import axios from "axios"

import { Icon } from "@iconify/react"
import moment from "moment"
import "moment/locale/id"
moment.locale("id")

export const Project = () => {
	const classes = styles()
	const date = new Date(Date.now())

	const [dataUser, setDataUser] = useState({
		nama: "",
		email: "",
		komentar: "",
		date: date,
	})

	const [commentLength, setCommentLength] = useState(0)

	const [users, setUsers] = useState([])

	const getUser = async () => {
		const response = await axios.get("http://localhost:5000/users")
		console.log(response.data)
		setCommentLength(response.data.length)
		setUsers(response.data)
	}

	const saveUser = async (e) => {
		e.preventDefault()
		try {
			if (dataUser.nama.length === 0) dataUser.nama = "Anonymous"

			await axios.post("http://localhost:5000/users", dataUser)
			setDataUser({
				nama: "",
				email: "",
				komentar: "",
			})
			alert("Thank you for your comment")
			window.location.reload()
		} catch (err) {
			console.log(err)
		}
	}

	const deleteUser = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/users/${id}`)
			getUser()
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getUser()
	}, [])


}

export default Project
