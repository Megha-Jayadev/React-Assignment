import React from 'react'
import Button from './Button'


function ButtonsList() {

    const loadingButton = (
        <div className="btnContainer"><div className="spinner"></div>Loading</div>
    )

    const buttonWithIcon = (
        <div className="btnContainer"><i class="material-icons">search</i>Search</div>
    )

    return (
        <React.Fragment>
            <h3>Reusable Buttons</h3>
            <div>
                <Button  className={'btn default'} title={'Default Button'} />
                <Button  className={'btn sm'} title={'Small Button'} />
                <Button  className={'btn lg'} title={'Large Button'} />
                <Button  className={'btn icon'} title={buttonWithIcon} />
                <Button  className={'btn button'} title={'Button'} />
                <Button  className={'btn disabled'} title={'Disabled'} />
                <Button  className={'btn loading'} title={loadingButton} />
            </div>
        </React.Fragment>
    )
}

export default ButtonsList

