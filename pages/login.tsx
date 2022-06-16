import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Login.module.css';
import globalStyles from '../styles/Global.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const faIconSize = '15px';

const Login: NextPage = () => {
    return (
        <div className={styles.limiter}>
            <Head>
                <title>Login - ABABA Watchlist</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <div className={styles.wrap}>
                    <div className={styles.login}>
                        <Image
                            src="/assets/img/undraw_netflix_q00o.png"
                            alt=""
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                        />
                    </div>

                    <div className={styles['login-form']}>
                        <span className={`${styles['login-form-title']} ${globalStyles['m-b-54']}`}>
                            Welcome to ABABA watchlist
                        </span>
                        {/* <span className={`${styles['login-form-subtitle']} ${globalStyles['m-b-54']}`}>
                            Member Login
                        </span> */}

                        <div className={`${styles['wrap-input']} ${styles['validate-input']}`}>
                            <input className={styles.input} type="email" name="email" placeholder="Email" />
                            <span className={styles['focus-input']}></span>
                            <span className={styles['symbol-input']}>
                                <FontAwesomeIcon icon={faEnvelope} width={faIconSize} height={faIconSize} />
                            </span>
                        </div>

                        <div className={`${styles['wrap-input']} ${styles['validate-input']}`}>
                            <input className={styles.input} type="password" name="password" placeholder="Password" />
                            <span className={styles['focus-input']}></span>
                            <span className={styles['symbol-input']}>
                                <FontAwesomeIcon icon={faLock} width={faIconSize} height={faIconSize} />
                            </span>
                        </div>

                        <div className={styles['container-login-form-btn']}>
                            <button className={styles['login-form-btn']}>Login</button>
                        </div>

                        <div className={`${globalStyles['p-t-12']} ${globalStyles['text-center']}`}>
                            <span className={styles.txt1}>Forgot</span>{' '}
                            <a className={styles.txt2} href="#">
                                Username / Password?
                            </a>
                        </div>

                        <div className={`${globalStyles['p-t-12']} ${globalStyles['text-center']}`}>
                            <a className={styles.txt1} href="#">
                                Create your Account
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
