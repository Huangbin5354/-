// 导航跳转（点击导航链接滚动到对应区域）
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // 作品过滤（假设有“人像”“风景”“商业”分类）
  const filterButtons = document.querySelectorAll('.filter-btn'); // 需在HTML添加过滤按钮
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category; // 按钮上添加data-category="人像"
      const items = document.querySelectorAll('.gallery-item');
      
      items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // 表单提交（简单验证，实际项目可能需要后端接口）
  const bookingForm = document.getElementById('booking-form');
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('预约提交成功！我们会尽快联系您~');
    bookingForm.reset();
  });
  
  // 图片懒加载（优化性能，只加载可视区域图片）
  document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img');
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src; // 实际项目中可将真实地址存在data-src，这里替换
            imageObserver.unobserve(img);
          }
        });
      });
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  });