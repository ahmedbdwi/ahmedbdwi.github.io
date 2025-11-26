// تمرير سلس بين الأقسام
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// إضافة تأثير بسيط على المهارات (اختياري)
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = '#007bff';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = '#333';
    });
});
