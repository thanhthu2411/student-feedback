
const teacherDashboardPage = (req, res) => {
    console.log("render dashboard");
    res.render('dashboard', {
        title: 'Teacher Dashboard'
    })
}

export {teacherDashboardPage};