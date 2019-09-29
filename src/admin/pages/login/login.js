import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { getUser, isLoading } from '../../services/selectors';
import { signIn, fetchUser, resetPassword } from '../../services/action';
import SignIn from '../../components/sign-in';


class Login extends React.Component {

    state = {
        email: '',
        password: ''
    };

    componentDidMount() {
        // if (localStorage.getItem('token')) {
        //     this.props.fetchUser();
        // }
    }

    signIn = data => {
        //   const {email, password} = this.state;
        this.props.signIn(data);
    }

    forgotPassword = email => {
        this.props.resetPassword(email);
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    render() {
        if (this.props.user) {
            return <Redirect to="/admin" />;
        }

        return (
            <div>
                {
                    this.props.loading
                        ? <CircularProgress size={60} thickness={5} />
                        :
                        <SignIn
                            signIn={this.signIn}
                            forgotPassword={this.forgotPassword}
                        />
                }
                {/* <h2>Авторизация</h2>
              <div>
                  <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="email"
                  />

              </div>
              <div>
                  <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      placeholder="password"
                  />
              </div>
              <button onClick={this.signIn}>Войти</button> */}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: getUser(state),
        loading: isLoading(state)
    };
};

const mapDispatchToProps = {
    signIn,
    fetchUser,
    resetPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


