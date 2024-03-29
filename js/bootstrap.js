function SectionSlider__init(no) {
    var mySwiper = new Swiper('.section-slider-' + no + ' .swiper-container', {
      effect: 'fade',
      autoplay: {
        delay: 5000,
      },
      loop : true,
      navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
      }
    });
  }
  
  SectionSlider__init(1);
  
  $(function(){
  
    function displayRemainingTime(targetDate) {
      const now = new Date();
        const endDate = new Date(targetDate);
        const timeRemaining = endDate - now;
     
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
     
        time1= `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
  
        $(".timer").text(time1);
        
    }
     
  
    // 타겟 날짜 설정 (예: 2023년 12월 31일 23:59:59)
    const targetDate = new Date('2024-04-20T23:59:59').getTime();
     
    // 1초마다 업데이트
    setInterval(() => {
             displayRemainingTime(targetDate);
    }, 1000);
    
  
  
  })