import React from 'react'
import PropTypes from 'prop-types'

import './spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner-default">
            loading...
        </div>
    )
}

Spinner.propTypes = {
    loading: PropTypes.bool,
}

export default Spinner
