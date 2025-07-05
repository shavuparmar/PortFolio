import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div style={styles.container}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd9MvkvDLm_uUoBcD3PZVwbx3Lrc6tzzJPyhJWXd7YLX4LD3A/viewform?embedded=true"
        style={styles.iframe}
        allowFullScreen
        loading="lazy"
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '100%',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:"white"
  },
  iframe: {
    width: '100%',
    maxWidth: '800px',
    height: '100vh',
    border: 'none',
  },
};

export default ContactForm;
