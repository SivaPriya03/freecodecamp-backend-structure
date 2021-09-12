const apiPath = {
    USERS: '/api/users',
}
apiPath.USER = `${apiPath.USERS}/:id`;
apiPath.USER_EXERCISE = `${apiPath.USER}/exercises`;
apiPath.USER_LOGS = `${apiPath.USER}/logs`;

module.exports = apiPath;