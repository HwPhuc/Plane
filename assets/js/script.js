document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
  
        var targetId = this.getAttribute('href').substring(1); // Lấy giá trị id từ href
        var target = document.getElementById(targetId); // Lựa chọn phần tử theo id
  
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' }); // Trượt đến vị trí của phần tử
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    // Xử lý sự kiện scroll
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        // Hiển thị nút khi lăn chuột xuống dưới
        scrollToTopBtn.style.display = 'block';
      } else {
        // Ẩn nút khi lăn chuột lên đầu
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    // Xử lý sự kiện click
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });