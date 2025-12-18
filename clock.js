    function updateClock() {
      const options = {
        timeZone: 'Asia/Kuala_Lumpur',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-GB', options);
      const parts = formatter.formatToParts(now);

      let dateStr = '';
      let timeStr = '';
      
      parts.forEach(part => {
        if (['year', 'month', 'day'].includes(part.type)) {
          dateStr += part.value + ' ';
        }
        if (['hour', 'minute', 'second'].includes(part.type)) {
          timeStr += part.value + (part.type !== 'second' ? ':' : '');
        }
      });

      document.getElementById('clock').innerHTML = `${dateStr.trim()}<br>${timeStr}`;
    }
    
    setInterval(updateClock, 1000);
    updateClock();