import './Button.css';

export const Button = ({
  variant,
  text,
  autoFocus,
  color,
  action,
  disableShadow,
}) => {
  const variantClasses = {
    text: 'variant-text',
    outline: 'variant-outline',
  };

  const colorClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
  };

  const actionClasses = {
    '': 'default-hover__focus',
    outline: 'outline-hover__focus',
    text: 'text-hover__focus',
  };

  const classes = `btn ${colorClasses[color]} ${variantClasses[variant]} ${
    action && actionClasses[variant]
  } ${disableShadow ? 'btn-primary' : ''}
  `;

  console.log(disableShadow);
  return (
    <button type="button" className={classes} autoFocus={autoFocus}>
      {'Default'}
    </button>
  );
};

// Button.defaultProps = {
//   text: 'Default',
//   variant: '',
//   autoFocus: false,
//   color: '',
//   action: false,
// };
