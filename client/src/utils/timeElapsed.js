// 매개변수로 들어온 날짜 ~ 오늘까지 경과한 날짜(일, 개월, 연도)를 반환하는 함수
export const getDaysElapsed = (dateObj) => {
  if (dateObj == undefined) return '--';
  const date = new Date(dateObj.replace(/"/g, "'"));
  const now = new Date();
  var days = Math.floor((now.getTime() - date.getTime()) / 8.64e7);

  // 31일 미만은 날짜 단위로 반환합니다.
  if (days < 31) {
    if (days <= 0) return 'today';
    else if (days === 1) return 'yesterday';
    else return `${days} days ago`;
  }

  // 12달 미만은 개월 단위로 반환합니다.
  const months = Math.floor(days / 30);
  if (months < 12) return months + (months === 1 ? 'month ago' : 'months ago');

  // 그 이상은 연도 수와 개월 수(연도 계산하고 남은 개월 수가 0 이상일 때)를 반환합니다.
  const years = Math.floor(months / 12);
  const monthsLeft = Math.floor(months % 12);

  let yearsAndMonth = years + (years === 1 ? ' year' : ' years');
  if (monthsLeft > 0) {
    yearsAndMonth +=
      ', ' + monthsLeft + (monthsLeft === 1 ? ' month' : ' months');
  }
  return yearsAndMonth + ' ago';
};

// date부터 오늘까지 경과한 시간(초, 분, 시) 또는 date를 25 Aug at 12:34 형식으로 반환하는 함수
export const getTimeElapsed = (dateObj) => {
  if (dateObj == undefined) return dateObj;
  const date = new Date(dateObj.replace(/"/g, "'"));
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // 60초 미만은 초 단위로 반환합니다.
  if (seconds < 60) {
    return seconds <= 1 ? `1 sec ago` : seconds + ` secs ago`;
  }
  // 60분 미만은 분 단위로 반환합니다.
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return minutes + (minutes === 1 ? ` min ago` : ` mins ago`);

  // 24시간 미만은 시간 단위로 반환합니다.
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + (hours === 1 ? ` hour ago` : ` hours ago`);

  // 2일 이하는 일 단위로 반환합니다.
  const days = Math.floor(hours / 24);
  if (days <= 2) {
    if (days === 0) return 'today';
    else if (days === 1) return 'yesterday';
    else return `2 days ago`;
  }

  // 3일 이상은 날짜와 시간을 반환합니다.
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate() + 1;
  const hour = date.getHours();
  let minute = date.getMinutes();
  if (minute < 10) minute = '0' + minute;

  return `${month} ${day} at ${hour}:${minute}`;
};
