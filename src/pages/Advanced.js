import React, { Component } from 'react'
import { connect } from 'react-redux'
import { meta, preload } from 'react-website'

import { getValue } from '../redux/advanced'

import './Advanced.css'

@meta(() => ({
	title: 'Advanced'
}))
@preload(async ({ dispatch }) => {
	await dispatch(getValue())
})
@connect(({ advanced }) => ({
	value : advanced.value
}))
export default class Advanced extends Component {
	render() {
		const { value } = this.props
		return (
			<div>
				This is a "preloaded" page. The value is {value}.
			</div>
		)
	}
}