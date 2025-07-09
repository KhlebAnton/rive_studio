document.addEventListener('DOMContentLoaded', function() {
    const screenAccess = document.querySelector('.screen_access');
    const screenHow = document.querySelector('.screen_how');
    const btnAccessYes = document.querySelector('.screen_access .btn-primary');
    const btnAccessNo = document.querySelector('.screen_access .btn-second');
    const btnHowContinue = document.querySelector('.btn_linear');
    const progressLine1 = document.querySelector('.step-progress:first-child .step-progress-line');
    const progressLine2 = document.querySelector('.step-progress:last-child .step-progress-line');
    
    screenAccess.classList.remove('hidden');
    
    animateProgress(progressLine1, 100,5000, function() {
    });
    
    btnAccessYes.addEventListener('click', function() {
        screenAccess.classList.add('hidden');
        
        progressLine1.style.display= 'none';
        
        screenHow.classList.remove('hidden');
        
        animateProgress(progressLine2, 100, 5000, function() {
        });
    });
    
   
    btnHowContinue.addEventListener('click', function() {
      
    });
    
    function animateProgress(element, targetPercent, duration, callback) {
        const startTime = performance.now();
        const startWidth = 0;
        
        function updateProgress(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentWidth = progress * targetPercent;
            
            element.style.width = currentWidth + '%';
            
            if (progress < 1) {
                requestAnimationFrame(updateProgress);
            } else if (callback) {
                callback();
            }
        }
        
        requestAnimationFrame(updateProgress);
    }
});