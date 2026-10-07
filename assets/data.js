/* ============================================================
   스케줄 데이터 — 이 파일만 수정하면 사이트에 반영됩니다.
   - date : "YYYY-MM-DD"
   - actor: "yoonsik"(김윤식) | "siwoo"(박시우)
   - time : "HH:MM" (모르면 "" 로 두면 해당 날짜 맨 아래에 '시간 미정'으로 표시)
   - title: 스케줄 이름 / place: 장소(선택)
   - link : 제보받은 링크(선택). 넣으면 스케줄 이름을 누를 때 해당 링크로 이동
   같은 날짜에 여러 개를 적으면 시간순으로 자동 정렬됩니다.
   ※ 아래 항목은 예시입니다. 지우고 실제 일정으로 바꿔주세요.
   ============================================================ */
window.SITE = {
  // 제보 받을 곳 (README 참고): Formspree 주소로 바꿔주세요.
  reportEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
};

window.SCHEDULE = [
  { date: "2026-10-01", actor: "siwoo",   time: "20:00", title: "웹드라마 대본 리딩", place: "" },
  { date: "2026-10-02", actor: "yoonsik", time: "10:30", title: "광고 촬영", place: "경기 파주" },
  { date: "2026-10-03", actor: "yoonsik", time: "14:00", title: "팬미팅 리허설", place: "서울" },
  { date: "2026-10-03", actor: "yoonsik", time: "19:00", title: "팬미팅", place: "서울", link: "https://example.com/fanmeeting" },
  { date: "2026-10-03", actor: "siwoo",   time: "19:00", title: "라디오 게스트", place: "" },
  { date: "2026-10-05", actor: "siwoo",   time: "13:00", title: "뮤직비디오 촬영", place: "" },
  { date: "2026-10-06", actor: "yoonsik", time: "",      title: "공연 연습", place: "" },
  { date: "2026-10-06", actor: "siwoo",   time: "15:00", title: "의상 피팅", place: "" },
  { date: "2026-10-07", actor: "yoonsik", time: "11:00", title: "잡지 인터뷰", place: "" },
  { date: "2026-10-07", actor: "yoonsik", time: "17:00", title: "방송 녹화", place: "상암", link: "https://example.com/broadcast" },
  { date: "2026-10-07", actor: "yoonsik", time: "21:00", title: "VLIVE 라이브", place: "" },
  { date: "2026-10-07", actor: "siwoo",   time: "18:30", title: "시사회 참석", place: "용산" },
  { date: "2026-10-09", actor: "siwoo",   time: "10:00", title: "팬사인회", place: "마포" },
  { date: "2026-10-10", actor: "siwoo",   time: "11:00", title: "화보 촬영", place: "", link: "https://example.com/pictorial" },
  { date: "2026-10-10", actor: "siwoo",   time: "16:30", title: "인터뷰", place: "" },
  { date: "2026-10-10", actor: "yoonsik", time: "",      title: "공연 연습", place: "" },
  { date: "2026-10-12", actor: "yoonsik", time: "19:30", title: "연극 프리뷰", place: "대학로" },
  { date: "2026-10-14", actor: "yoonsik", time: "09:00", title: "드라마 촬영", place: "" },
  { date: "2026-10-14", actor: "siwoo",   time: "09:00", title: "드라마 촬영", place: "" },
  { date: "2026-10-17", actor: "yoonsik", time: "14:00", title: "연극 공연", place: "대학로", link: "https://example.com/play" },
  { date: "2026-10-17", actor: "yoonsik", time: "19:00", title: "연극 공연", place: "대학로", link: "https://example.com/play" },
  { date: "2026-10-17", actor: "siwoo",   time: "19:00", title: "연극 공연", place: "대학로", link: "https://example.com/play" },
  { date: "2026-10-21", actor: "siwoo",   time: "",      title: "스케줄 미정 (제보 기다려요)", place: "" },
  { date: "2026-10-24", actor: "siwoo",   time: "15:00", title: "팬사인회", place: "" },
  { date: "2026-10-28", actor: "yoonsik", time: "12:00", title: "행사 MC", place: "코엑스" },
  { date: "2026-10-28", actor: "siwoo",   time: "12:00", title: "행사 게스트", place: "코엑스" },
  { date: "2026-10-31", actor: "yoonsik", time: "20:00", title: "할로윈 파티", place: "이태원" },
  { date: "2026-10-31", actor: "siwoo",   time: "20:00", title: "할로윈 파티", place: "이태원" }
];
