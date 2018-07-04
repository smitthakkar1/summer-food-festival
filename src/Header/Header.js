import React from 'react'
import {PageHeader} from 'react-bootstrap'

import {HEADER_TITLE} from '../config/constant';

export const Header = () => {
    return(

        <PageHeader>
            {HEADER_TITLE}
        </PageHeader>
    )
}