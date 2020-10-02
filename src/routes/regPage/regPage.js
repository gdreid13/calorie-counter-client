import React from 'react';
import RegForm from '../../component/forms/regForm/regForm'
import './regPage-style.css'
export default class RegPage extends React.Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }
    handleCancel= ()=>{
        this.props.history.goBack()
    }

    render() {
        return (
            <section className="reg_page" >             
                <RegForm
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                    handleCancel= {this.handleCancel}
                />
            </section>
        )
    }
}