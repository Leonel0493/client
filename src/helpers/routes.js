const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    account: '/account',
    projects: '/projects',
    project: (projectId) => (projectId ? `/projects/:${projectId}` : '/projects/:projectId'),
    admin: {
        users: '/admin/user'
    }
};

export default routes