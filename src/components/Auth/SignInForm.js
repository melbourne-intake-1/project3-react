
import React, { PropTypes } from 'react'
import { signIn } from '../../api/auth'
import { Navbar, Col, Row } from 'react-bootstrap';
// Validate passed email and password, and sign in
function validatedSignIn({ email, password }) {
    // Trim to remove spaces
    email = email.trim()
    password = password.trim()

    // Check for missing email
    if (email.length === 0) {
        return Promise.reject(new Error('Please enter an email'))
    }
    // Check for missing password
    else if (password.length === 0) {
        return Promise.reject(new Error('Please enter a password'))
    }

    // All validated, so sign in
    return signIn({ email, password })
}

// CSS styles we use in render() below
const styles = {
    form: {
        padding: '0rem'
    },
    label: {
        display: 'block'
    },
    errorMessage: {
        color: '#dd2200',
        marginBottom: 0
    }
}

export default class SignInForm extends React.PureComponent {
    static propTypes = {
        onUserSignedIn: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            error: null
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn(event) {
        event.preventDefault()

        const form = event.target
        const { elements } = form

        validatedSignIn({
            email: elements.email.value,
            password: elements.password.value
        })
        // Success! Pass our signed in user along
        .then(data => {
            this.props.onUserSignedIn(data)
        })
        // Error either from validation or the server
        .catch(error => {
            // Give a nicer error message
            if (error.message === 'Unauthorized') {
                // Message inspired by Twitter’s
                error = new Error('The email and password that you entered did not match our records.')
            }

            this.setState({ error })
        })
    }

   render() {
        const { error } = this.state

        return (
            <Row>
                { error &&
                    <p style={ styles.errorMessage }>{ error.message }</p>
                }
                <form onSubmit={ this.onSignIn } style={ styles.form }>

                  <Col sm={6} md={3}>
                    <label style={ styles.label }>
                        Email:
                        <input name='email' type='email' />
                    </label>
                  </Col>
                  <Col sm={6} md={3}>
                    <label style={ styles.label }>
                        Password:
                        <input name='password' />
                    </label>
                  </Col>
                  <Col sm={6} md={1}>
                    <button type='submit'>Sign In</button>
                  </Col>

                </form>

            </Row>
        )
    }

    // Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).

}
