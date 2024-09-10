// 表单提交交互逻辑
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedback').value;
    document.getElementById('response').textContent = `Thanks for your feedback: "${feedback}"!`;
});

// 滚动淡入效果
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        let position = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.5;
        if (position < screenPosition) {
            element.classList.add('active');
        }
    });
});
