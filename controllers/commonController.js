exports.echo = (req, res, next) => {
    res.status(200).send({ message: 'common works!' })
}

exports.login = (req, res, next) => {
    res.status(200).send({ message: 'common works!' })
}