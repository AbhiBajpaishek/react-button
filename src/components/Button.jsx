import './Button.css';

export const Button = ({ variant, text, autoFocus, color }) => {
  const cssClassMap = {
    text: 'variant-text',
    outline: 'variant-outline',
    default: 'btn-default',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
  };
  const classes = `btn ${cssClassMap[color]} ${cssClassMap[variant]}`;
  return (
    <button type="button" className={classes} autoFocus={autoFocus}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Default',
  variant: '',
  autoFocus: false,
  color: '',
};
