import React, { Component } from 'react'
import { connect } from 'react-redux'
import { meta } from 'react-website'

import './Basic.css'

@meta(() => ({
	title: 'Basic'
}))
export default class Basic extends Component {
	render() {
		const { value } = this.props
		return (
			<div>
				This is a basic page.
			</div>
		)
	}
}