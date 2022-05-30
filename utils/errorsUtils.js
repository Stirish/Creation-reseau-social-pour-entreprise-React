module.exports.signUpErros = (err) => {
    let errors = { lastName: '', firstName: '', email: '', password: '' }

    if (err.message.includes('lastName'))
        errors.lastName = 'le nom doit faire 3 caractères minimum'
    
    if (err.message.includes('firstName'))
        errors.firstName = 'le prénom doit faire 3 caractères minimum'
    
    if (err.message.includes('email'))
        errors.email = 'email incorrect'
    
    if (err.message.includes('password'))
        errors.password = 'le mot de passe doit faire 6 caractères minimum'
    
    if ( err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = 'Cet email est déjà enregistré'
    
    return errors
};

module.exports.signInErros = (err) => {
    let errors = { email: '', password: '' }

    if (err.message.includes('email'))
        errors.email = 'email inconnu'

    if (err.message.includes('password'))
        errors.password = 'mot de passe incorrect'

    return errors
};