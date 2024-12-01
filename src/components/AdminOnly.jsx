
import { useNavigate } from 'react-router-dom';

const AdminOnly = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    const handleSignIn = () => {
        navigate('/sign-in');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Unauthorized Access</h1>
            <p style={styles.message}>You do not have the necessary permissions to view this page.</p>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={handleGoHome}>Go to Home</button>
                <button style={styles.button} onClick={handleSignIn}>Sign In</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    message: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
    },
    buttonContainer: {
        display: 'flex',
        gap: '1rem',
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        cursor: 'pointer',
    },
};

export default AdminOnly;