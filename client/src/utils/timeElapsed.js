// 매개변수로 들어온 날짜 ~ 오늘까지 경과한 날짜(일, 개월, 연도)를 반환하는 함수
export const getDaysElapsed = (date) => {
  const comparingDate = new Date(date).getTime();
  const currentDate = new Date().getTime();
  const daysElapsed = Math.floor((currentDate - comparingDate) / 8.64e7);

  // 31일 미만은 날짜 단위로 반환합니다.
  if (daysElapsed < 31) {
    if (daysElapsed === 0) return 'today';
    else if (daysElapsed === 1) return 'yesterday';
    else return `${daysElapsed} days ago`;
  }

  // 12달 미만은 개월 단위로 반환합니다.
  const monthsElapsed = Math.floor(daysElapsed / 30);
  if (monthsElapsed < 12)
    return monthsElapsed === 1
      ? `${monthsElapsed} month ago`
      : `${monthsElapsed} months ago`;

  // 그 이상은 연도 수와 개월 수(연도 계산하고 남은 개월 수가 0 이상일 때)를 반환합니다.
  const yearsElapsed = Math.floor(monthsElapsed / 12);
  let yearsAndMonth =
    yearsElapsed === 1 ? `${yearsElapsed} year` : `${yearsElapsed} years`;

  const monthsLeft = Math.floor(monthsElapsed % 12);
  if (monthsLeft > 0) {
    yearsAndMonth +=
      monthsLeft === 1 ? `, ${monthsLeft} month` : `, ${monthsLeft} months`;
  }
  return yearsAndMonth + ' ago';
};

// 매개변수로 들어온 시간 ~ 오늘까지 경과한 시간(초, 분, 시)를 반환하는 함수
export const getTimeElapsed = (time) => {
  const comparingDate = new Date(time).getTime();
  const currentDate = new Date().getTime();
  const secondsElapsed = Math.floor((currentDate - comparingDate) / 1000);
  // 60초 미만은 초 단위로 반환합니다.
  if (secondsElapsed < 60)
    return secondsElapsed === 1
      ? `${secondsElapsed} second ago`
      : `${secondsElapsed} seconds ago`;

  // 60분 미만은 분 단위로 반환합니다.
  const minutesElapsed = Math.floor(secondsElapsed / 60);
  if (minutesElapsed < 60)
    return minutesElapsed === 1
      ? `${minutesElapsed} minute ago`
      : `${minutesElapsed} minutes ago`;

  // 그 이상은 시간 단위로 반환합니다.
  const hoursElapsed = Math.floor(minutesElapsed / 60);
  if (hoursElapsed < 60)
    return hoursElapsed === 1
      ? `${hoursElapsed} hour ago`
      : `${hoursElapsed} hours ago`;
};
